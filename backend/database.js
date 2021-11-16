const sqlite3 = require('sqlite3').verbose()

const DB = "game.db"

let questionTable = new sqlite3.Database(DB, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        questionTable.run(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY,
            question TEXT,
            answer INT,
            category INT
            )`, (err) => {
            if (err) {
                console.log(err)
            } else {
                let insert = 'INSERT INTO questions (question, answer, category) VALUES (?,?,?)'

                for (let i = 0; i < 10; i++){
                    for (let j = 0; j < 10; j++){
                        let plusQuiz = i + '+' + j;
                        let minusQuiz = i + '-' + j;
                        questionTable.run(insert, [plusQuiz, i+j, 0])
                        if(i >= j)
                        questionTable.run(insert, [minusQuiz, i-j, 1])
                    }
                }
            }
        })
    }
})
let userTable = new sqlite3.Database(DB, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        userTable.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            Name TEXT
            )`, (err) => {
            if (err) {
                console.log(err)
            } else {
                let insert = 'INSERT INTO users (Name) VALUES (?)'
                userTable.run(insert, "Luka")
                userTable.run(insert, "Salar")
                userTable.run(insert, "Jessica")
                userTable.run(insert, "Deepthi")
            }
        })
    }
})


module.exports = {questionTable, userTable}

