var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var mongoose = require("mongoose")
mongoose.Promise = Promise


dbUrl = "mongodb://user:password123@ds125241.mlab.com:25241/node-chat-app";


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname))

var Message = mongoose.model("Message", {
    name : String,
    message : String
})


app.get("/messages", (req, res) =>{
    Message.find({}, (err, messages)=>{
        res.send(messages);
    })
    
})

app.post("/messages", async (req, res) =>{
    
    try {
        var message = new Message(req.body)
        var savedMessage = await  message.save()

        var censored = await Message.findOne({message: "badword"})
            if (censored) {
                await Message.remove({_id: censored_id})
            }else {
                io.emit("message", req.body);
            }
            
            res.sendStatus(200);

    } catch (error) {
        res.sendStatus(500)
        return console.error(error)
    }
    
})

io.on('connection', (socket)=>{
    console.log("User connected");
    
})

mongoose.connect(dbUrl, (err)=>{
    console.log("mongo db connected");
    
})
var server = http.listen(3000, ()=>{
    console.log("Server is listening on port", server.address().port);
})