const sqlite3 = require('sqlite3').verbose()

const DB = "game.db"

let questionTable = new sqlite3.Database(DB, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        questionTable.run(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY,
            question TEXT,
            answer INT,
            category INT
            )`, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Table just created, creating some rows")
                let insert = 'INSERT INTO questions (question, answer, category) VALUES (?,?,?)'
                questionTable.run(insert, ["2+2", 4, 0])
                questionTable.run(insert, ["2+3", 5, 0])
                questionTable.run(insert, ["2+4", 6, 0])
                questionTable.run(insert, ["2-1", 1, 1])
                questionTable.run(insert, ["3-1", 2, 1])
                questionTable.run(insert, ["4-1", 3, 1])
            }
        })
    }
})
let userTable = new sqlite3.Database(DB, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        userTable.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            Name TEXT
            )`, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Table just created, creating some rows")
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

