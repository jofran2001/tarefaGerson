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
var listagem_1 = require("../listagem");
var ListagemUmClientesQuantidade = /** @class */ (function (_super) {
    __extends(ListagemUmClientesQuantidade, _super);
    function ListagemUmClientesQuantidade(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        return _this;
    }
    ListagemUmClientesQuantidade.prototype.listar = function () {
        var consumidores = [];
        this.cliente.forEach(function (qnt) {
            var nomeCliente = qnt.nome;
            var qntidadeConsumo = qnt.getProdutosConsumidos.length + qnt.getServicosConsumidos.length;
            consumidores.push({ nome: nomeCliente, quantidade: qntidadeConsumo });
        });
        var ordenacao = consumidores.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        var restricao = ordenacao.slice(0, 9);
        console.log("--------------------------------------");
        console.log("Lista dos 10 clientes que mais consumiram produtos e servi\u00E7os");
        restricao.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Quantidade total consumido: ".concat(consumidos.quantidade, " itens"));
        });
        console.log("--------------------------------------");
    };
    return ListagemUmClientesQuantidade;
}(listagem_1.default));
exports.default = ListagemUmClientesQuantidade;
