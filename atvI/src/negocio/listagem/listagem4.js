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
var ListagemClienteValor = /** @class */ (function (_super) {
    __extends(ListagemClienteValor, _super);
    function ListagemClienteValor(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        return _this;
    }
    ListagemClienteValor.prototype.listar = function () {
        var valorConsumido = [];
        this.cliente.forEach(function (itens) {
            var reducer = function (soma, index) { return soma + index; };
            var nomes = itens.nome;
            var mapValoresProduto = itens.getProdutosConsumidos.map(function (i) { return i.preco; });
            var valorFinalProduto = mapValoresProduto.length > 0 ? mapValoresProduto.reduce(reducer) : 0;
            var mapValoresServico = itens.getServicosConsumidos.map(function (i) { return i.preco; });
            var valorFinalServico = mapValoresServico.length > 0 ? mapValoresServico.reduce(reducer) : 0;
            valorConsumido.push({
                nome: nomes,
                precosProdutos: valorFinalProduto,
                precosServicos: valorFinalServico,
            });
        });
        var ordenacaoProdutos = valorConsumido.sort(function (a, b) {
            return b.precosProdutos - a.precosProdutos;
        });
        var restricaoProdutos = ordenacaoProdutos.slice(0, 5);
        console.log();
        console.log("Clientes que mais consumiram em valor os Produtos");
        restricaoProdutos.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Produtos R$".concat(consumidos.precosProdutos));
            console.log();
        });
        var ordenacaoServicos = valorConsumido.sort(function (a, b) {
            return b.precosServicos - a.precosServicos;
        });
        var restricaoServicos = ordenacaoServicos.slice(0, 5);
        console.log("Clientes que mais consumiram em valor os Servicos");
        restricaoServicos.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Servi\u00E7os R$".concat(consumidos.precosServicos));
            console.log();
        });
    };
    return ListagemClienteValor;
}(listagem_1.default));
exports.default = ListagemClienteValor;
