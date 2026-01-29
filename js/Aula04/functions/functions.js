// Funções Puras
console.log("--- Funções Puras --- \n");

function somar(a, b) {
    return a + b;
}
const re1 = somar(2, 4);
const re2 = somar(2, 4);
console.log(re1)
console.log(re2)

console.log("------ \n");
// ex. de função pura com arrow function
const adicao = (a, b) => a + b;
console.log(adicao(5, 6));

const dobro = (numero) => numero * 2;
console.log(dobro(12));

console.log("------------------------------------------ \n");
//-----------------------------------------------------------

// Funções Impuras
console.log("--- Funções Impuras --- \n");
let total = 2;  //variavel com escopo global 
function adicionarAoTotal(valor) {
    total += valor; // aqui já indica q haverá um efeito colateral externo
    return total;
}

console.log(adicionarAoTotal(2));
console.log(adicionarAoTotal(4));

console.log("------------------------------------------ \n");
// ex. função impura com arrow function
let contadorGlobal = 0;
const incrementar = (valor) => {
    contadorGlobal += valor;
    return contadorGlobal;
}
console.log(incrementar(1));
console.log(incrementar(2));
console.log(incrementar(3));
console.log(incrementar(4));

console.log(`Valor final do contador de terminal: ${contadorGlobal}`);


// Funções de Primeira Ordem -- Primeira Classe
// primeira carcaterística. ter uma variável atribuída a ela
const saudacao = function(nome) {
    return `Olá, ${nome}!!`;
}
console.log(saudacao("Ana Banana"));

//segunda caractewrística: passada como argumentos p outras funções
function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}

function adicionar(x, y) {
    return x + y;
}
function subtrair(x, y) {
    return x - y;
}
console.log(aplicarOperacao(2, 2, adicionar));
console.log(aplicarOperacao(5, 2, subtrair));

// ex. com arrowfunction
const criarSaudacao = (tipo) => {
    if (tipo === 'formal') {
        return (nome) => `Bom dia, Sr./Sra. ${nome}.`;
    } else {
        return (nome) => `E aí, ${nome}!!`;
    }
};
const criarSaudacaoCasual = criarSaudacao("casual");
const criarSaudacaoFormal = criarSaudacao("formal");

console.log(criarSaudacaoFormal("Ana Banana"));
console.log(criarSaudacaoCasual("Bia Souza"));




