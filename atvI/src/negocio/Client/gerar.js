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
var cliente_1 = require("../../modelo/cliente");
var cpf_1 = require("../../modelo/cpf");
var pet_1 = require("../../modelo/pet");
var produto_1 = require("../../modelo/produto");
var servico_1 = require("../../modelo/servico");
var Gerar = /** @class */ (function () {
    function Gerar() {
    }
    return Gerar;
}());
var GerarItens = /** @class */ (function (_super) {
    __extends(GerarItens, _super);
    function GerarItens(produtos, servicos, clientes) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.servicos = servicos;
        _this.clientes = clientes;
        return _this;
    }
    GerarItens.prototype.geracao = function () {
        var _this = this;
        var preco1 = [1, 49, 34, 23, 68, 7, 82, 39, 55, 11, 95, 30, 77, 16, 92, 42, 63, 8, 74, 20];
        var preco2 = [82, 47, 56, 18, 29, 63, 41, 14, 39, 75, 22, 57, 33, 91, 68, 10, 52, 76, 27, 83];
        var petShopItens = ["Ração para cães", "Ração para gatos", "Petiscos para cães", "Petiscos para gatos", "Brinquedos para cães", "Brinquedos para gatos", "Camas para cães", "Camas para gatos", "Coleiras e guias", "Produtos de higiene para cães", "Produtos de higiene para gatos", "Shampoos e condicionadores para pets", "Medicamentos para pets", "Acessórios para transporte de pets", "Bebedouros e comedouros", "Roupinhas para cães e gatos", "Tábuas de arranhar para gatos", "Gaiolas e viveiros para pássaros", "Aquários e acessórios para peixes", "Areia sanitária para gatos"];
        var petShopServicos = ["Banho e tosa", "Corte de unhas", "Limpeza de ouvidos", "Escovação dentária", "Tratamento para pulgas e carrapatos", "Hidratação para pelos", "Corte de pelos", "Consulta veterinária", "Vacinação", "Microchipagem", "Banho seco", "Tratamento de pele", "Desvermifugação", "Serviço de creche para pets", "Hospedagem para cães e gatos", "Adestramento básico", "Serviço de transporte para pets", "Terapia comportamental para cães", "Acupuntura veterinária", "Cirurgia veterinária"];
        petShopItens.map(function (itens, index) {
            var produto = new produto_1.default(itens, preco1[index]);
            _this.produtos.push(produto);
        });
        petShopServicos.map(function (itens, index) {
            var servico = new servico_1.default(itens, preco2[index]);
            _this.servicos.push(servico);
        });
        var listaNomes = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry", "Isabel", "Jack"];
        var listaNomePets = [
            { nome: "Max", tipo: "Cachorro", raca: "Golden Retriever", genero: "Macho" },
            { nome: "Bella", tipo: "Gato", raca: "Siamês", genero: "Fêmea" },
            { nome: "Charlie", tipo: "Cachorro", raca: "Golden Retriever", genero: "Macho" },
            { nome: "Luna", tipo: "Gato", raca: "Siamês", genero: "Fêmea" },
            { nome: "Rocky", tipo: "Cachorro", raca: "Rottweiler", genero: "Macho" },
            { nome: "Molly", tipo: "Cachorro", raca: "Rottweiler", genero: "Fêmea" },
            { nome: "Simba", tipo: "Gato", raca: "Siamês", genero: "Macho" },
            { nome: "Lola", tipo: "Cachorro", raca: "Poodle", genero: "Fêmea" },
            { nome: "Oscar", tipo: "Gato", raca: "Bengal", genero: "Macho" },
            { nome: "Daisy", tipo: "Cachorro", raca: "Poodle", genero: "Fêmea" },
        ];
        var cpfs = [
            { valor: "98765432101", dataEmissao: new Date() },
            { valor: "12345678910", dataEmissao: new Date() },
            { valor: "24681357900", dataEmissao: new Date() },
            { valor: "98765432109", dataEmissao: new Date() },
            { valor: "13579246800", dataEmissao: new Date() },
            { valor: "86420975311", dataEmissao: new Date() },
            { valor: "01234567890", dataEmissao: new Date() },
            { valor: "98765432102", dataEmissao: new Date() },
            { valor: "98765432104", dataEmissao: new Date() },
            { valor: "98765432103", dataEmissao: new Date() },
        ];
        listaNomes.map(function (clientes, index) {
            var numeroAleatorio = Math.floor(Math.random() * 10);
            var cpf = new cpf_1.default(cpfs[index].valor, cpfs[index].dataEmissao);
            var cliente = new cliente_1.default(clientes, "", cpf);
            var newPet = new pet_1.default(listaNomePets[index].nome, listaNomePets[index].raca, listaNomePets[index].genero, listaNomePets[index].tipo);
            cliente.getPets.push(newPet);
            for (var x = 0; x < numeroAleatorio; x++) {
                cliente.getProdutosConsumidos.push({ nome: petShopItens[x], preco: preco1[x] });
                cliente.getServicosConsumidos.push({ nome: petShopServicos[x], preco: preco2[x] });
            }
            _this.clientes.push(cliente);
        });
    };
    return GerarItens;
}(Gerar));
exports.default = GerarItens;
