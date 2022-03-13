const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const jsonParser = bodyParser.json()

const usuarios = [
    {
        id: 12,
        nome: "Anita",
        sobrenome: "Catitona"
    },
    {
        id: 13,
        nome: "Charlinho",
        sobrenome: "Charmoso"
    }
];

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
});


app.get('/usuarios', (req, res) => {
    res.send(usuarios)
});


app.post('/usuarios', jsonParser, (req, res) => {
    console.log(req.body)
    const newUser = req.body
    usuarios.push(newUser)
    res.send(usuarios)
});


app.delete('/usuarios/:index', (req, res) => {
    const {index} = req.params
    usuarios.splice(index, 1)
    res.send(usuarios)
});


app.put('/usuarios/:index', jsonParser, (req, res) => {
    const {index} = req.params;
    const {id} = req.body
    const {nome} = req.body
    const {sobrenome} = req.body;
    usuarios[index].id = id;
    usuarios[index].nome = nome;
    usuarios[index].sobrenome = sobrenome;
    res.send(usuarios)
});


console.log("Está rodando, o servidor.")

app.listen(3000);