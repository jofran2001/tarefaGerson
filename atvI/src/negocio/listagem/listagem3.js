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
var ListagemServicosProdutosPorTipoRaca = /** @class */ (function (_super) {
    __extends(ListagemServicosProdutosPorTipoRaca, _super);
    function ListagemServicosProdutosPorTipoRaca(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemServicosProdutosPorTipoRaca.prototype.listar = function () {
        var _this = this;
        var consumoPorRaca = {};
        this.clientes.forEach(function (cliente) {
            cliente.getPets.forEach(function (pet) {
                var _a, _b;
                var raca = pet.getRaca;
                var tipo = pet.getTipo;
                var servicosConsumidos = cliente.getServicosConsumidos.map(function (servico) { return servico.nome; });
                var produtosConsumidos = cliente.getProdutosConsumidos.map(function (produto) { return produto.nome; });
                if (!consumoPorRaca[raca]) {
                    consumoPorRaca[raca] = { tipo: "", produtos: [], servicos: [] };
                }
                consumoPorRaca[raca].tipo = tipo;
                (_a = consumoPorRaca[raca].produtos).push.apply(_a, produtosConsumidos);
                (_b = consumoPorRaca[raca].servicos).push.apply(_b, servicosConsumidos);
            });
        });
        console.log("Produtos, serviços e tipo mais consumidos por raça de pets:");
        Object.entries(consumoPorRaca).forEach(function (_a) {
            var raca = _a[0], consumo = _a[1];
            console.log("Ra\u00E7a: ".concat(raca));
            console.log("Tipo: ".concat(consumo.tipo));
            console.log("Produtos mais consumidos:");
            _this.listarItensMaisConsumidos(consumo.produtos, 3);
            console.log("Serviços mais consumidos:");
            _this.listarItensMaisConsumidos(consumo.servicos, 3);
            console.log();
        });
    };
    ListagemServicosProdutosPorTipoRaca.prototype.listarItensMaisConsumidos = function (itens, quantidade) {
        var itemCount = {};
        itens.forEach(function (item) {
            if (!itemCount[item]) {
                itemCount[item] = 0;
            }
            itemCount[item]++;
        });
        var ordenacao = Object.entries(itemCount).sort(function (a, b) {
            return b[1] - a[1];
        });
        var restricao = ordenacao.slice(0, quantidade);
        restricao.forEach(function (_a, index) {
            var item = _a[0], quantidade = _a[1];
            console.log("".concat(index + 1, ". ").concat(item, "  - Quantidade: ").concat(quantidade));
        });
    };
    return ListagemServicosProdutosPorTipoRaca;
}(listagem_1.default));
exports.default = ListagemServicosProdutosPorTipoRaca;
