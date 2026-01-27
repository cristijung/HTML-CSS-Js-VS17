// Arrays

let array1 = [1, 2, 3];
let array2 = array1; // cópia por referência
array2.push(4);
console.log(array1);
console.log(array2);

let frutas = ['maçã', 'banana', 'laranja', 'morango'];
console.log(frutas);
console.log(frutas[0]);

//add elemento
frutas.push('uva');
console.log(frutas);

//remover no início
frutas.shift();
console.log(frutas)

//iterando
for (let i = 0; i < frutas.length; i ++) {
    console.log(frutas[i]);
}
console.log('---------------');
frutas.forEach(function(frutas) {
    console.log(frutas);
})

console.log('---------------');
frutas[2] = 'melancia';
console.log(frutas);
frutas.unshift('jaca');
console.log(frutas);