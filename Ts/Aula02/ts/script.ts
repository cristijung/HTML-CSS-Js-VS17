interface Produto {
  nome: string;
  descricao?: string;
  codigo?: string;
  precoCusto?: number;
  precoVenda: number;
  estoque: number;
  categoria: string;
}

// declaração das variáveis
let produtos: Produto[] = [];
let formCadastroProduto: HTMLFormElement | null = null;
let tabelaProdutosBody: HTMLTableSectionElement;
let indiceEdicao: number = -1; // var para controlar se estamos editando --> -1 = novo cadastro

document.addEventListener("DOMContentLoaded", () => {
  // Type Casting do Typescript: estou garantindo ao transpilador
  // q estes tipos são de formulário e tabela respectivamente
  formCadastroProduto = document.getElementById(
    "form-cadastro-produto",
  ) as HTMLFormElement | null;
  // seletor: querySelector faz uma busca por seletores CSS
  tabelaProdutosBody = document.querySelector(
    "#tabela-produtos tbody",
  ) as HTMLTableSectionElement;

  if (formCadastroProduto) {
    formCadastroProduto.addEventListener("submit", (e) => {
      e.preventDefault();
      cadastrarProduto();
    });
  }

  atualizarTabelaProdutos();
});

function cadastrarProduto() {
  const nomeInput = document.getElementById('nome') as HTMLInputElement | null;
  const descricaoInput = document.getElementById('descricao') as HTMLTextAreaElement | null;
  const codigoInput = document.getElementById('codigo') as HTMLInputElement | null;
  const precoCustoInput = document.getElementById('preco-custo') as HTMLInputElement | null;
  const precoVendaInput = document.getElementById('preco-venda') as HTMLInputElement | null;
  const estoqueInput = document.getElementById('estoque') as HTMLInputElement | null;
  const categoriaInput = document.getElementById('categoria') as HTMLSelectElement | null;

  if (nomeInput && precoVendaInput && estoqueInput && categoriaInput) {
    const novoProduto: Produto = {
      nome: nomeInput.value,
      descricao: descricaoInput?.value,
      codigo: codigoInput?.value,
      precoCusto: precoCustoInput?.valueAsNumber,
      precoVenda: precoVendaInput.valueAsNumber,
      estoque: estoqueInput.valueAsNumber,
      categoria: categoriaInput.value,
    };

    if (indiceEdicao === -1) {      
      produtos.push(novoProduto);
    } else {      
      produtos[indiceEdicao] = novoProduto; // para editar
      indiceEdicao = -1; // reseta o controle de edição
      
      const btnSubmit = formCadastroProduto?.querySelector('button[type="submit"]');
      if (btnSubmit) btnSubmit.textContent = "Cadastrar Produto";
    }

    atualizarTabelaProdutos();
    formCadastroProduto?.reset();
  } else {
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

function editarProduto(index: number) {
  const produto = produtos[index];
  indiceEdicao = index; // editando o índice
 
  (document.getElementById('nome') as HTMLInputElement).value = produto.nome;
  (document.getElementById('descricao') as HTMLTextAreaElement).value = produto.descricao || "";
  (document.getElementById('codigo') as HTMLInputElement).value = produto.codigo || "";
  (document.getElementById('preco-custo') as HTMLInputElement).value = produto.precoCusto?.toString() || "";
  (document.getElementById('preco-venda') as HTMLInputElement).value = produto.precoVenda.toString();
  (document.getElementById('estoque') as HTMLInputElement).value = produto.estoque.toString();
  (document.getElementById('categoria') as HTMLSelectElement).value = produto.categoria;

  // alterando o botão de envio para indicar que é uma edição
  const btnSubmit = formCadastroProduto?.querySelector('button[type="submit"]');
  if (btnSubmit) btnSubmit.textContent = "Salvar Alterações";

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function excluirProduto(index: number) {
  if (confirm(`Tem certeza que deseja excluir o produto? ${produtos[index].nome}`)) {
    produtos.splice(index, 1);
    atualizarTabelaProdutos();
    
    // se excluir o item que estava sendo editado, reseta o formulário
    if (indiceEdicao === index) {
        indiceEdicao = -1;
        formCadastroProduto?.reset();
        const btnSubmit = formCadastroProduto?.querySelector('button[type="submit"]');
        if (btnSubmit) btnSubmit.textContent = "Cadastrar Produto";
    }
  }
}