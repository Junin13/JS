
const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 8080;

app.get('/somar/:a/:b', (req, res) => {
  try {
    const resultado = calculadora.somar(req.params.a, req.params.b);
    res.send(`Resultado: ${resultado}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/subtrair/:a/:b', (req, res) => {
  try {
    const resultado = calculadora.subtrair(req.params.a, req.params.b);
    res.send(`Resultado: ${resultado}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/multiplicar/:a/:b', (req, res) => {
  try {
    const resultado = calculadora.multiplicar(req.params.a, req.params.b);
    res.send(`Resultado: ${resultado}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/dividir/:a/:b', (req, res) => {
  try {
    const resultado = calculadora.dividir(req.params.a, req.params.b);
    res.send(`Resultado: ${resultado}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
