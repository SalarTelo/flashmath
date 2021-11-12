const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "flashmath.db"
const DBSOURCE2 = "subusers.db"

let questionDb = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        questionDb.run(`CREATE TABLE flashmath (
            id INTEGER PRIMARY KEY,
            question TEXT,
            answer INT,
            category INT
            )`, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Table just created, creating some rows")
                let insert = 'INSERT INTO flashmath (question, answer, category) VALUES (?,?,?)'
                questionDb.run(insert, ["2+2", 4, 0])
                questionDb.run(insert, ["2+3", 5, 0])
                questionDb.run(insert, ["2+4", 6, 0])
                questionDb.run(insert, ["2-1", 1, 1])
                questionDb.run(insert, ["3-1", 2, 1])
                questionDb.run(insert, ["4-1", 3, 1])
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
            userID INTEGER PRIMARY KEY,
            Name TEXT,
            answered INT
            )`, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Table just created, creating some rows")
                let insert = 'INSERT INTO subusers (Name, answered) VALUES (?,?)'
                subuserDb.run(insert, ["Luka", 1])
            }
        })
    }
})


module.exports = {questionDb, subuserDb}

