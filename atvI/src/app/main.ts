import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ClienteDelete from "../negocio/Client/delete";
import GerarItens from "../negocio/Client/gerar";
import ClienteUpdate from "../negocio/Client/update";
import ListagemUmClientesQuantidade from "../negocio/listagem/listagem1";
import ListagemProdutoMaisConsumido from "../negocio/listagem/listagem2produto";
import ListagemServicoMaisConsumido from "../negocio/listagem/listagem2servico";
import ListagemServicosProdutosPorTipoRaca from "../negocio/listagem/listagem3";
import listagemClienteValor from "../negocio/listagem/listagem4";
import ListagemClientes from "../negocio/listagemClientes";
import AtualizarProduto from "../negocio/Produto/atualizar";
import CadastrarProduto from "../negocio/Produto/cadastrar";
import DeletarProduto from "../negocio/Produto/deletar";
import ListagemProduto from "../negocio/Produto/listar";
import AtualizarServico from "../negocio/Service/atualizar";
import CadastrarServico from "../negocio/Service/cadastrar";
import DeletarServico from "../negocio/Service/deletar";
import ListagemServico from "../negocio/Service/listar";

console.log(
  `Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`
);
let empresa = new Empresa();
let execucao = true;
let geracao = new GerarItens(
  empresa.getProdutos,
  empresa.getServicos,
  empresa.getClientes
);
geracao.geracao();
while (execucao) {
  console.log(`Opções:`);
  console.log(`-----CRUD CLIENTE-----`);
  console.log(`01 - Cadastrar cliente`);
  console.log(`02 - Listar todos os clientes`);
  console.log(`03 - Atualizar Cliente`);
  console.log(`04 - Deletar Cliente`);
  console.log(`-----CRUD PRODUTO-----`);
  console.log(`05 - Cadastrar Produtos`);
  console.log(`06 - Listar Produtos   `);
  console.log(`07 - Atualizar Produtos`);
  console.log(`08 - Deletar Produtos  `);
  console.log(`-----CRUD SERVIÇO-----`);
  console.log(`09 - Cadastrar Serviços`);
  console.log(`10 - Listar Serviços   `);
  console.log(`11 - Atualizar Serviços`);
  console.log(`12 - Deletar Serviços  `);
  console.log(`-----Listagem-----`);
  console.log(`13 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor  `);
  console.log(`14 - Listagem geral dos serviços mais consumidos. Quantidade  `);
  console.log(`15 - Listagem geral dos produtos mais consumidos. Quantidade  `);
  console.log(`16 - Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.  `);
  console.log(`17 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.  `);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 1:
      let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
      cadastro.cadastrar();
      break;
    case 2:
      let listagem = new ListagemClientes(empresa.getClientes);
      listagem.listar();
      break;
    case 3:
      let updateCliente = new ClienteUpdate(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
      updateCliente.update();
      break;
    case 4:
      let deleteCliente = new ClienteDelete(empresa.getClientes);
      deleteCliente.delete();
      break;
    case 5:
      let cadastrarProduto = new CadastrarProduto(empresa.getProdutos);
      cadastrarProduto.cadastrar();
      break;
    case 6:
      let listarProduto = new ListagemProduto(empresa.getProdutos);
      listarProduto.listar();
      break;
    case 7:
      let autalizarProduto = new AtualizarProduto(empresa.getProdutos);
      autalizarProduto.update();
      break;
    case 8:
      let deletarProduto = new DeletarProduto(empresa.getProdutos);
      deletarProduto.delete();
      break;
    case 9:
      let cadastrarServico = new CadastrarServico(empresa.getServicos);
      cadastrarServico.cadastrar();
      break;
    case 10:
      let listarServico = new ListagemServico(empresa.getServicos);
      listarServico.listar();
      break;
    case 11:
      let atualizarServico = new AtualizarServico(empresa.getServicos);
      atualizarServico.update();
      break;
    case 12:
      let deletarServico = new DeletarServico(empresa.getServicos);
      deletarServico.delete();
      break;
    case 13:
      let listagemUm = new ListagemUmClientesQuantidade(empresa.getClientes);
      listagemUm.listar();
      break;
    case 14:
      let listagemDoisServicos = new ListagemServicoMaisConsumido(empresa.getClientes);
      listagemDoisServicos.listar();
      break;
    case 15:
      let listagemDoisProduto = new ListagemProdutoMaisConsumido(empresa.getClientes);
      listagemDoisProduto.listar();
      break;
    case 16:
      let listagemTres = new ListagemServicosProdutosPorTipoRaca(empresa.getClientes);
      listagemTres.listar()
      break
    case 17:
      let listagemQuatro = new listagemClienteValor(empresa.getClientes);
      listagemQuatro.listar()
      break
    case 0:
      execucao = false;
      console.log(`Até mais`);
      break;
    default:
      console.log(`Operação não entendida :(`);
  }
}
