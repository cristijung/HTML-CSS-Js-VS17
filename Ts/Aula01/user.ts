interface Usuario {
    id: number;
    nome: string;
    email: string;
    ativo: boolean;
}

class GerenciadorUsuarios {
    private usuarios: Usuario[] = [];

    // método p add user
    adicionar(user: Usuario): void {
        this.usuarios.push(user);
        console.log(`Usuário ${user.nome} adicionado com sucesso!`);
    }

    // método q retorna uma lista tipada
    listar(): Usuario[] {
        return this.usuarios
    }
}

const admin = new GerenciadorUsuarios();

const novoUsuario: Usuario = {
    id: 1,
    nome: 'Dev Jr',
    email: 'dev@teste.com',
    ativo: true
};

admin.adicionar(novoUsuario);
console.table(admin.listar);
