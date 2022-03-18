const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());

const pokedex = [
  { id: 1,
    nome: "Pikashu",
    tipo: "Electric",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    altura:"0.4 m",
    peso: "6.0 kg",
    categoria: "Mouse",
    habilidade: "Static"}
]


//ROTAS
let pokemon = undefined;

app.post('/', (req, res) => {  
  res.render("index", {pokedex, pokemon});
})

app.post('/add', (req, res) =>{
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.post("/info/:id"), (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find(pokemon => pokemon.id === id);
  res.redirect("/");
}

app.post("/update/:id", (req, res) => {
  const id = +req.params.id-1;
  const newPokemon = req.body;
  pokedex[id] = newPokemon;
  pokemon = undefined;

  res.redirect("/");
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))