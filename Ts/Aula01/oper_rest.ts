// operador Rest é ao contrário do spread. O rest recolher em UMA ÚNICA VARIÁVEL
// uso comum é em parâmtro de função

function somarComPrimeiro(primeiroNumero: number, ...outrosNumeros: number[]): number {
    let somar = primeiroNumero;

    for (const numero of outrosNumeros) {
        somar += numero;
    }

    return somar;
}

const resultado1 = somarComPrimeiro(10, 8);
const resultado2 = somarComPrimeiro(10, 6, 20);
const resultado3 = somarComPrimeiro(10, 8, 12, 40);
const resultado4 = somarComPrimeiro(10, 102, 103, 105);
const resultado5 = somarComPrimeiro(10, 102, 110, 109, 123);
const resultado6 = somarComPrimeiro(10, 104, 112, 150, 145, 189);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);