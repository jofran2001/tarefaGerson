"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
var cadastroCliente_1 = require("../negocio/cadastroCliente");
var delete_1 = require("../negocio/Client/delete");
var gerar_1 = require("../negocio/Client/gerar");
var update_1 = require("../negocio/Client/update");
var listagem1_1 = require("../negocio/listagem/listagem1");
var listagem2produto_1 = require("../negocio/listagem/listagem2produto");
var listagem2servico_1 = require("../negocio/listagem/listagem2servico");
var listagem3_1 = require("../negocio/listagem/listagem3");
var listagem4_1 = require("../negocio/listagem/listagem4");
var listagemClientes_1 = require("../negocio/listagemClientes");
var atualizar_1 = require("../negocio/Produto/atualizar");
var cadastrar_1 = require("../negocio/Produto/cadastrar");
var deletar_1 = require("../negocio/Produto/deletar");
var listar_1 = require("../negocio/Produto/listar");
var atualizar_2 = require("../negocio/Service/atualizar");
var cadastrar_2 = require("../negocio/Service/cadastrar");
var deletar_2 = require("../negocio/Service/deletar");
var listar_2 = require("../negocio/Service/listar");
console.log("Bem-vindo ao melhor sistema de gerenciamento de pet shops e cl\u00EDnicas veterinarias");
var empresa = new empresa_1.default();
var execucao = true;
var geracao = new gerar_1.default(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
geracao.geracao();
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("-----CRUD CLIENTE-----");
    console.log("01 - Cadastrar cliente");
    console.log("02 - Listar todos os clientes");
    console.log("03 - Atualizar Cliente");
    console.log("04 - Deletar Cliente");
    console.log("-----CRUD PRODUTO-----");
    console.log("05 - Cadastrar Produtos");
    console.log("06 - Listar Produtos   ");
    console.log("07 - Atualizar Produtos");
    console.log("08 - Deletar Produtos  ");
    console.log("-----CRUD SERVI\u00C7O-----");
    console.log("09 - Cadastrar Servi\u00E7os");
    console.log("10 - Listar Servi\u00E7os   ");
    console.log("11 - Atualizar Servi\u00E7os");
    console.log("12 - Deletar Servi\u00E7os  ");
    console.log("-----Listagem-----");
    console.log("13 - Listagem dos 10 clientes que mais consumiram produtos ou servi\u00E7os, em quantidade, n\u00E3o em valor  ");
    console.log("14 - Listagem geral dos servi\u00E7os mais consumidos. Quantidade  ");
    console.log("15 - Listagem geral dos produtos mais consumidos. Quantidade  ");
    console.log("16 - Listagem dos servi\u00E7os ou produtos mais consumidos por tipo e ra\u00E7a de pets.  ");
    console.log("17 - Listagem dos 5 clientes que mais consumiram em valor, n\u00E3o em quantidade.  ");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var updateCliente = new update_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            updateCliente.update();
            break;
        case 4:
            var deleteCliente = new delete_1.default(empresa.getClientes);
            deleteCliente.delete();
            break;
        case 5:
            var cadastrarProduto = new cadastrar_1.default(empresa.getProdutos);
            cadastrarProduto.cadastrar();
            break;
        case 6:
            var listarProduto = new listar_1.default(empresa.getProdutos);
            listarProduto.listar();
            break;
        case 7:
            var autalizarProduto = new atualizar_1.default(empresa.getProdutos);
            autalizarProduto.update();
            break;
        case 8:
            var deletarProduto = new deletar_1.default(empresa.getProdutos);
            deletarProduto.delete();
            break;
        case 9:
            var cadastrarServico = new cadastrar_2.default(empresa.getServicos);
            cadastrarServico.cadastrar();
            break;
        case 10:
            var listarServico = new listar_2.default(empresa.getServicos);
            listarServico.listar();
            break;
        case 11:
            var atualizarServico = new atualizar_2.default(empresa.getServicos);
            atualizarServico.update();
            break;
        case 12:
            var deletarServico = new deletar_2.default(empresa.getServicos);
            deletarServico.delete();
            break;
        case 13:
            var listagemUm = new listagem1_1.default(empresa.getClientes);
            listagemUm.listar();
            break;
        case 14:
            var listagemDoisServicos = new listagem2servico_1.default(empresa.getClientes);
            listagemDoisServicos.listar();
            break;
        case 15:
            var listagemDoisProduto = new listagem2produto_1.default(empresa.getClientes);
            listagemDoisProduto.listar();
            break;
        case 16:
            var listagemTres = new listagem3_1.default(empresa.getClientes);
            listagemTres.listar();
            break;
        case 17:
            var listagemQuatro = new listagem4_1.default(empresa.getClientes);
            listagemQuatro.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
