function transporMatriz(A) {
    // Imprimir a matriz original
    console.log("Matriz Original:");
    imprimirMatriz(A);

    // Criar matriz transposta
    let transposta = [];

    // Iterar sobre as colunas da matriz original
    for (let j = 0; j < A[0].length; j++) {
        let linha = [];

        // Iterar sobre as linhas da matriz original
        for (let i = 0; i < A.length; i++) {
            linha.push(A[i][j]);
        }

        // Adicionar linha transposta à matriz transposta
        transposta.push(linha);
    }

    // Imprimir a matriz transposta
    console.log("Matriz Transposta:");
    imprimirMatriz(transposta);
}

// Função auxiliar para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t")); // Usando "\t" para separar os elementos
    }
    console.log(""); // Adicionar uma linha em branco entre as matrizes
}

// Matriz de exemplo para teste
let matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Chamada da função com a matriz de exemplo
transporMatriz(matrizExemplo);
