const express = require("express");
const app = express();
const https = require("https")


app.get("/",(req,res)=>{

    const query = "London"
    const apiKey = "5df5aaa05355ac3dbf39a3bd7ade7fa0";
    const units = "metric"

const url =
  "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&units="+ units+"&appid="+ apiKey;

https.get(url, (response) => {
  response.on("data", (data) => {

    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const imageUrl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
    res.write("<p>the weather currently is  " + description + "</p>")
    res.write("<h1>the temp in London  is  " + temp  +"</h1>");
    res.write("<img src =" +imageUrl + ">")
    res.send()
  });
})
})

app.listen(3000,()=>{
    console.log("the server is running on port 3000");
}
)