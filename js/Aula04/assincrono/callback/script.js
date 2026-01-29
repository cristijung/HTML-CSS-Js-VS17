// callback

function saudar(nome, callback) {
    console.log(`Olá, ${nome}`);
        callback();  // executa o callback
}

saudar("Ana Banana", () => {
    console.log("O callback foi executado");
});


//-----------------------------
console.log('Passo 1: Inicio do Script ....');

setTimeout(() => {
    console.log("Passo 2: Callback execurado após 3 segundos");
}, 3000);

console.log("Passo 3: Fim do script!");

// -----------------------------------
// passando uma função pronta como um callback
function avisarConclusao() {
    console.log("Download consluído!!");
}

setTimeout(avisarConclusao, 5000);

// -------------------------------
// setTimeout com argumento no callback
function saudarUsuario(nome, status) {
    console.log(`Olá, ${nome}. Você está ${status}`);
}

// passar o argumento para o callback
setTimeout(saudarUsuario, 5500, "Ana", "Online");