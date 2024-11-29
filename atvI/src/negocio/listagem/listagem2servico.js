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
var ListagemServicoMaisConsumido = /** @class */ (function (_super) {
    __extends(ListagemServicoMaisConsumido, _super);
    function ListagemServicoMaisConsumido(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        return _this;
    }
    ListagemServicoMaisConsumido.prototype.listar = function () {
        var servicosConsumidos = {};
        this.cliente.forEach(function (cliente) {
            cliente.getServicosConsumidos.forEach(function (servico) {
                var nome = servico.nome;
                servicosConsumidos[nome] = (servicosConsumidos[nome] || 0) + 1;
            });
        });
        var ordenacao = Object.entries(servicosConsumidos).sort(function (a, b) {
            return b[1] - a[1];
        });
        var restricao = ordenacao.slice(0, 3);
        console.log("-------------------------");
        console.log("Serviço mais Consumido");
        restricao.forEach(function (consumidos) {
            var nome = consumidos[0];
            var quantidade = consumidos[1];
            console.log("Nome: ".concat(nome));
            console.log("Quantidade consumida: ".concat(quantidade));
        });
        console.log("-------------------------");
    };
    return ListagemServicoMaisConsumido;
}(listagem_1.default));
exports.default = ListagemServicoMaisConsumido;
