$(()=>{
    $("#send").click(()=>{
        addMessages({name:"charles", messageDetails:"hello"})
    })
})
function addMessages(message) {
    $("#messages").append(`<h3>${message.name}</h3> <p>${message.messageDetails}</p>`)
}
function getMessages(data){
    $.get()
}