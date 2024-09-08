var express = require("express");
var mogoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var conString = "mongodb://127.0.0.1:27017";

app.get("/users", (req, res) => {
    mogoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("todo");
        database.collection("users").find({}).toArray().then(documents => {
            res.send(documents);
            res.end();
        })
    })
});


app.post("/registeruser", (req, res) => {
    var user = {
        "UserId": req.body.UserId,
        "UserName": req.body.UserName,
        "Password": req.body.Password,
        "Mobile": req.body.Mobile
    }

    mogoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("todo");
        database.collection("users").insertOne(user).then(() => {
            console.log("User Registered..");
        })
    })
})


app.listen(4040);

console.log(`Server Started :http://127.0.0.1:4040`);

