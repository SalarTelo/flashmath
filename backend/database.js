const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "flashmath.db"
const DBSOURCE2 = "subusers.db"
const DBSOURCE3 = "answeredQuestionsList.db"


let questionDb = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the questionDb database.')
        questionDb.run(`CREATE TABLE flashmath (
            questionId INTEGER PRIMARY KEY,
            question TEXT,
            answer INT,
            category INT
            )`, (err) => {
            if (err) {
                console.log("Table already present!")
            } else {
                console.log("questionDB table just created, creating some rows")
                let insert = 'INSERT INTO flashmath (question, answer) VALUES (?,?)'
                questionDb.run(insert, ["2+2", 4])
            }
        })
    }
})

let subuserDb = new sqlite3.Database(DBSOURCE2, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        subuserDb.run(`CREATE TABLE subusers (
            userId INTEGER PRIMARY KEY,
            Name TEXT,
            answered INT
            )`, (err) => {
            if (err) {
                console.log("Table already present!")
            } else {
                console.log("Table just created, creating some rows")
                let insert = 'INSERT INTO subusers (Name, answered) VALUES (?,?)'
                subuserDb.run(insert, ["Luka", 1])
            }
        })
    }
})

let answeredQuestionsList = new sqlite3.Database(DBSOURCE3, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        answeredQuestionsList.run(`CREATE TABLE answeredquestionslist (
id INTEGER PRIMARY KEY, 
userID INT REFERENCES subusers (userID),
questionID INT REFERENCES flashmath(questionID)
)`, (err) => {
            if (err) {
                console.log("Table already present!")
            } else {
                console.log("Table just created")
            }
        })
    }
})


module.exports = {questionDb, subuserDb, answeredQuestionsList}