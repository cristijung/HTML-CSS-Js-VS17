//aula 01
//variáveis e tipos

//com var
var altura = 6;
var comprimento = 22;
area = altura * comprimento;
console.log(area);
var area;

//com let
let alturas = 8;
let comprimentos = 22;
areaDois = alturas * comprimentos;
console.log(areaDois);

//com const
const FORMA = 'quadrado';  //padrão de declaração
const alturaDois = 123654.789;
const comprimentoDois = 24;
let areaTres;

if (FORMA === 'quadrado') {
    areaTres = alturaDois * comprimentoDois;
} else {
    areaTres = (alturaDois * comprimentoDois) / 2;
}

console.log(areaTres);

// trabalhando com strings
let nome = "Ana";
let idade = 32;
let alturaPessoa = 1.75;
let peso = 58.9;
//concatenando as infos - forma1
let dados = "Nome: ".concat(nome, " - Idade: " + idade + " - Altura: " + alturaPessoa);
console.log(dados);

//demais formas
console.log(nome + idade + alturaPessoa + peso);
console.log("Nome: " + nome + "\nIdade: " + idade + "\nAltura: " + alturaPessoa);
console.log(`Nome: ${nome} - Idade: ${idade} - Altura: ${alturaPessoa} - Peso: ${peso}`);

//com métodos
const cidade = 'Porto Alegre';
const municipio = 'PORTO ALEGRE';
const maiusculo = cidade.toUpperCase();
console.log(cidade);
console.log(cidade === maiusculo);
console.log(municipio === maiusculo);

// com valores
const numUm = 456;
const numDois = "789";
const numTres = 12;
console.log(numUm + numDois + numTres); //só concatena pq a segunda variável é uma string
console.log(numUm + numTres + numDois); //soma os valores numéricos e concatena a string
console.log(numUm + Number(numDois) + numTres); //converte a string e soma
console.log(numUm + numTres - numDois);

//-----------------------
// = operador de atribuição
// == operador de igualdade abstrata: compara 2 valores após realizar a conversão de tipo 
//    - os vlrs não precisam ser do mesmo tipo.
// === operador de igualdade restrita: os valores devem ser os mesmos e do mesmo tipo.

let numero = 5;
let texto = '5';
console.log(numero == texto); //retorna true
console.log(numero === texto); //retorna false

// ----------------------------------------
console.log('Tipos Null e Indefinido');
console.log('-------------------')
let var1 = null;
let var2;
console.log(var1 == var2);
console.log(var1 === var2);
console.log(typeof var1);
console.log(typeof var2);

// Nan - Not a Number
let valor = 'abc';
console.log(Number(valor));
console.log(5 + NaN);
console.log(Infinity * 0);

//null
let sobrenome = 'Silva';
sobrenome = null;
console.log(sobrenome);
console.log(typeof null);
