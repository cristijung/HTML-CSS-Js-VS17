// Temporizadores

// setTimeout
const timer = setTimeout(() => {
    console.log("Este código rodou após 4 segundos!"); 
}, 4000);
// para parar antes de executar
// clearTimeout(timer);


// setInterval
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(`Passaram ${contador} segundos`);

    if (contador === 10) {
        clearInterval(intervalo); // para o ciclo
    }
}, 1000);