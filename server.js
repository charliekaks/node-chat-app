var express = require("express")
var bodyParser = require("body-parser")
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname))
var messages = [{name: " chuck", message: "How are you"}, {name: "Lousie", message: "Fine"}]

app.get("/messages", (req, res) =>{
    res.send(messages);
})

app.post("/messages", (req, res) =>{
    console.log(req.body);
    res.sendStatus(200)
    messages.push(req.body)
})

var server = app.listen(3000, ()=>{
    console.log("Server is listening on port", server.address().port);
})