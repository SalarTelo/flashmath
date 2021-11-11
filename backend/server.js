const express = require("express");
const app = express();
const cors = require('cors');
const db = require("./database.js");

app.use(cors());
app.use(express.static('public'));

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const HTTP_PORT = 3000

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.get("/content", (req, res, next) => {
    let sql = "select * from flashmath"
    let params = []
    db.all(sql, params, (err, rows) => {
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


app.get("/content/:id", (req, res, next) => {
    let sql = "select * from flashmath where questionId = ?"
    let params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            // "message": "success",
            "flashmath": row
        })
    });
});

app.post("/content/", (req, res, next) => {
    let data = {
        question: req.body.question,
        answer: req.body.answer
    }
    let sql = 'INSERT INTO flashmath (question, answer) VALUES (?,?)'
    let params = [data.question, data.answer]
    db.run(sql, params, function (err, result) {
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
    db.run(
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

