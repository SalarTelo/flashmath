const express = require("express");
const app = express();
const cors = require('cors');
const {questionDb, subuserDb} = require("./database.js");

app.use(cors());
app.use(express.static('public'));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const HTTP_PORT = 3000;

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.get("/content", (req, res, next) => {
    let sql = "select * from flashmath";
    let params = [];

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


// GET BY ID REQUESTS

app.get("/content/:id", (req, res, next) => {
    let sql = "select * from flashmath WHERE id = ?";
    let params = [req.params.id];

    questionDb.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return err;
        }
        res.json({
            "message": "success",
            "flashmath": row
        })
    });
});

app.get("/users/:id", (req, res, next) => {
    let sql = "select * from subusers WHERE userId = ?";
    let params = [req.params.id];

    subuserDb.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return err;
        }
        res.json({
            "message": "success",
            "sub-users": row
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
    let sql = 'INSERT INTO flashmath (question, answer, category) VALUES (?,?,?)'
    let params = [data.question, data.answer, data.category]
    questionDb.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message})
            return err;
        }
        res.json({
            "message": "success",
            "flashmath": data,
            "id": this.lastID
        })
    });
})

app.post("/users/", (req, res, next) => {
    let data = {
        name: req.body.name,
        answered: req.body.answered,
    }
    let sql = 'INSERT INTO subusers (name, answered) VALUES (?,?)';
    let params = [data.name, data.answered];
    subuserDb.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "sub-users": data,
            "id": this.lastID
        })
    });
})


//DELETE REQUESTS

app.delete("/content/:id", (req, res, next) => {
    questionDb.run(
        'DELETE FROM flashmath WHERE id = ?',
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
    subuserDb.run(
        'DELETE FROM subusers WHERE userId = ?',
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