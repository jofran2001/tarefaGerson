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
var entrada_1 = require("../../io/entrada");
var update_1 = require("../update");
var AtualizarProduto = /** @class */ (function (_super) {
    __extends(AtualizarProduto, _super);
    function AtualizarProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produto;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarProduto.prototype.update = function () {
        console.log("Lista de todos os Produtos");
        this.produto.forEach(function (produto, index) { console.log("".concat(index, " - Produto: ").concat(produto.nome)); });
        var entrada = this.entrada.receberNumero("Indice do Produto que deseja alterar: ");
        var indexProdutos = this.produto[entrada];
        if (indexProdutos !== undefined) {
            var novoNome = this.entrada.receberTexto("Digite o novo nome do Produto: ");
            var novoPreco = this.entrada.receberNumero("Digite o novo pre\u00E7o do Produto: R$");
            indexProdutos.nome = novoNome;
            indexProdutos.preco = novoPreco;
            console.log("Produto Alterado com sucesso");
        }
        else {
            console.log("Produto n\u00E3o encontrado");
        }
    };
    return AtualizarProduto;
}(update_1.default));
exports.default = AtualizarProduto;
