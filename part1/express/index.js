const express = require("express") //importando o express
const app = express() // iniciando o express

app.get("/", function(req, res) {
  res.send("Bem vindo ao primeiro server em express!")
})

app.get("/blog", function(req, res) {
  res.send("bem vindo ao meu blog")
})

app.get("/canal/youtube", function(req, res) {
  res.send("Bem vindo ao meu canal do youtube")
})



app.listen(4000, function(erro) {
  if (erro) {
    console.log("ocorreu um erro")
  } else {
    console.log("servidor iniciado com sucesso!")
  }
})