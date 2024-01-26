const express = require("express")
const App = express()

App.get("/", (req, res)=>{
    res.send("Hello World")
    console.log("Hello World");
})
App.get("/welcome", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

App.listen(3000, (err) =>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("server is running on port 3000");
    }
})