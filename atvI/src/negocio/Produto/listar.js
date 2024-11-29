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
var ListagemProduto = /** @class */ (function (_super) {
    __extends(ListagemProduto, _super);
    function ListagemProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        return _this;
    }
    ListagemProduto.prototype.listar = function () {
        console.log("\nLista de todos os produtos:");
        this.produtos.forEach(function (produto) {
            console.log("Nome: ".concat(produto.nome));
            console.log("Pre\u00E7o: ".concat(produto.preco));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListagemProduto;
}(listagem_1.default));
exports.default = ListagemProduto;
