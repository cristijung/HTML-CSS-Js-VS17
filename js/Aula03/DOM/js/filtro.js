// filtro em tempo real

const filtroInput = document.getElementById('filtroInput');
const listaDeProdutos = document.getElementById('listaDeProdutos');
const itensDeProduto = listaDeProdutos.getElementsByTagName('li'); // todos os itens da lista <li>

filtroInput.addEventListener('keyup', () => {
    // padronização e normalização do texto
    const filtro = filtroInput.value.toLowerCase(); 

    for (let i = 0; i < itensDeProduto.length; i++) {
        const textoDoItem = itensDeProduto[i].textContent.toLowerCase();
        if (textoDoItem.includes(filtro)) {
            itensDeProduto[i].style.display = ''; // exibir o item
        } else {
            itensDeProduto[i].style.display = 'none'; // ocultar o item
        }
    }
});