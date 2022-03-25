const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"  
})

setTimeout(() => {
    message.style.display = "none"    
}, 5000)

message = "";
while(message == ""){
    message.style.display = "none"
}