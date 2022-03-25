const express = require('express');
const req = require('express/lib/request');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

let pokedex = [
  { numero: 1,
    nome: "Charmander",
    tipo: "Fire",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    altura:"0.6 m",
    peso: "8.5 kg",
    categoria: "Lizard",
    habilidade: "Blaze"},

    { numero: 2,
      nome: "Squirtle",
      tipo: "Water",
      imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      descricao:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      altura:"0.5 m",
      peso: "9.0 kg",
      categoria: "Tiny Turtle",
      habilidade: "Torrent"},

      { numero: 3,
        nome: "Bulbasaur",
        tipo: "Grass / Poison",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        descricao:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        altura:"0.7 m",
        peso: "6.9 kg",
        categoria: "Seed",
        habilidade: "Overgrow"},

        { numero: 4,
          nome: "Charizard",
          tipo: "Fire / Flying",
          imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
          descricao:"It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
          altura:"1.7 m",
          peso: "90.5 kg",
          categoria: "flame",
          habilidade: "Blaze"},

          { numero: 5,
            nome: "Pikachu",
            tipo: "Electric",
            imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
            descricao:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
            altura:"0.4 m",
            peso: "6.0 kg",
            categoria: "Mouse",
            habilidade: "Static"}
]


//ROTAS

app.get('/', (req, res) => {
  res.render('index', {pokedex, message, pokemon});
  message = "";
  res.render({message});
});

app.get('/cadastro', (req, res) => {
  res.render('cadastro', {pokedex});
});

let message = "";

app.post('/cadastro', (req, res) => {
  const pokemon = req.body;
  console.log("Pokemon já cadastrado");
  pokemon.numero = pokedex.length +1;
  pokedex.push(pokemon);
  message = `Pokemon cadastrado com sucesso!`;
  res.redirect('/');
  
});

app.get('/detalhes', (req, res) => {
  res.render('detalhes', {pokemon});
});

let pokemon = [];
app.get('/detalhes/:nome', (req, res) => {
  const nome = req.params.nome;
  pokemon = [];
  pokemon.push(pokedex.find(pokemon => pokemon.nome == nome));
  res.redirect("/detalhes");
});

app.get('/editar', (req, res) =>{
  res.render('editar', {pokemon})
})

app.get('/editar/:nome', (req, res) => {
  const nome = req.params.nome;
  pokemon = [];
  pokemon.push(pokedex.find(pokemon => pokemon.nome == nome));
  res.redirect("/editar");
});

app.get('/editar/:numero', (req, res)=>{
  const num = req.params.numero;
  const pokemon01 = pokedex.find(pokemon => pokemon.nome == num);
  res.redirect('/')
})

app.post('/atualizar/:numero', (req, res)=>{
  const num = +req.params.numero;
  console.log(num);
  const newPokemon = req.body;
  const posicao = pokedex.findIndex(pokemon => pokemon.numero == num);
  console.log(posicao);
  pokedex[posicao]=newPokemon;
  res.redirect('/');
})



app.get('/excluir/:nome', (req, res) => {
  const name = req.params.nome;
  let newArray = pokedex.filter((item) => item.nome !== name);
  console.log(newArray);
  pokedex = newArray; 
  res.redirect('/');
})








app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));