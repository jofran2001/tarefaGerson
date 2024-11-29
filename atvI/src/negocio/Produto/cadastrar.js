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
var produto_1 = require("../../modelo/produto");
var cadastro_1 = require("../cadastro");
var CadastrarProduto = /** @class */ (function (_super) {
    __extends(CadastrarProduto, _super);
    function CadastrarProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastrarProduto.prototype.cadastrar = function () {
        console.log("\nCadastre seu produto");
        var newProduto = this.entrada.receberTexto("Qual \u00E9 o nome do produto: ");
        var nomes = this.produtos.map(function (produto) { return produto.nome; });
        if (nomes.includes(newProduto)) {
            console.log("".concat(newProduto, " j\u00E1 existe dentro do sistema"));
        }
        else {
            var preco = this.entrada.receberNumero("Qual \u00E9 o pre\u00E7o do produto? R$");
            var cadastrar = new produto_1.default(newProduto, preco);
            this.produtos.push(cadastrar);
        }
    };
    return CadastrarProduto;
}(cadastro_1.default));
exports.default = CadastrarProduto;
