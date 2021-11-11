import { reactive } from "vue";


export const gameStore = {

    state: reactive({
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
                answeredQuestionIDList: [14,15,16,17,18,19]
            },
        ],
        questionDB: [
            //PLUS
            {id: 0, question: "2+2", answer: "4", category: 0},
            {id: 1, question: "1+3", answer: "4", category: 0},
            {id: 2, question: "2+5", answer: "7", category: 0},
            {id: 3, question: "6+2", answer: "8", category: 0},
            {id: 4, question: "2+2", answer: "4", category: 0},
            {id: 5, question: "1+3", answer: "4", category: 0},
            {id: 6, question: "2+5", answer: "7", category: 0},
            {id: 7, question: "6+2", answer: "8", category: 0},
            {id: 8, question: "2+2", answer: "4", category: 0},

            //MINUS
            {id: 9, question: "4-3", answer: "1",  category: 1},
            {id: 10, question: "6-5", answer: "1", category: 1},
            {id: 11, question: "6-2", answer: "4", category: 1},
            {id: 12, question: "2-2", answer: "0", category: 1},
            {id: 13, question: "9-3", answer: "6", category: 1},
            {id: 14, question: "6-5", answer: "1", category: 1},
            {id: 15, question: "6-2", answer: "4", category: 1},
            {id: 16, question: "3-2", answer: "1", category: 1},
            {id: 17, question: "6-3", answer: "3", category: 1},
            {id: 18, question: "9-5", answer: "4", category: 1},
            {id: 19, question: "9-2", answer: "7", category: 1}
        ],
        currentUser: {
            name: "",
            id: 0,
            answeredQuestionIDList: [],
        },
    }),
    AddUser(name){
        this.state.userDB.push({
            name: name,
            id: this.state.userDB.length,
            answeredQuestionIDList: []
        })
    },
    DeleteUser(id){
        this.state.userDB = this.state.userDB.filter((user) => { return user.id === id;} );
    },
    GetQuestionDB(){
        return this.state.questionDB;
    }
    // DoesCurrentUserExist() {
    //     if (currentUser.id doesnt exist){
    //         return false;
    //     }
    //     return true;
    // },
    // ChangeCurrentUser({id}) {
    //     if (!this.DoesCurrentUserExist()) {
    //         console.log("USER DOES NOT EXIST")
    //         return
    //     }
    //     this.state.currentUser = GETUSER(ID);
    // },
    // AddQuestionAnsweredToCurrentUser({id}) {
    //     if (!this.DoesCurrentUserExist()) {
    //         console.log("USER DOES NOT EXIST")
    //         return;
    //     } else if (id doesnt
    //     exist in DB
    // )
    //     {
    //         console.log("Question DOES NOT EXIST")
    //         return;
    //     }
    // else
    //     if (id already
    //     exist in currentUser.answeredQuestionIDList
    // )
    //     {
    //         console.log("User already has this question in their list")
    //         return;
    //     }
    //
    //     DB.Post("/user/question", currentUser.id, id);
    //     this.state.currentUser.answeredQuestionIDList.push(id);
    // },
    // DeleteQuestionAnsweredToCurrentUser(id) {
    //     if (!this.DoesCurrentUserExist()) {
    //         console.log("USER DOES NOT EXIST")
    //         return;
    //     } else if (id doesnt exist in DB) {
    //         console.log("Question DOES NOT EXIST")
    //         return;
    //     } else if (id already exist in currentUser.answeredQuestionIDList)
    //      {
    //          console.log("User already has this question in their list")
    //          return;
    //      }
    //
    //     DB.Delete("/user/question/delete", currentUser.id, id);
    //     this.state.currentUser.answeredQuestionIDList.remove(id);
    // },
    // RestartCurrentUser() {
    //     if (!this.DoesCurrentUserExist()) {
    //         console.log("USER DOES NOT EXIST")
    //         return;
    //     }
    //     DB.Post("/user/restart", currentUser.id);
    //     currentUser.answeredQuestionIDList = {};
    // },
    // DeleteCurrentUser(id) {
    //     if (id nono exist){
    //         console.log("USER DOES NOT EXIST")
    //         return;
    //     }
    //     DB.Delete("/user/delete", id);
    // },

}