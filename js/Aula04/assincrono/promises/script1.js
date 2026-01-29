// exemplo de ir na padaria
function comprarPao(estaAberta) {
  return new Promise((resolve, reject) => {
    console.log("🚶 Indo até a padaria .... (Estado: Pendind)");

    setTimeout(() => {
      if (estaAberta) {
        resolve("🥖 Pão quentinho na mão! (Estado: Fulfilled)");
      } else {
        reject("❌ Padaria fechada. (Estado: Rejected)");
      }
    }, 3000); // simulando o tempo de caminhada
  });
}

// consumindo d promise
comprarPao(false) // depois alterar para false p ver o erro
  .then((resultado) => {
    // executar se for resolvido
    console.log(resultado);
  })
  .catch((erro) => {
    // executa se for rejeitado
    console.error(erro);
  })
  .finally(() => {
    // executa sempre, independente do resultado
    console.log("🏠 Voltei para casa.");
  });
