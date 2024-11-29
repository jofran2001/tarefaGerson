"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = require("./listagem");
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("--------------------------------------");
            console.log("Cadastrado efetuado em: ".concat(cliente.getDataCadastro.toLocaleDateString()));
            console.log("--------------------------------------");
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: ".concat(cliente.getCpf.getValor, " Emiss\u00E3o: ").concat(cliente.getCpf.getDataEmissao.toLocaleDateString()));
            console.log("------------------RG------------------");
            cliente.getRgs.forEach(function (rg, index) {
                console.log("".concat(index + 1, " RG:") + rg.getValor + " emissao em " + rg.getDataEmissao.toLocaleDateString());
            });
            console.log("---------------Telefone---------------");
            cliente.getTelefones.forEach(function (tell, index) {
                console.log("".concat(index + 1, " Telefone: ") + tell.getDdd + " " + tell.getNumero);
            });
            console.log("------------------Pet------------------");
            cliente.getPets.forEach(function (pet, index) {
                console.log("".concat(index + 1, " Nome: ").concat(pet.getNome, ", Genero: ").concat(pet.getGenero, ", Tipo: ").concat(pet.getTipo, ", Ra\u00E7a: ").concat(pet.getRaca));
            });
            console.log("----------------Servi\u00E7os-----------------");
            cliente.getServicosConsumidos.map(function (servicos) {
                console.log(servicos.nome + "\nR$".concat(servicos.preco));
            });
            console.log("----------------Produtos-----------------");
            cliente.getProdutosConsumidos.map(function (produto) {
                console.log(produto.nome + "\nR$".concat(produto.preco));
            });
        });
        console.log("\n");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
