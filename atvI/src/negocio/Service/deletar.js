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
var delete_1 = require("../delete");
var DeletarServico = /** @class */ (function (_super) {
    __extends(DeletarServico, _super);
    function DeletarServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeletarServico.prototype.delete = function () {
        console.log("\nLista de todos os servi\u00E7os:");
        this.servicos.forEach(function (servico, index) { console.log("".concat(index, " - Nome: ").concat(servico.nome)); });
        var entrada = this.entrada.receberNumero("Digite o indice:  ");
        var indiceServico = this.servicos[entrada];
        if (indiceServico !== undefined) {
            var receber = this.entrada.receberTexto("Tem certeza que deseja deletar o servi\u00E7o? Sim | N\u00E3o: ").toLowerCase();
            if (receber === 'sim') {
                this.servicos.splice(entrada, 1);
            }
        }
    };
    return DeletarServico;
}(delete_1.default));
exports.default = DeletarServico;