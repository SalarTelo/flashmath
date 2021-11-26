import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        userList: [],
        questionList: [],
        questionType: 0,
        currentUser: {
            answeredList: [],
        },

    },
    getters: {

        allMinusQuestions: state => state.questionList.filter(question => question.category === 1),
        allMinusAnsweredQuestions: state => state.currentUser.answeredList.filter(value => value.category === 1),

        allPlusQuestions: state => state.questionList.filter(question => question.category === 0),
        allPlusAnsweredQuestions: state => state.currentUser.answeredList.filter(value => value.category === 0),

        allAnsweredQuestions: state => state.currentUser.answeredList,
        allQuestions: state => state.questionList,

        getRelevantQuestions: state => state.questionList.filter(question => question.category === state.questionType),

        allUsers: state => state.userList
    },
    actions: {
        loadQuestionDB({commit}) {
            axios
                .get("http://localhost:3000/content/")
                .then(data => {
                    let jsonData = JSON.stringify(data.data)
                    let realData = JSON.parse(jsonData)
                    commit('SET_QUESTIONS', realData.questions)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadUserDB({commit}) {
            axios
                .get("http://localhost:3000/users/")
                .then(data => {
                    let jsonData = JSON.stringify(data.data)
                    let realData = JSON.parse(jsonData)
                    commit('SET_USERS', realData.users)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        removeUser({commit}, id) {
            axios.delete('http://localhost:3000/users/' + id)
                .then(() => {
                    commit('REMOVE_USER', id)
                })
                .catch(reason => {
                    console.log(reason)
                });
        },
        setCurrentUser({commit}, user) {
            commit("SET_CURRENT_USER", user);
        },

        addNewUser({commit}, userBody) {
            if (userBody.name === '')
                return;
            axios.post('http://localhost:3000/users/', userBody)
                .then(() => {
                    commit("ADD_USER", userBody);
                }).catch(reason => {
                console.log(reason)
            })
        },
        addQuestionToList({commit}, question) {
            commit("ADD_QUESTION_TO_CURRENT_USER", question);
        },
        setCurrentCategory({commit}, category){
            commit("SET_QUESTION_TYPE", category)
        }
    },
    mutations: {
        ADD_QUESTION_TO_CURRENT_USER(state, question) {
            state.currentUser.answeredList.push(question);
        },
        SET_QUESTIONS(state, list) {
            state.questionList = list;
        },
        SET_USERS(state, list) {
            state.userList = list;
        },
        SET_QUESTION_TYPE(state, type){
            state.questionType = type;
        },
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
        },
        REMOVE_USER(state, id) {
            state.userList = state.userList.filter(user => {
                return user.id !== id
            })
        },
        ADD_USER(state, body) {
            body.id = state.userList.length + 1;
            state.userList.push(body)
        }
    }
})
