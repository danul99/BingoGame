function ran(cardId) {
    const payLoad = {
     "method": "play"
    }
    ws.send(JSON.stringify(payLoad))
    console.log(cardId);
    console.log("ok");
}

let v1 = 0;
            let v2 = 0;
            let v3 = 0;
            let v4 = 0;
            let v5 = 0;

            let h1 = 0;
            let h2 = 0;
            let h3 = 0;
            let h4 = 0;
            let h5 = 0;

            let k1 = 0;
            let k2 = 0;

            let a1 = 0;
            let a2 = 0;
            let a3 = 0;
            let a4 = 0;
            let a5 = 0;

            let a6 = 0;
            let a7 = 0;
            let a8 = 0;
            let a9 = 0;
            let a10 = 0;

            let a11 = 0;
            let a12 = 0;
            let a13 = 0;
            let a14 = 0;
            let a15 = 0;

            let a16 = 0;
            let a17 = 0;
            let a18 = 0;
            let a19 = 0;
            let a20 = 0;

            let a21 = 0;
            let a22 = 0;
            let a23 = 0;
            let a24 = 0;
            let a25 = 0;

            let w = 0;

            function swapCards(card){
                if (card === 1 && a1 === 0){
                    v1++;
                    h1++;
                    k1++; 
                }
                else if(card ===2 && a2 === 0){
                    h2++;
                    v1++;
                }
                else if(card ===3 && a3 === 0){
                    h3++;
                    v1++;
                }
                else if(card ===4 && a4 === 0){
                    h4++;
                    v1++;
                }
                else if(card ===5 && a5 === 0){
                    h5++;
                    v1++;
                    k2++;
                }
                    else if(card ===6 && a6 === 0){
                        h1++;
                        v2++;
                    }
                    else if(card ===7 && a7 === 0){
                        h2++;
                        v2++;
                        k1++;
                    }
                    else if(card ===8 && a8 === 0){
                        h3++;
                        v2++;
                    }
                    else if(card ===9 && a9 === 0){
                        h4++;
                        v2++;
                        k2++;
                    }
                    else if(card ===10 && a10 === 0){
                        h5++;
                        v2++;
                    }
                    else if(card ===11 && a11 === 0){
                        h1++;
                        v3++;
                    }
                    else if(card ===12 && a12 === 0){
                        h2++;
                        v3++;
                    }
                    else if(card ===13 && a13 === 0){
                        h3++;
                        v3++;
                        k1++;
                        k2++;
                    }
                    else if(card ===14 && a14 === 0){
                        h4++;
                        v3++;
                    }
                    else if(card ===15 && a15 === 0){
                        h5++;
                        v3++;
                    }
                    else if(card ===16 && a16 === 0){
                        h1++;
                        v4++;
                    }
                    else if(card ===17 && a17 === 0){
                        h2++;
                        v4++;
                        k2++;
                    }
                    else if(card ===18 && a18 === 0){
                        h3++;
                        v4++;
                    }
                    else if(card ===19 && a19 === 0){
                        h4++;
                        v4++;
                        k1++;
                    }
                    else if(card ===20 && a20 === 0){
                        h5++;
                        v4++;
                    }
                    else if(card ===21 && a21 === 0){
                        h1++;
                        v5++;
                        k2++;
                    }
                    else if(card ===22 && a22 === 0){
                        h2++;
                        v5++;
                    }
                    else if(card ===23 && a23 === 0){
                        h3++;
                        v5++;
                    }
                    else if(card ===24 && a24 === 0){
                        h4++;
                        v5++;
                    }
                    else if(card ===25 && a25 === 0){
                        h5++;
                        v5++;
                        k1++;
                    }
                

                    if (v1 === 5){
                        console.log("win v1");
                        w++;
                        v1 = 0;
                    }
                    else if(v2 === 5){
                        console.log("win v2");
                        w++;
                        v2 = 0;
                    }
                    else if(v3 === 5){
                        console.log("win v3");
                        w++;
                        v3 = 0;
                    }
                    else if(v4 === 5){
                        console.log("win v4");
                        w++;
                        v4 = 0;
                    }
                    else if(v5 === 5){
                        console.log("win v5");
                        w++;
                        v5 = 0;
                    }
                    else if(h1 === 5){
                        console.log("win h1");
                        w++;
                        h1 = 0;
                    }
                    else if(h2 === 5){
                        console.log("win h2");
                        w++;
                        h2 = 0;
                    }
                    else if(h3 === 5){
                        console.log("win h3");
                        w++;
                        h3 = 0;
                    }
                    else if(h4 === 5){
                        console.log("win h4");
                        w++;
                        h4 = 0;
                    }
                    else if(h5 === 5){
                        console.log("win h5");
                        w++;
                        h5 = 0;
                    }
                    else if(k1 === 5){
                        console.log("win k1");
                        w++;
                        k1 = 0;
                    }
                    else if(k2 === 5){
                        console.log("win k2");
                        w++;
                        k2 = 0;
                    }

                    if(w === 1){
                        document.getElementById('first').style.display = "block"
                    }
                    else if(w === 2){
                        document.getElementById('second').style.display = "block"
                    }
                    else if(w === 3){
                        document.getElementById('third').style.display = "block"
                    }
                    else if(w === 4){
                        document.getElementById('fourth').style.display = "block"
                    }
                    else if(w >= 5){
                        document.getElementById('fifth').style.display = "block"
                        alert("You are the Winner!!!");
                    }
                }

                //HTML elements
        let clientId = null;
        let gameId = null;
        let playerColor = null;
        let group2 = []; 

        let ws = new WebSocket("ws://localhost:9090")
        const btnCreate = document.getElementById("btnCreate");
        const btnJoin = document.getElementById("btnJoin");
        const txtGameId = document.getElementById("txtGameId");
        const divPlayers = document.getElementById("divPlayers");
        const divBoard = document.getElementById("divBoard");
        const gamelink = document.getElementById("gamelink");

        function copy_data(containerid) {
            var range = document.createRange();
            range.selectNode(containerid); //changed here
            window.getSelection().removeAllRanges(); 
            window.getSelection().addRange(range); 
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            alert("Join Game ID Copied");
          }
    
        //wiring events
        btnJoin.addEventListener("click", e => {
            document.getElementById('content').style.display = "block"
            document.getElementById('join').style.display = "none";
            if (gameId === null)
                gameId = txtGameId.value;
            
            const payLoad = {
                "method": "join",
                "clientId": clientId,
                "gameId": gameId
            }

            ws.send(JSON.stringify(payLoad));


        })

        btnCreate.addEventListener("click", e => {
            document.getElementById('join').style.display = "block";
            document.getElementById('txtGameId').style.display = "none";
            
            const payLoad = {
                "method": "create",
                "clientId": clientId
            }

            ws.send(JSON.stringify(payLoad));

        })

        ws.onmessage = message => {
            //message.data
            const response = JSON.parse(message.data);
            //connect
            if (response.method === "connect"){
                clientId = response.clientId;
                console.log("Client id Set successfully " + clientId)
            }

            //create
            if (response.method === "create"){
                gameId = response.game.id;
                console.log("game successfully created with id " + response.game.id )  
                const e = document.createElement("div");
                e.textContent = gameId;
                gamelink.appendChild(e);
            }


            //update
            if (response.method === "update"){
                let tempNum = response.tn;
                
                    document.getElementById("RanNumDis").innerHTML = tempNum;
                    console.log(tempNum);
            }

            //join
            if (response.method === "join"){
                const game = response.game;

                /*while(divPlayers.firstChild)
                    divPlayers.removeChild (divPlayers.firstChild)*/

                game.clients.forEach (c => {

                    const d = document.createElement("div");
                    d.style.width = "280px";
                    d.style.background = c.color
                    d.textContent = c.clientId;
                    divPlayers.appendChild(d);

                    if (c.clientId === clientId) playerColor = c.color;
                })
            }
        }

        function shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
              }
              
              
                      let variables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
                      shuffle(variables);
              
                      group2.splice(0, group2.length);
              
              for (let i = 0; i < variables.length; i++) {
                  group2.push(variables[i]);
              }
    
        document.getElementById("a1").innerHTML = group2[0];
        document.getElementById("a2").innerHTML = group2[1];
        document.getElementById("a3").innerHTML = group2[2];
        document.getElementById("a4").innerHTML = group2[3];
        document.getElementById("a5").innerHTML = group2[4];

        document.getElementById("a6").innerHTML = group2[5];
        document.getElementById("a7").innerHTML = group2[6];
        document.getElementById("a8").innerHTML = group2[7];
        document.getElementById("a9").innerHTML = group2[8];
        document.getElementById("a10").innerHTML = group2[9];

        document.getElementById("a11").innerHTML = group2[10];
        document.getElementById("a12").innerHTML = group2[11];
        document.getElementById("a13").innerHTML = group2[12];
        document.getElementById("a14").innerHTML = group2[13];
        document.getElementById("a15").innerHTML = group2[14];

        document.getElementById("a16").innerHTML = group2[15];
        document.getElementById("a17").innerHTML = group2[16];
        document.getElementById("a18").innerHTML = group2[17];
        document.getElementById("a19").innerHTML = group2[18];
        document.getElementById("a20").innerHTML = group2[19];  
        
        document.getElementById("a21").innerHTML = group2[20];
        document.getElementById("a22").innerHTML = group2[21];
        document.getElementById("a23").innerHTML = group2[22];
        document.getElementById("a24").innerHTML = group2[23];
        document.getElementById("a25").innerHTML = group2[24];

    let btnsqare0 = document.querySelector('#a1');
    let btnsqare1 = document.querySelector('#a2');
    let btnsqare2 = document.querySelector('#a3');
    let btnsqare3 = document.querySelector('#a4');
    let btnsqare4 = document.querySelector('#a5');
    let btnsqare5 = document.querySelector('#a6');
    let btnsqare6 = document.querySelector('#a7');
    let btnsqare7 = document.querySelector('#a8');
    let btnsqare8 = document.querySelector('#a9');
    let btnsqare9 = document.querySelector('#a10');
    let btnsqare10 = document.querySelector('#a11');
    let btnsqare11 = document.querySelector('#a12');
    let btnsqare12 = document.querySelector('#a13');
    let btnsqare13 = document.querySelector('#a14');
    let btnsqare14 = document.querySelector('#a15');
    let btnsqare15 = document.querySelector('#a16');
    let btnsqare16 = document.querySelector('#a17');
    let btnsqare17 = document.querySelector('#a18');
    let btnsqare18 = document.querySelector('#a19');
    let btnsqare19 = document.querySelector('#a20');
    let btnsqare20 = document.querySelector('#a21');
    let btnsqare21 = document.querySelector('#a22');
    let btnsqare22 = document.querySelector('#a23');
    let btnsqare23 = document.querySelector('#a24');
    let btnsqare24 = document.querySelector('#a25');

    btnsqare0.addEventListener('click', ()=> btnsqare0.style.backgroundColor="yellow")
    btnsqare1.addEventListener('click', ()=> btnsqare1.style.backgroundColor="yellow")
    btnsqare2.addEventListener('click', ()=> btnsqare2.style.backgroundColor="yellow")
    btnsqare3.addEventListener('click', ()=> btnsqare3.style.backgroundColor="yellow")
    btnsqare4.addEventListener('click', ()=> btnsqare4.style.backgroundColor="yellow")
    btnsqare5.addEventListener('click', ()=> btnsqare5.style.backgroundColor="yellow")
    btnsqare6.addEventListener('click', ()=> btnsqare6.style.backgroundColor="yellow")
    btnsqare7.addEventListener('click', ()=> btnsqare7.style.backgroundColor="yellow")
    btnsqare8.addEventListener('click', ()=> btnsqare8.style.backgroundColor="yellow")
    btnsqare9.addEventListener('click', ()=> btnsqare9.style.backgroundColor="yellow")
    btnsqare10.addEventListener('click', ()=> btnsqare10.style.backgroundColor="yellow")
    btnsqare11.addEventListener('click', ()=> btnsqare11.style.backgroundColor="yellow")
    btnsqare12.addEventListener('click', ()=> btnsqare12.style.backgroundColor="yellow")
    btnsqare13.addEventListener('click', ()=> btnsqare13.style.backgroundColor="yellow")
    btnsqare14.addEventListener('click', ()=> btnsqare14.style.backgroundColor="yellow")
    btnsqare15.addEventListener('click', ()=> btnsqare15.style.backgroundColor="yellow")
    btnsqare16.addEventListener('click', ()=> btnsqare16.style.backgroundColor="yellow")
    btnsqare17.addEventListener('click', ()=> btnsqare17.style.backgroundColor="yellow")
    btnsqare18.addEventListener('click', ()=> btnsqare18.style.backgroundColor="yellow")
    btnsqare19.addEventListener('click', ()=> btnsqare19.style.backgroundColor="yellow")
    btnsqare20.addEventListener('click', ()=> btnsqare20.style.backgroundColor="yellow")
    btnsqare21.addEventListener('click', ()=> btnsqare21.style.backgroundColor="yellow")
    btnsqare22.addEventListener('click', ()=> btnsqare22.style.backgroundColor="yellow")
    btnsqare23.addEventListener('click', ()=> btnsqare23.style.backgroundColor="yellow")
    btnsqare24.addEventListener('click', ()=> btnsqare24.style.backgroundColor="yellow")
