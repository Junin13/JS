// index.js

const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 3000;

app.get('/somar/:a/:b', (req, res) => {
    const resultado = calculadora.somar(req.params.a, req.params.b);
    res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const resultado = calculadora.subtrair(req.params.a, req.params.b);
    res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const resultado = calculadora.multiplicar(req.params.a, req.params.b);
    res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const resultado = calculadora.dividir(req.params.a, req.params.b);
    res.send(`Resultado da divisão: ${resultado}`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
