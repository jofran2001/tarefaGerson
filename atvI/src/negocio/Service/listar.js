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
var ListagemServico = /** @class */ (function (_super) {
    __extends(ListagemServico, _super);
    function ListagemServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        return _this;
    }
    ListagemServico.prototype.listar = function () {
        console.log("\nLista de todos os servi\u00E7os:");
        this.servicos.forEach(function (servico) {
            console.log("Nome: ".concat(servico.nome));
            console.log("Pre\u00E7o: ".concat(servico.preco));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListagemServico;
}(listagem_1.default));
exports.default = ListagemServico;
