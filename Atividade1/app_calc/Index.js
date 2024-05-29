const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8080;

// Configurar o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');
app.use('/', calculadoraRoutes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
