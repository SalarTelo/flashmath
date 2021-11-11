const express = require("express");
const app = express();
const cors = require('cors');
const {questionDb, subuserDb, answeredQuestionsList} = require("./database.js");

app.use(cors());
app.use(express.static('public'));

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const HTTP_PORT = 3000

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

// GET ALL REQUESTS

app.get("/content", (req, res, next) => {
    let sql = "select * from flashmath"
    let params = []
    questionDb.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "flashmath": rows
        })
    });
});

app.get("/users", (req, res, next) => {
    let sql = "select * from subusers"
    let params = []
    subuserDb.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "sub-users": rows
        })
    });
});

app.get("/answeredlist", (req, res, next) => {
    let sql = "select * from answeredquestionslist"
    let params = []
    answeredQuestionsList.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "answered questions list": rows
        })
    });
});


// GET BY ID REQUESTS

app.get("/content/:id", (req, res, next) => {
    let sql = "select * from flashmath where questionId = ?"
    let params = [req.params.id]
    questionDb.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "flashmath": row
        })
    });
});

app.get("/users/:id", (req, res, next) => {
    let sql = "select * from subusers where userId = ?"
    let params = [req.params.id]
    subuserDb.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "flashmath": row
        })
    });
});

app.get("/answeredlist/:id", (req, res, next) => {
    let sql = "select * from answeredquestionslist where Id = ?"
    let params = [req.params.id]
    answeredQuestionsList.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "flashmath": row
        })
    });
});

//POST requests

app.post("/content/", (req, res, next) => {
    let data = {
        question: req.body.question,
        answer: req.body.answer,
        category: req.body.category
    }
    let sql = 'INSERT INTO flashmath (question, answer, category) VALUES (?,?,?)'
    let params = [data.question, data.answer, data.category]
    questionDB.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "flashmath": data,
            "id": this.lastID
        })
    });
})

app.delete("/content/:id", (req, res, next) => {
    questionDB.run(
        'DELETE FROM flashmath WHERE questionId = ?',
        req.params.id,
        function (err, result) {
            if (err) {
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message": "deleted", rows: this.changes})
        });
})

app.get("/", (req, res, next) => {
    res.json({"message": "Ok"})
});

