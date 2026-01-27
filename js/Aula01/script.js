// exemplos de dados

// array
let cores = ['vermelho', 'amarelo', 'verde', 'roxo', 'laranja'];
console.log(cores);

// array de objetos
let biblioteca = [
    {id: 12, titulo: 'It', autor: "Stephen King", ano: 1974},
    {id: 14, titulo: 'Drácula', autor: "Bram Stoker", ano: 1888},
    {id: 12, titulo: 'Capitães de Areia', autor: "Jorge Amado", ano: 1936},
    {id: 12, titulo: 'O Tempo e o Vento', autor: "Érico Veríssimo", ano: 1924},
];
console.log(biblioteca);

// funções
function somar(a, b) {
    return a + b;
}

// tipos
// primitivos: undefined, null, boolean, bigim, symbol
// não primitivos: object, array, function, date, RegExp, map, set

let array1 = [1, 2, 3];
let array2 = array1;  //cópias por referência
array2.push(4);
console.log(array1);
console.log(array2);

// undefined
// representar uma variável q foi declarada, mas ainda não recebeu seu valor
// o Js define isso de forma automática

let caixa;
console.log(caixa);

// null
// representa a ausência intencional de um valor
let user = 'Ana';
user = null; 
console.log(user);

console.log(typeof undefined);
console.log(typeof null);

if (typeof variavel === 'object');

// O '===' é um operador de IGUALDADE ESTRITA   
console.log(null === undefined); // false -- tipos diferentes

// O '==' IGUALDADE SOLTA
console.log(null == undefined); // true

