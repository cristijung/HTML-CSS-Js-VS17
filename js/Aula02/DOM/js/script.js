// ex1. destacar texto

function destacarTexto() {
    let elemento = document.getElementById('paragrafo');
    elemento.classList.toggle('destacado');
}

// ex2. contador
let count = 0;
function incrementarUm() {
    atualizar(++count);
}

function decrementarUm() {
    if (count > 0) {
        atualizar(--count);
    }
}

function resetarCount() {
    count = 0;
    atualizar(count);
}

function atualizar(count) {
    document.getElementById('trocar').innerText = count;
}

// - innerText --> foco é no texto, ele herda estilização de CSS - renderiza o texto
// - innerHTML --> foca no conteúdo de HTML, pode-se permitir q o user altere os elementos de forma dinâmica


// exe3. tabuada
function calcularTabuadaDOM() {
    const numeroInput = document.getElementById('numeroTabuada');
    const resultadoDiv = document.getElementById('resultadoTabuada');
    const numero = parseInt(numeroInput.value);

    resultadoDiv.innerHTML = ''; // limpa qualquer resultado anterior

    if (isNaN(numero) || !Number.isInteger(numero)) {
        resultadoDiv.textContent = 'Por favor, insira um nº inteiro válido!';
        return
    }

    const tituloTabuada = document.createElement('h2');
    tituloTabuada.textContent = `Tabuada do ${numero}`;
    resultadoDiv.appendChild(tituloTabuada);

    const listaTabuada = document.createElement('ul');
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const itemLista = document.createElement('li');
        itemLista.textContent = `${numero} X ${i} = ${resultado}`;
        listaTabuada.appendChild(itemLista);
    }

    resultadoDiv.appendChild(listaTabuada);
}