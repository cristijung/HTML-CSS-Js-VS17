// ex while
let contador = 5;
console.log("--- Exemplo de While ---");
while (contador >= 0) {
  console.log(contador);
  contador--;
}

console.log("Fim da contagem regressiva \n");

// ex de do while
let contando = 0;
console.log("--- Exemplo de Do While --- \n");
do {
  console.log("Executando pelo menos uma vez o 'Do While'.");
  contando++;
} while (contando <= 0);
console.log("Fim do 'Do While'!\n");

// ex de For
console.log("--- Exemplo de For ---\n");
for (let i = 0; i <= 10; i++) {
  console.log("Iterando for: " + i);
}
console.log("Fim da iteração \n");

// ex de For of com array
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"];
console.log("--- Exemplo de For of com Arrays --- \n");
for (const fruta of frutas) {
  console.log(fruta);
}

const frases = 'O céu é azul!'
console.log("--- Exemplo de For of com String --- \n");
for (const frase of frases) {
    console.log(frase);
}

// for of com string
const palavra = "JavaScript";
console.log("--- Exemplo de For of com String --- \n");
for (const letra of palavra) {
  console.log(letra);
}

// exemplo de For ... in
const pessoa = {
  nome: "Ana",
  idade: 25,
  cidade: "Porto Alegre",
};

console.log("--- Exemplo de For in com Objeto --- \n");
for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}\n`);
}

// for in: seu objetivo é 'iterar sobre chaves' enumeráveis de OBJETOS. Não é recomendado para Arrays
// sintaxe: for (key in object)

// for of: objetivo é 'iterar sobre valores' de objetos iteráveis. É recomendado para Arrays, Strings, Maps, Sets
// sintaxe do for of: for (value of iterable)

// sintaxe do for: for (init; condition; update)


// exemplo de ForEach (método de Array)
const numeros = [10, 20 , 30, 40, 50, 60];
console.log("--- Exemplo de ForEach - Método de Array --- \n");

numeros.forEach(function(numero, indice) {
    console.log(`Índice: ${indice}, Valor: ${numero}`);
});
console.log("--- Fim do ForEach --- \n");