import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bname = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bnameGenerate(req, res, next){
  console.log(req.body);
  bname = req.body["street"] + req.body["pet"];
  next();

}

app.use(bnameGenerate);

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
  res.send("<h1>Your bandname is</h1><h2>"+bname+"🎵</h2>");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
