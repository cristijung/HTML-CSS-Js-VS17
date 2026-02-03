// operador spread
// ele tem a capacidade de 'aumentar' a seleção de propriedades passadas
// por um array, array de objetos, interface ....
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var infoBasica = {
    nome: 'Pafúncio Silva',
    email: 'pafuncio@email.com',
    telefone: 51999991234
};
var permissoes = {
    isAdmin: false,
    podeEditar: true,
};
var infoCompletaUser = __assign(__assign({}, infoBasica), permissoes);
console.log(infoCompletaUser);
