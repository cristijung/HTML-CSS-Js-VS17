// operador spread
// ele tem a capacidade de 'aumentar' a seleção de propriedades passadas
// por um array, array de objetos, interface ....

interface UsuarioInfo {
    nome: string;
    email: string;
    telefone: number;
    endereco?: string
}

interface UsuarioPermissoes {
    isAdmin: boolean;
    podeEditar: boolean;
}

const infoBasica: UsuarioInfo = {
    nome: 'Pafúncio Silva',
    email: 'pafuncio@email.com',
    telefone: 51999991234
}

const permissoes: UsuarioPermissoes = {
    isAdmin: false,
    podeEditar: true,
}

const infoCompletaUser = { ...infoBasica, ...permissoes };
console.log(infoCompletaUser);