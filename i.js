const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cookieParser())

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.listen(2000);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  res.redirect("/login");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.cookie("username",username)
  res.cookie("password",password)
  res.redirect("/start")
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/start",(req,res)=>{
    res.send(`your name is ${req.cookies.username}`)
    res.send(`your password is ${req.cookies.password}`)
})
