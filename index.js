const express = require('express');
let path = require('./utilFunctions');

const app = express();


app.get('/', (req, res) => {
    res.send('Bem vindo!');
})
app.get('/sobre', (req, res) => {
    res.send('Você está na página sobre');
})

app.get('/blog', (req, res) => {
    res.send('Você está na página blog');
})

app.get('/caminho/:nome/:cargo', (req, res ) => {
    let template = 
    `   
        <h1> Olá ${req.params.nome}! </h1>
        <h1> Seu cargo é ${req.params.cargo}! </h1>
    `
    res.send(template);
})

app.get('/frontEnd', (req, res) => {
    res.sendFile(path('/frontEnd/index.html'));
})
app.listen(8081, () => {
    console.log('Teste');
});