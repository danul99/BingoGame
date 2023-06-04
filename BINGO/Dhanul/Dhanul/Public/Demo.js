const console = require("console");
const { Console } = require("console");
const http = require("http");
const app = require("express")();
app.get("/", (req,res)=> res.sendFile(__dirname + "/register.html"))
app.get("/", (req,res)=> res.sendFile(__dirname + "/login.html"))

app.listen(9091, ()=>console.log("Listening on http port 9093"))
const websocketServer = require("websocket").server
const httpServer = http.createServer();
httpServer.listen(9090, () => console.log("Listening.. on 9092"))

let LUname;
let LPword;
let Email;
let Mobile;

let Uname;
let Pword

const wsServer = new websocketServer({
    "httpServer": httpServer
})

wsServer.on("request", request => {
    //connect
    


    const connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("opened!"))
    connection.on("close", () => console.log("closed!"))
    connection.on("message", message => {
        const result = JSON.parse(message.utf8Data)


        if (result.method === "Reg"){
            Uname = result.Uname;
            console.log(Uname);
            Email = result.email;
            console.log(Email);
            Mobile = result.mobile;
            console.log(Mobile);
            Pword = result.Pword;
            console.log(Pword);
            CreateDB();

        }

        if (result.method === "Log"){
            LUname = result.lUname;
            console.log(LUname);
            LPword = result.lPword;
            console.log(LPword);
            ReadDB();
        }

    })
   
    //send back the client connect
    //connection.send(JSON.stringify(payLoad))
})






const { MongoClient } = require('mongodb');

async function CreateDB(){
    const uri = "mongodb+srv://Danul:danul123@cluster0.6wpxfes.mongodb.net/?retryWrites=true&w=majority"

    const clientDB = new MongoClient(uri);

    try{
        await clientDB.connect();

        //await listDatabases(client);


        await createListing(clientDB,
            {
                name: Uname,
                Email:Email,
                mobile: Mobile,
                Password: Pword
            }
        );
    }catch (e) {
        console.error(e);
    }finally {
        await clientDB.close();
    }
}

async function ReadDB(){
    const uri = "mongodb+srv://Danul:danul123@cluster0.6wpxfes.mongodb.net/?retryWrites=true&w=majority"

    const clientDB = new MongoClient(uri);

    try{
        await clientDB.connect();

        //await listDatabases(client);


        await findOneListingByName(clientDB, LUname);

    }catch (e) {
        console.error(e);
    }finally {
        await clientDB.close();
    }
}


//main().catch(console.error);



async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createListing(client, newListing){
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne for the insertOne() docs
    const result = await client.db("Dhalla").collection("login").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function findOneListingByName(client, nameOfListing) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    const result = await client.db("Dhalla").collection("login").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result.Password);
        if (result.Password === LPword){
            console.log("Login Succesefully");
        }
        else{
            console.log("Login Failed");
        }
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}