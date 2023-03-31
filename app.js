const express = require("express");
const app = express();
const https = require("https")


app.get("/",(req,res)=>{
    res.send("well done")
})

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=5df5aaa05355ac3dbf39a3bd7ade7fa0";
https.get(url ,(res)=>{
    console.log(res);
})





app.listen(3000,()=>{
    console.log("the server is running on port 3000");
}
)