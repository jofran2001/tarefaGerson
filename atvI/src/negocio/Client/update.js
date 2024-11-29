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
var inserts_1 = require("./inserts");
var ClienteUpdate = /** @class */ (function (_super) {
    __extends(ClienteUpdate, _super);
    function ClienteUpdate(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        _this.loop = true;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    ClienteUpdate.prototype.update = function () {
        this.clientes.forEach(function (cliente) {
            console.log("Nome: ".concat(cliente.nome, ", Cpf: ").concat(cliente.getCpf.getValor));
        });
        var entrada = this.entrada.receberTexto("Digite o cpf do cliente desejado:  ");
        var cliente = this.clientes.find(function (i) { return i.getCpf.getValor === entrada; });
        if (cliente) {
            while (this.loop) {
                console.log("01 - Editar Nome");
                console.log("02 - Editar Nome Social");
                console.log("03 - Editar Cpf");
                console.log("04 - Editar RG's");
                console.log("05 - Editar Telefones");
                console.log("06 - Editar Pet's");
                console.log("---------------------");
                console.log("07 - Inserir RG");
                console.log("08 - Inserir Telefone");
                console.log("09 - Inserir Pet");
                console.log("10 - Inserir Produto");
                console.log("11 - Inserir Serviço");
                console.log("0 - Sair");
                var escolha = this.entrada.receberNumero("Digite a op\u00E7\u00E3o: ");
                switch (escolha) {
                    case 1:
                        var novoNome = this.entrada.receberTexto("Digite o novo nome: ");
                        cliente.nome = novoNome;
                        break;
                    case 2:
                        var novoNomeSocial = this.entrada.receberTexto("Digite o novo nome social: ");
                        cliente.nomeSocial = novoNomeSocial;
                        break;
                    case 3:
                        var novoCpf = this.entrada.receberTexto("Digite o novo CPF: ");
                        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
                        var partesData = data.split("/");
                        var ano = new Number(partesData[2].valueOf()).valueOf();
                        var mes = new Number(partesData[1].valueOf()).valueOf();
                        var dia = new Number(partesData[0].valueOf()).valueOf();
                        var dataEmissao = new Date(ano, mes, dia);
                        cliente.getCpf.setDataEmissao = dataEmissao;
                        cliente.getCpf.setValor = novoCpf;
                        break;
                    case 4:
                        cliente.getRgs.forEach(function (rgs, index) { return console.log("".concat(index, " - Rgs: ").concat(rgs.getValor)); });
                        var escolha_1 = this.entrada.receberNumero("Digite o indice  do RG: ");
                        var indeceRg = cliente.getRgs[escolha_1];
                        if (indeceRg !== undefined) {
                            var novoRg = this.entrada.receberTexto("Digite o novo RG: ");
                            var data_1 = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
                            var partesData_1 = data_1.split("/");
                            var ano_1 = new Number(partesData_1[2].valueOf()).valueOf();
                            var mes_1 = new Number(partesData_1[1].valueOf()).valueOf();
                            var dia_1 = new Number(partesData_1[0].valueOf()).valueOf();
                            var dataEmissao_1 = new Date(ano_1, mes_1, dia_1);
                            indeceRg.setValor = novoRg;
                            indeceRg.setDataEmissao = dataEmissao_1;
                        }
                        else {
                            console.log('RG não encontrado');
                        }
                        break;
                    case 5:
                        cliente.getTelefones.forEach(function (tell, index) { console.log("".concat(index, " - Telefones: ").concat(tell.getDdd).concat(tell.getNumero)); });
                        escolha_1 = this.entrada.receberNumero("Digite o indice do telefone: ");
                        var indiceTell = cliente.getTelefones[escolha_1];
                        if (indiceTell !== undefined) {
                            var newDDD = this.entrada.receberTexto("Digite o DDD");
                            var newNumber = this.entrada.receberTexto("Digite o Numero");
                            indiceTell.setDDD = newDDD;
                            indiceTell.setNumero = newNumber;
                        }
                        else {
                            console.log("Telefone não encontrado");
                        }
                        break;
                    case 6:
                        cliente.getPets.forEach(function (pets, index) { console.log("".concat(index, " - ").concat(pets.getNome)); });
                        escolha_1 = this.entrada.receberNumero("Digite o indice do pet a editar: ");
                        var indicePet = cliente.getPets[escolha_1];
                        if (indicePet !== undefined) {
                            var newNome = this.entrada.receberTexto("Digite o nome do pet: ");
                            var newRaca = this.entrada.receberTexto("Digite a raça do pet: ");
                            var newTipo = this.entrada.receberTexto("Digite o tipo do pet: ");
                            var newGene = this.entrada.receberTexto("Qual o Genero do pet: ");
                            indicePet.setNome = newNome;
                            indicePet.setRaca = newRaca;
                            indicePet.setGenero = newTipo;
                            indicePet.setTipo = newGene;
                        }
                        else {
                            console.log('Pet não encontrado');
                        }
                        break;
                    case 7:
                        var rg = (0, inserts_1.insertRG)(this.entrada);
                        cliente.getRgs.push(rg);
                        break;
                    case 8:
                        var telefone = (0, inserts_1.insertTelefone)(this.entrada);
                        cliente.getTelefones.push(telefone);
                        break;
                    case 9:
                        var pets = (0, inserts_1.insertPet)(this.entrada);
                        cliente.getPets.push(pets);
                        break;
                    case 10:
                        console.log("Digite os produtos consumidos no padr\u00E3o: \nProduto A, Produto B, Produto C.... ou apenas Produto A: ");
                        var nome = this.entrada.receberTexto("Nome dos produtos: ");
                        (0, inserts_1.insertProduto)(nome, this.produtos, cliente, this.entrada);
                        break;
                    case 11:
                        console.log("Digite os produtos consumidos no padr\u00E3o: \nServi\u00E7o A, Servi\u00E7o B, Servi\u00E7o C.... ou apenas Servi\u00E7o A: ");
                        nome = this.entrada.receberTexto("Nome dos produtos: ");
                        (0, inserts_1.insertServico)(nome, this.servicos, cliente, this.entrada);
                        break;
                    case 0:
                        this.loop = false;
                        break;
                }
            }
        }
    };
    return ClienteUpdate;
}(update_1.default));
exports.default = ClienteUpdate;
