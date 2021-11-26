const express = require("express");
const app = express();
const cors = require('cors');
const {userTable, questionTable} = require("./database.js");

app.use(cors())
app.use(express.static('public'));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const HTTP_PORT = 3000;

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.get("/content", (req, res, next) => {
    let sql = "select * from questions";
    let params = [];

    questionTable.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "questions": rows
        })
    });
});

app.get("/users", (req, res, next) => {
    let sql = "select * from users"
    let params = []

    userTable.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "users": rows
        })
    });
});


// GET BY ID REQUESTS

app.get("/content/:id", (req, res, next) => {
    let sql = "select * from questions WHERE id = ?";
    let params = [req.params.id];

    questionTable.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return err;
        }
        res.json({
            "message": "success",
            "questions": row
        })
    });
});

app.get("/users/:id", (req, res, next) => {
    let sql = "select * from users WHERE userId = ?";
    let params = [req.params.id];

    userTable.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return err;
        }
        res.json({
            "message": "success",
            "users": row
        })
    });
});


// POST REQUESTS

app.post("/content/", (req, res, next) => {
    let data = {
        question: req.body.question,
        answer: req.body.answer,
        category: req.body.category
    }
    let sql = 'INSERT INTO questions (question, answer, category) VALUES (?,?,?)'
    let params = [data.question, data.answer, data.category]
    questionTable.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message})
            return err;
        }
        res.json({
            "message": "success",
            "questions": data,
            "id": this.lastID
        })
    });
})

app.post("/users/", (req, res, next) => {
    console.log(req.body)
    let data = {
        name: req.body.name
    }
    let sql = 'INSERT INTO users (name) VALUES (?)';
    let params = [data.name];
    userTable.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message})
            return err;
        }
        res.json({
            "message": "success",
            "users": data,
            "id": this.lastID
        })
    });
})


//DELETE REQUESTS

app.delete("/content/:id", (req, res, next) => {
    questionTable.run(
        'DELETE FROM questions WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err) {
                res.status(400).json({"error": res.message})
                return err;
            }
            res.json({"message": "deleted", rows: this.changes})
        });
})

app.delete("/users/:id", (req, res, next) => {
    userTable.run(
        'DELETE FROM users WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err) {
                res.status(400).json({"error": res.message})
                return err;
            }
            res.json({"message": "deleted", rows: this.changes})
        });
})

app.get("/", (req, res, next) => {
    res.json({"message": "Ok"})
});
