const calculadora = require('../calculadora/calculadora');

exports.index = (req, res) => {
    res.render('index');
};

exports.calcular = (req, res) => {
    const { numero1, numero2, operacao } = req.body;

    if (isNaN(numero1) || isNaN(numero2)) {
        res.render('index', { error: 'Por favor, insira valores numéricos válidos.' });
        return;
    }

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const resultado = calculadora.calcular(num1, num2, operacao);
    const operacaoNome = calculadora.getOperacaoNome(operacao);

    res.render('resultado', { resultado, operacao: operacaoNome });
};
