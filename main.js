const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json())
app.listen(3000);

app.get("*", (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.post("/add-contact", (req, res) => {
  const { number, name} = req.body;
  console.log(number, name);
});

fetch("/application/json/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({a: number, b: name})
})


