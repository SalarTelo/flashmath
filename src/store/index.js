import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        userList: [],
        questionList: [],
        currentUser: {},
    },
    getters: {
        allQuestions: state => state.questionList,
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
            });
        }
    },
    mutations: {
        SET_QUESTIONS(state, list) {
            state.questionList = list;
        },
        SET_USERS(state, list) {
            state.userList = list;
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