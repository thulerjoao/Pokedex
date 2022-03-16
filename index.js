const express = require('express')
const path = require('path')
const app = express()

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

const pokedex = [
  {numero: "025",
    nome: "pikashu",
    tipo: "Electric",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    altura:"0.4 m",
    peso: "6.0 kg",
    categoria: "Mouse",
    habilidade: "Static"},
    {numero: "025",
    nome: "pikashu",
    tipo: "Electric",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    altura:"0.4 m",
    peso: "6.0 kg",
    categoria: "Mouse",
    habilidade: "Static"},
    {numero: "025",
    nome: "pikashu",
    tipo: "Electric",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    altura:"0.4 m",
    peso: "6.0 kg",
    categoria: "Mouse",
    habilidade: "Static"},
    {numero: "025",
    nome: "pikashu",
    tipo: "Electric",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    altura:"0.4 m",
    peso: "6.0 kg",
    categoria: "Mouse",
    habilidade: "Static"},
    {numero: "025",
    nome: "pikashu",
    tipo: "Electric",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    altura:"0.4 m",
    peso: "6.0 kg",
    categoria: "Mouse",
    habilidade: "Static"}
]


//ROTAS
app.get('/', function (req, res) {
  res.render("index", {pokedex});
})

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"))