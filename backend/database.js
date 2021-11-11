const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "flashmath.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE flashmath (
            questionId INTEGER PRIMARY KEY,
            question TEXT,
            answer INT,
            )`, (err) => {
            if (err) {
                console.log("Table already created")
            } else {
                console.log("Table just created, creating some rows")
                let insert = 'INSERT INTO flashmath (question, answer) VALUES (?,?)'
                db.run(insert, ["2+2", 4])
            }
        })
    }
})


module.exports = db

