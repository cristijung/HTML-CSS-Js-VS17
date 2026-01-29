// map
const precosBrutos = [10.5, 20, 5.99];


document.getElementById('btnMap').addEventListener('click', () => {
    
    // .map() cria um novo array formatado
    const precosFormatados = precosBrutos.map((preco) => {
        return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    });

    // atualizando a tela
    const lista = document.getElementById('listaMap');
    lista.innerHTML = ''; 
    
    precosFormatados.forEach(item => {
        lista.innerHTML += `<li class="list-group-item text-primary fw-bold">${item}</li>`;
    });
    
    document.getElementById('resMap').classList.remove('d-none');
});


// filter
const usuarios = [
    { nome: 'Ana', status: 'ativo' },
    { nome: 'Beto', status: 'inativo' },
    { nome: 'Carla', status: 'ativo' }
];

document.getElementById('btnFilter').addEventListener('click', () => {
    
    // .filter() retorna novo array apenas com quem passar no teste ....
    const ativos = usuarios.filter((user) => user.status === 'ativo');

    // atualizando a tela
    const divContainer = document.getElementById('listaFilter');
    divContainer.innerHTML = '';

    ativos.forEach(user => {
        divContainer.innerHTML += `
            <span class="badge bg-success me-1">
                ${user.nome}
            </span>`;
    });

    document.getElementById('resFilter').classList.remove('d-none');
});


// reduce
const carrinho = [100, 50, 25];

document.getElementById('btnReduce').addEventListener('click', () => {
    
    // .reduce() transforma o array em um único número (soma)
    const total = carrinho.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    }, 0); 

    // atualizando a telaaa
    document.getElementById('valorTotal').innerText = 
        total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    document.getElementById('resReduce').classList.remove('d-none');
});