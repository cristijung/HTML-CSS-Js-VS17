// dados
const produtosDoCarrinho = [
    { id: 1, nome: "Teclado Mecânico", preco: 150.00, icone: "⌨️" },
    { id: 2, nome: "Mouse Gamer", preco: 149.99, icone: "🖱️" },
    { id: 3, nome: "Monitor 24pol", preco: 4200.00, icone: "🖥️" },
    { id: 4, nome: "Headset", preco: 255.99, icone: "🎧" }
];

// seleção dos elementos para o DOM
const listaElemento = document.getElementById('lista-compras');
const totalElemento = document.getElementById('valor-total');
const btnCarregar = document.getElementById('btn-carregar');

// função e evento
btnCarregar.addEventListener('click', () => {     
    listaElemento.innerHTML = '';
    let somaTotal = 0;

    // foreach
    produtosDoCarrinho.forEach((produto, index) => {        
        somaTotal += produto.preco;
        
        const itemHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <span class="fs-4 me-2">${produto.icone}</span>
                    <span class="fw-bold">${produto.nome}</span>
                    <small class="text-muted ms-2">(Item ${index + 1})</small>
                </div>
                <span class="badge bg-primary rounded-pill">
                    R$ ${produto.preco.toFixed(2).replace('.', ',')}
                </span>
            </li>
        `;

        listaElemento.innerHTML += itemHTML; // esta linha injeta o HTML no DOM
    });

    // atualizando ....
    totalElemento.innerText = `R$ ${somaTotal.toFixed(2).replace('.', ',')}`;
    
    // feedback p o user
    btnCarregar.disabled = true;
    btnCarregar.innerText = "Itens Carregados!";
});