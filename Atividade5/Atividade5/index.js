// index.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rota para adicionar um novo produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const produto = { id, nome, qtd: parseInt(qtd) };

    let produtos = JSON.parse(fs.readFileSync('produtos.json', 'utf8'));
    produtos.push(produto);

    fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));

    res.send('Produto adicionado ao estoque');
});

// Rota para listar todos os produtos do estoque
app.get('/listar', (req, res) => {
    let produtos = JSON.parse(fs.readFileSync('produtos.json', 'utf8'));
    res.json(produtos);
});

// Rota para remover um produto do estoque
app.get('/remover/:id', (req, res) => {
    const { id } = req.params;

    let produtos = JSON.parse(fs.readFileSync('produtos.json', 'utf8'));
    produtos = produtos.filter(produto => produto.id !== id);

    fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));

    res.send('Produto removido do estoque');
});

// Rota para editar a quantidade de um produto do estoque
app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const quantidade = parseInt(qtd);

    let produtos = JSON.parse(fs.readFileSync('produtos.json', 'utf8'));
    const produtoIndex = produtos.findIndex(produto => produto.id === id);

    if (produtoIndex !== -1) {
        produtos[produtoIndex].qtd = quantidade;
        fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));
        res.send('Quantidade do produto atualizada');
    } else {
        res.send('Produto não encontrado');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
