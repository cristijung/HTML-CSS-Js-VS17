// codes de aula

// tipos básicos do Ts
var objetoCasa: string = 'roupeiro';
let idade: number = 34;
let cores = 'vermelho'; // tipo por inferência
let peso: number = 1.75;
const CIDADE: string = 'Porto Alegre';
const nome: string = 'Ana Banana';

// arrays
let num: number[] = [1, 2, 3];
let nomes: string[] = ['1, 2, 3'];

interface Pessoa {
    nome: string;
    idade: number;
    altura: number;
    peso?: number | string; // Union Type (80 ou 80Kg)
    endereco: any; // significa q esta prop pode receber qualquer tipo de dados
}

// types
let codigo: string | number;
codigo = 'abc';
codigo = 123;
codigo = 1.78;

// qdo se usa interfaces com extendes
interface Funcionario extends Pessoa {
    cargo: string;
    setor: string;
    ferias: string;
    rendimentos: number;
}

// função genérica com sintaxe base
function identidade<T>(parametro: T) {
    return parametro
}

let userNome = identidade<string>('Ana Banana');
let userIdade = identidade<number>(25);

// interface genérica
interface Resposta<T>{
    resposta: T;
}

let respostaUm: Resposta<string> = {resposta: "Olá Mundo!"};
let respostaDois: Resposta<number> = {resposta: 123};
let respostaTres: Resposta<boolean> = {resposta: false};

// COMO NUNCA DECLARARRR
interface Teste {
    vlr1: any;
    vlr2: any;
    vlr3: any;
    vlr4: any;
}