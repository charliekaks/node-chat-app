var socket = io();


$(function() {
    $("#send").click(()=>{
        var message = {name: $("#name").val(), message: $("#message").val()};
        postMessage(message); 
    })
    getMessages();
});


socket.on("message", addMessages)


function addMessages(message) {
    $("#messages").append(`<h3>${message.name}</h3> <p>${message.message}</p>`)
}
function getMessages(data){
    $.get("http://localhost:3000/messages", (data) => {
            console.log(data);
            data.forEach(element => {
               addMessages(element) 
            });
    })
}

function postMessage(message){
    $.post("http://localhost:3000/messages", message)
}