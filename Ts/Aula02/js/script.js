"use strict";
// declaração das variáveis
let produtos = [];
let formCadastroProduto = null;
let tabelaProdutosBody;
let indiceEdicao = -1; // var para controlar se estamos editando --> -1 = novo cadastro
document.addEventListener("DOMContentLoaded", () => {
    // Type Casting do Typescript: estou garantindo ao transpilador
    // q estes tipos são de formulário e tabela respectivamente
    formCadastroProduto = document.getElementById("form-cadastro-produto");
    // seletor: querySelector faz uma busca por seletores CSS
    tabelaProdutosBody = document.querySelector("#tabela-produtos tbody");
    if (formCadastroProduto) {
        formCadastroProduto.addEventListener("submit", (e) => {
            e.preventDefault();
            cadastrarProduto();
        });
    }
    atualizarTabelaProdutos();
});
function cadastrarProduto() {
    const nomeInput = document.getElementById('nome');
    const descricaoInput = document.getElementById('descricao');
    const codigoInput = document.getElementById('codigo');
    const precoCustoInput = document.getElementById('preco-custo');
    const precoVendaInput = document.getElementById('preco-venda');
    const estoqueInput = document.getElementById('estoque');
    const categoriaInput = document.getElementById('categoria');
    if (nomeInput && precoVendaInput && estoqueInput && categoriaInput) {
        const novoProduto = {
            nome: nomeInput.value,
            descricao: descricaoInput === null || descricaoInput === void 0 ? void 0 : descricaoInput.value,
            codigo: codigoInput === null || codigoInput === void 0 ? void 0 : codigoInput.value,
            precoCusto: precoCustoInput === null || precoCustoInput === void 0 ? void 0 : precoCustoInput.valueAsNumber,
            precoVenda: precoVendaInput.valueAsNumber,
            estoque: estoqueInput.valueAsNumber,
            categoria: categoriaInput.value,
        };
        if (indiceEdicao === -1) {
            produtos.push(novoProduto);
        }
        else {
            produtos[indiceEdicao] = novoProduto; // para editar
            indiceEdicao = -1; // reseta o controle de edição
            const btnSubmit = formCadastroProduto === null || formCadastroProduto === void 0 ? void 0 : formCadastroProduto.querySelector('button[type="submit"]');
            if (btnSubmit)
                btnSubmit.textContent = "Cadastrar Produto";
        }
        atualizarTabelaProdutos();
        formCadastroProduto === null || formCadastroProduto === void 0 ? void 0 : formCadastroProduto.reset();
    }
    else {
        console.error("Algum elemento do form não foi encontrado!");
    }
}
function atualizarTabelaProdutos() {
    tabelaProdutosBody.innerHTML = '';
    produtos.forEach((produto, index) => {
        const row = tabelaProdutosBody.insertRow();
        const nomeCell = row.insertCell();
        nomeCell.textContent = produto.nome;
        const codigoCell = row.insertCell();
        codigoCell.textContent = produto.codigo || "-";
        const precoVendaCell = row.insertCell();
        precoVendaCell.textContent = `R$ ${produto.precoVenda.toFixed(2)}`;
        const estoqueCell = row.insertCell();
        estoqueCell.textContent = produto.estoque.toString();
        const actionsCell = row.insertCell();
        const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.className = 'btn btn-warning btn-sm me-2';
        editarButton.addEventListener('click', () => editarProduto(index));
        actionsCell.appendChild(editarButton);
        const excluirButton = document.createElement('button');
        excluirButton.textContent = 'Excluir';
        excluirButton.className = 'btn btn-danger btn-sm';
        excluirButton.addEventListener('click', () => excluirProduto(index));
        actionsCell.appendChild(excluirButton);
    });
}
function editarProduto(index) {
    var _a;
    const produto = produtos[index];
    indiceEdicao = index; // editando o índice
    document.getElementById('nome').value = produto.nome;
    document.getElementById('descricao').value = produto.descricao || "";
    document.getElementById('codigo').value = produto.codigo || "";
    document.getElementById('preco-custo').value = ((_a = produto.precoCusto) === null || _a === void 0 ? void 0 : _a.toString()) || "";
    document.getElementById('preco-venda').value = produto.precoVenda.toString();
    document.getElementById('estoque').value = produto.estoque.toString();
    document.getElementById('categoria').value = produto.categoria;
    // alterando o botão de envio para indicar que é uma edição
    const btnSubmit = formCadastroProduto === null || formCadastroProduto === void 0 ? void 0 : formCadastroProduto.querySelector('button[type="submit"]');
    if (btnSubmit)
        btnSubmit.textContent = "Salvar Alterações";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function excluirProduto(index) {
    if (confirm(`Tem certeza que deseja excluir o produto? ${produtos[index].nome}`)) {
        produtos.splice(index, 1);
        atualizarTabelaProdutos();
        // se excluir o item que estava sendo editado, reseta o formulário
        if (indiceEdicao === index) {
            indiceEdicao = -1;
            formCadastroProduto === null || formCadastroProduto === void 0 ? void 0 : formCadastroProduto.reset();
            const btnSubmit = formCadastroProduto === null || formCadastroProduto === void 0 ? void 0 : formCadastroProduto.querySelector('button[type="submit"]');
            if (btnSubmit)
                btnSubmit.textContent = "Cadastrar Produto";
        }
    }
}
