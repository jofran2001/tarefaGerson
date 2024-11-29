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
var AtualizarServico = /** @class */ (function (_super) {
    __extends(AtualizarServico, _super);
    function AtualizarServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarServico.prototype.update = function () {
        console.log("Lista de todos os Servi\u00E7os");
        this.servicos.forEach(function (servico, index) { console.log("".concat(index, " - Servi\u00E7o: ").concat(servico.nome)); });
        var entrada = this.entrada.receberNumero("Digite o index: ");
        var indexServico = this.servicos[entrada];
        if (indexServico !== undefined) {
            var novoNome = this.entrada.receberTexto("Digite o novo nome do Servi\u00E7o: ");
            var novoPreco = this.entrada.receberNumero("Digite o novo pre\u00E7o do Servi\u00E7o: R$");
            indexServico.nome = novoNome;
            indexServico.preco = novoPreco;
            console.log("Servi\u00E7o alterado com sucesso");
        }
        else {
            console.log("Servi\u00E7o n\u00E3o encontrado");
        }
    };
    return AtualizarServico;
}(update_1.default));
exports.default = AtualizarServico;
