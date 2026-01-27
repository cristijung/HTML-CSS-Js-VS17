// functions

// ex de sintaxe
function saudacao(nome) {  // entre ()  são os parâmetros
    return `Olá, ${nome}! Seja Bem Vindo(a)!!`;
}

console.log(saudacao("Ana Banana"));  // passo o argumento da função

console.log('----------------------------')
// função com uma expressão --> funções puras
const somar = function(a, b) {
    return a + b;
}
console.log(somar(5, 25));
console.log('----------------------------')

// função com múltiplos parâmetros
const multiplicar = (x, y) => {
    return x * y;
}

console.log(multiplicar(4, 6));

// exe com um único parâmetro
const dobrar = numero => numero * 2  
console.log(dobrar(14));

// Parâmetros e Argumentos
// - parâmetro: nome da variável que a função espera receber (nome, a, b)
// - argumentos: são os valores q são passados nos argumentos