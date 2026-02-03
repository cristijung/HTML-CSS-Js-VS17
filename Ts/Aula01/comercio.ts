interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
}

const mercadoriaLoja: Produto[] = [
    { id: 1, nome: 'Calça', preco: 124.99, categoria: 'Roupa' },
    { id: 2, nome: 'Jaqueta', preco: 235.99, categoria: 'Roupa' },
    { id: 3, nome: 'Vestido', preco: 1249.99, categoria: 'Roupa' },
    { id: 4, nome: 'Camiseta', preco: 65.99, categoria: 'Roupa' },
    { id: 5, nome: 'Sapato', preco: 899.99, categoria: 'Calçado' },
    { id: 6, nome: 'Boné', preco: 123.99, categoria: 'Acessórios' },
    { id: 7, nome: 'Cachecol', preco: 789.99, categoria: 'Acessórios' }    
];

// listar produtos
function ListarProdutos(mercadoriaLoja: Produto[]): void {
    mercadoriaLoja.forEach((produto) => {
        console.log(
            `Id: ${produto.id}, Produto: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria}`
        );
    });
}

// função para filtrar os produtos
function FiltrarProdutoPorCategoria(mercadoriaLoja: Produto[], categoria: string): Produto[] {
    return mercadoriaLoja.filter((produto) => produto.categoria === categoria);
}

// função aumentar o preço das mercadorias
function AumentarPreco(mercadoriaLoja: Produto[], porcentagem: number): Produto[] {
    return mercadoriaLoja.map((produto) => {
        const novoPreco = produto.preco * (1 + porcentagem / 100);
        const novoPrecoFormatado = parseFloat(novoPreco.toFixed(2));
        return{ ...produto, preco: novoPrecoFormatado};
    });
}

ListarProdutos(mercadoriaLoja);
console.log("\n Produtos com categoria Roupa: ");
ListarProdutos(FiltrarProdutoPorCategoria(mercadoriaLoja, "Roupa"));

const produtosComAumento = AumentarPreco(mercadoriaLoja, 10);
console.log("\n Produtos com aumentos de 10%: ");
ListarProdutos(produtosComAumento);

