exports.somar = (a, b) => {
    return parseFloat(a) + parseFloat(b);
  };
  
  exports.subtrair = (a, b) => {
    return parseFloat(a) - parseFloat(b);
  };
  
  exports.multiplicar = (a, b) => {
    return parseFloat(a) * parseFloat(b);
  };
  
  exports.dividir = (a, b) => {
    if (parseFloat(b) === 0) {
      throw new Error('Divisão por zero não permitida');
    }
    return parseFloat(a) / parseFloat(b);
  };
  