const express = require("express");
const app = express();
const https = require("https")


app.get("/",(req,res)=>{

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=5df5aaa05355ac3dbf39a3bd7ade7fa0";

https.get(url, (response) => {
  response.on("data", (data) => {

    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    res.write("<p>the weather currently is  " + description + "</p>")
    res.write("<h1>the temp in London is " + temp  +"</h1>");
    res.send()
  });
})
})

app.listen(3000,()=>{
    console.log("the server is running on port 3000");
}
)