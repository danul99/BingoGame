let ws = new WebSocket("ws://localhost:9090")
const btnR = document.getElementById("btnR");
const Uname = document.getElementById("username");
const Email = document.getElementById("Email");
const Mobile = document.getElementById("Mobile");
const Pword = document.getElementById("password");

btnR.addEventListener("click", e =>{
    const payLoad = {
        "method": "Reg",
        "Uname": Uname.value,
        "email": Email.value,
        "mobile": Mobile.value,
        "Pword": Pword.value,
    }
    //console.log("Send" + Uname,Pword);
    ws.send(JSON.stringify(payLoad));
})