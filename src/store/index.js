import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        userDB: [
            {
                name: "Luna",
                id: 0,
                answeredQuestionIDList: []
            }, {
                name: "Adrian",
                id: 1,
                answeredQuestionIDList: [1, 6, 4, 7, 10]
            }, {
                name: "Rishi",
                id: 2,
                answeredQuestionIDList: [14, 15, 16, 17, 18, 19]
            },
        ],
        questionDB: [
            // //PLUS
            // {id: 0, question: "2+2", answer: "4", category: 0},
            // {id: 1, question: "1+3", answer: "4", category: 0},
            // {id: 2, question: "2+5", answer: "7", category: 0},
            // {id: 3, question: "6+2", answer: "8", category: 0},
            // {id: 4, question: "2+2", answer: "4", category: 0},
            // {id: 5, question: "1+3", answer: "4", category: 0},
            // {id: 6, question: "2+5", answer: "7", category: 0},
            // {id: 7, question: "6+2", answer: "8", category: 0},
            // {id: 8, question: "2+2", answer: "4", category: 0},
            //
            // //MINUS
            // {id: 9, question: "4-3", answer: "1",  category: 1},
            // {id: 10, question: "6-5", answer: "1", category: 1},
            // {id: 11, question: "6-2", answer: "4", category: 1},
            // {id: 12, question: "2-2", answer: "0", category: 1},
            // {id: 13, question: "9-3", answer: "6", category: 1},
            // {id: 14, question: "6-5", answer: "1", category: 1},
            // {id: 15, question: "6-2", answer: "4", category: 1},
            // {id: 16, question: "3-2", answer: "1", category: 1},
            // {id: 17, question: "6-3", answer: "3", category: 1},
            // {id: 18, question: "9-5", answer: "4", category: 1},
            // {id: 19, question: "9-2", answer: "7", category: 1}
        ],
        currentUser: {
            name: "",
            id: 0,
            answeredQuestionIDList: [],
        },
    },
    getters: {
        allQuestions: state => state.questionDB,
        allUsers: state => state.userDB
    },
    actions: {
        loadQuestionDB({commit}) {
            axios
                .get("http://localhost:3000/content/")
                .then(data => {
                    let jsonData = JSON.stringify(data.data.flashmath)
                    let realData = JSON.parse(jsonData)
                    commit('SET_QUESTIONS', realData)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mutations: {
        SET_QUESTIONS(state, questionList) {
            state.questionDB = questionList;
        }
    }
})
