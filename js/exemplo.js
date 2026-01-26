// tipos primitivo e não primitivos

// primitivos do Js
const text1 = "Oi";
const text2 = '1230';
const text3 = 'Ana Banana é uma música do TNT!';
const text4 = 123;
const text5 = 123785.89645;
const text6 = 'maçã';

// qto à variáveis
var nome = 'Ana Banana';
let sobreNome = 'Souza';
const ALTURA = 1.75;

//exemplo de var
if (true) {
    var nomes = "Pafúncio";
}
console.log(nomes);

// exemplo de const
const usuario = { nome: "Ana" }; //mudando a propriedade interna
usuario.nome = "Bia";

usuario = { nome: "Caio"}; //typerror


// exemplo de let
if (true){
    let idade = 26;
}

console.log(idade);

console.log(nome);
console.log(sobreNome);
console.log(ALTURA);