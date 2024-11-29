"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertRG = insertRG;
exports.insertTelefone = insertTelefone;
exports.insertPet = insertPet;
exports.insertProduto = insertProduto;
exports.insertServico = insertServico;
var pet_1 = require("../../modelo/pet");
var produto_1 = require("../../modelo/produto");
var rg_1 = require("../../modelo/rg");
var servico_1 = require("../../modelo/servico");
var telefone_1 = require("../../modelo/telefone");
function insertRG(entrada) {
    var valor = entrada.receberTexto("Por favor informe o n\u00FAmero do RG: ");
    var data = entrada.receberTexto("Por favor informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
    var partesData = data.split("/");
    var ano = new Number(partesData[2].valueOf()).valueOf();
    var mes = new Number(partesData[1].valueOf()).valueOf();
    var dia = new Number(partesData[0].valueOf()).valueOf();
    var dataEmissao = new Date(ano, mes, dia);
    var rg = new rg_1.default(valor, dataEmissao);
    return rg;
}
function insertTelefone(entrada) {
    var tell = entrada.receberTexto("Por favor digite o numero do telefone no padr\u00E3o DDD NUMERO:");
    var partesTell = tell.split(" ");
    var ddd = new String(partesTell[0].valueOf()).valueOf();
    var numero = new String(partesTell[1].valueOf()).valueOf();
    var telefone = new telefone_1.default(ddd, numero);
    return telefone;
}
function insertPet(entrada) {
    var petNome = entrada.receberTexto("Digite o nome do pet: ");
    var petRaca = entrada.receberTexto("Digite a raça do pet: ");
    var petTipo = entrada.receberTexto("Digite o tipo do pet: ");
    var petGene = entrada.receberTexto("Qual o Genero do pet: ");
    var pet = new pet_1.default(petNome, petRaca, petTipo, petGene);
    return pet;
}
function insertProduto(lista, produtos, cliente, entrada) {
    var newLista = lista.split(", ");
    newLista.forEach(function (item) {
        var achar = produtos.find(function (alvo) { return alvo.nome === item; });
        if (achar !== undefined) {
            cliente.getProdutosConsumidos.push(achar);
        }
        else {
            var preco = entrada.receberNumero("Digite o preço do objeto: R$");
            var newProd = new produto_1.default(item, preco);
            produtos.push(newProd);
            cliente.getProdutosConsumidos.push(newProd);
        }
    });
}
function insertServico(lista, servicos, cliente, entrada) {
    var newLista = lista.split(", ");
    newLista.forEach(function (item) {
        var achar = servicos.find(function (alvo) { return alvo.nome === item; });
        if (achar !== undefined) {
            cliente.getProdutosConsumidos.push(achar);
        }
        else {
            var preco = entrada.receberNumero("Digite o preço do serviço: R$");
            var newProd = new servico_1.default(item, preco);
            servicos.push(newProd);
            cliente.getProdutosConsumidos.push(newProd);
        }
    });
}
