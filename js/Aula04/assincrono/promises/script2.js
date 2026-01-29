const verificarUsuario = (id) => {
    return new Promise((resolve, reject) => {
        const bancoDeDados = [
            { id: 1, nome: "Ana"},
            { id: 2, nome: "Beto"}
        ];

        setTimeout(() => {
            const usuario = bancoDeDados.find(u => u.id === id);

            if (usuario) {
                resolve(usuario); // sucesso
            } else {
                reject(`Usuários com ID ${id} não encontrado.`); // erro
            }
        }, 1500);
    });
};

// testar
verificarUsuario(1)
    .then(user => console.log("Usuário encontrado: ", user.nome))
    .catch(user => console.error("Erro:", err))