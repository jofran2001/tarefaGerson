import { isNumberObject } from "util/types";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";
import { insertPet, insertProduto, insertRG, insertServico, insertTelefone } from "./Client/inserts";
import Servico from "../modelo/servico";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  private produtos: Array<Produto>
  private servicos: Array<Produto>
  constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
    super();
    this.produtos = produtos
    this.servicos = servicos
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);
    let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
    let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
    /* CPF */
    let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
    let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
    let partesData = data.split("/");
    let ano = new Number(partesData[2].valueOf()).valueOf();
    let mes = new Number(partesData[1].valueOf()).valueOf();
    let dia = new Number(partesData[0].valueOf()).valueOf();
    let dataEmissao = new Date(ano, mes, dia);
    let cpf = new CPF(valor, dataEmissao);
    /* RG */
    let cliente = new Cliente(nome, nomeSocial, cpf);
    let pergunta = this.entrada.receberTexto("Cadastrar RG?: SIM | NÃO").toLowerCase()
    if(pergunta === 'sim'){
        let rgs: RG[] = [];
        valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        partesData = data.split("/");
        ano = new Number(partesData[2].valueOf()).valueOf();
        mes = new Number(partesData[1].valueOf()).valueOf();
        dia = new Number(partesData[0].valueOf()).valueOf();
        dataEmissao = new Date(ano, mes, dia);
        let rg = new RG(valor, dataEmissao);
        rgs.push(rg);
        let repeticao = this.entrada.receberTexto("Deseja cadastrar outro RG?: SIM | NÃO: ").toLowerCase();
        while (repeticao === "sim") {
          let rg: RG = insertRG(this.entrada)
          rgs.push(rg)
          repeticao = this.entrada.receberTexto("Deseja cadastrar outro RG?: SIM | NÃO: ").toLowerCase();
        }
        rgs.map((itens) => cliente.getRgs.push(itens));
    }
    /* Telefone */
    pergunta = this.entrada.receberTexto("Cadastrar Telefone?: SIM | NÃO").toLowerCase()
    if(pergunta === 'sim'){
        let tells: Telefone[] = []
        let number = this.entrada.receberTexto(`Por favor digite o numero do telefone no padrão DDD NUMERO:`);
        let partesTell = number.split(' ')
        let ddd = new String(partesTell[0].valueOf()).valueOf()
        let numero = new String(partesTell[1].valueOf()).valueOf()
        let telefone = new Telefone(ddd, numero)
        tells.push(telefone)
        let repeticao = this.entrada.receberTexto("Deseja cadastrar outro Telefone?: SIM | NÃO: ").toLowerCase();
        while(repeticao === "sim"){
            let tell: Telefone = insertTelefone(this.entrada)
            tells.push(tell)
            repeticao = this.entrada.receberTexto("Deseja cadastrar outro Telefone?: SIM | NÃO: ").toLowerCase();
        }
        tells.map(( itens ) => cliente.getTelefones.push(itens))

    }
    /* Pets */
    pergunta = this.entrada.receberTexto("Cadastrar Pet?: SIM | NÃO").toLowerCase()
    if(pergunta === 'sim'){
        let pets: Pet[] = []
        let petNome = this.entrada.receberTexto("Digite o nome do pet: ")
        let petRaca = this.entrada.receberTexto("Digite a raça do pet: ")
        let petTipo = this.entrada.receberTexto("Digite o tipo do pet: ")
        let petGene = this.entrada.receberTexto("Qual o Genero do pet: ")
        let newPet = new Pet(petNome, petRaca, petTipo, petGene)
        pets.push(newPet)
        let repeticao = this.entrada.receberTexto("Deseja cadastrar outro Pet?: SIM | NÃO: ").toLowerCase();
        while(repeticao === "sim"){
            let pet: Pet = insertPet(this.entrada)
            pets.push(pet)
            repeticao = this.entrada.receberTexto("Deseja cadastrar outro Pet?: SIM | NÃO: ").toLowerCase();
        }
        pets.map((itens) => cliente.getPets.push(itens))
    }
    /* Produtos */
    console.log(`Digite os produtos consumidos no padrão: \nProduto A, Produto B, Produto C.... ou apenas Produto A: `)
    nome = this.entrada.receberTexto(`Nome dos produtos: `)
    insertProduto(nome, this.produtos, cliente, this.entrada)
    console.log(`Digite os serviços consumidos no padrão: \nServiço A, Serviço B, Serviço C.... ou apenas Serviço A: `)
    nome = this.entrada.receberTexto(`Nome dos produtos: `)
    insertServico(nome, this.servicos, cliente, this.entrada)
    /* Create Cliente */
    this.clientes.push(cliente);
    console.log(`\nCadastro concluído :)\n`);
  }
}