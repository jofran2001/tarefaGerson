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
var entrada_1 = require("../io/entrada");
var cliente_1 = require("../modelo/cliente");
var cpf_1 = require("../modelo/cpf");
var pet_1 = require("../modelo/pet");
var rg_1 = require("../modelo/rg");
var telefone_1 = require("../modelo/telefone");
var cadastro_1 = require("./cadastro");
var inserts_1 = require("./Client/inserts");
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.servicos = servicos;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        /* CPF */
        var valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: ");
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var partesData = data.split("/");
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        /* RG */
        var cliente = new cliente_1.default(nome, nomeSocial, cpf);
        var pergunta = this.entrada.receberTexto("Cadastrar RG?: SIM | NÃO").toLowerCase();
        if (pergunta === 'sim') {
            var rgs = [];
            valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do RG: ");
            data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
            partesData = data.split("/");
            ano = new Number(partesData[2].valueOf()).valueOf();
            mes = new Number(partesData[1].valueOf()).valueOf();
            dia = new Number(partesData[0].valueOf()).valueOf();
            dataEmissao = new Date(ano, mes, dia);
            var rg = new rg_1.default(valor, dataEmissao);
            rgs.push(rg);
            var repeticao = this.entrada.receberTexto("Deseja cadastrar outro RG?: SIM | NÃO: ").toLowerCase();
            while (repeticao === "sim") {
                var rg_2 = (0, inserts_1.insertRG)(this.entrada);
                rgs.push(rg_2);
                repeticao = this.entrada.receberTexto("Deseja cadastrar outro RG?: SIM | NÃO: ").toLowerCase();
            }
            rgs.map(function (itens) { return cliente.getRgs.push(itens); });
        }
        /* Telefone */
        pergunta = this.entrada.receberTexto("Cadastrar Telefone?: SIM | NÃO").toLowerCase();
        if (pergunta === 'sim') {
            var tells = [];
            var number = this.entrada.receberTexto("Por favor digite o numero do telefone no padr\u00E3o DDD NUMERO:");
            var partesTell = number.split(' ');
            var ddd = new String(partesTell[0].valueOf()).valueOf();
            var numero = new String(partesTell[1].valueOf()).valueOf();
            var telefone = new telefone_1.default(ddd, numero);
            tells.push(telefone);
            var repeticao = this.entrada.receberTexto("Deseja cadastrar outro Telefone?: SIM | NÃO: ").toLowerCase();
            while (repeticao === "sim") {
                var tell = (0, inserts_1.insertTelefone)(this.entrada);
                tells.push(tell);
                repeticao = this.entrada.receberTexto("Deseja cadastrar outro Telefone?: SIM | NÃO: ").toLowerCase();
            }
            tells.map(function (itens) { return cliente.getTelefones.push(itens); });
        }
        /* Pets */
        pergunta = this.entrada.receberTexto("Cadastrar Pet?: SIM | NÃO").toLowerCase();
        if (pergunta === 'sim') {
            var pets = [];
            var petNome = this.entrada.receberTexto("Digite o nome do pet: ");
            var petRaca = this.entrada.receberTexto("Digite a raça do pet: ");
            var petTipo = this.entrada.receberTexto("Digite o tipo do pet: ");
            var petGene = this.entrada.receberTexto("Qual o Genero do pet: ");
            var newPet = new pet_1.default(petNome, petRaca, petTipo, petGene);
            pets.push(newPet);
            var repeticao = this.entrada.receberTexto("Deseja cadastrar outro Pet?: SIM | NÃO: ").toLowerCase();
            while (repeticao === "sim") {
                var pet = (0, inserts_1.insertPet)(this.entrada);
                pets.push(pet);
                repeticao = this.entrada.receberTexto("Deseja cadastrar outro Pet?: SIM | NÃO: ").toLowerCase();
            }
            pets.map(function (itens) { return cliente.getPets.push(itens); });
        }
        /* Produtos */
        console.log("Digite os produtos consumidos no padr\u00E3o: \nProduto A, Produto B, Produto C.... ou apenas Produto A: ");
        nome = this.entrada.receberTexto("Nome dos produtos: ");
        (0, inserts_1.insertProduto)(nome, this.produtos, cliente, this.entrada);
        console.log("Digite os servi\u00E7os consumidos no padr\u00E3o: \nServi\u00E7o A, Servi\u00E7o B, Servi\u00E7o C.... ou apenas Servi\u00E7o A: ");
        nome = this.entrada.receberTexto("Nome dos produtos: ");
        (0, inserts_1.insertServico)(nome, this.servicos, cliente, this.entrada);
        /* Create Cliente */
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
