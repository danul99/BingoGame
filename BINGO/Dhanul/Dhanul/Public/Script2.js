let ws = new WebSocket("ws://localhost:9090")
const btnR = document.getElementById("btnR");
const Uname = document.getElementById("username");
const Pword = document.getElementById("password");

btnR.addEventListener("click", e =>{
    const payLoad = {
        "method": "Log",
        "lUname": Uname.value,
        "lPword": Pword.value
    }
    //console.log("Send" + Uname,Pword);
    ws.send(JSON.stringify(payLoad));
})

document.getElementById("btnR").onclick = function () {
    location.href = "/register.html";
};