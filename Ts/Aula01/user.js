var GerenciadorUsuarios = /** @class */ (function () {
    function GerenciadorUsuarios() {
        this.usuarios = [];
    }
    // método p add user
    GerenciadorUsuarios.prototype.adicionar = function (user) {
        this.usuarios.push(user);
        console.log("Usu\u00E1rio ".concat(user.nome, " adicionado com sucesso!"));
    };
    // método q retorna uma lista tipada
    GerenciadorUsuarios.prototype.listar = function () {
        return this.usuarios;
    };
    return GerenciadorUsuarios;
}());
var admin = new GerenciadorUsuarios();
var novoUsuario = {
    id: 1,
    nome: 'Dev Jr',
    email: 'dev@teste.com',
    ativo: true
};
admin.adicionar(novoUsuario);
console.table(admin.listar);
