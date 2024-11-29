import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Update from "../update";
import { insertPet, insertProduto, insertRG, insertServico, insertTelefone } from "./inserts";

export default class ClienteUpdate extends Update {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  private loop: boolean;
  private produtos: Array<Produto>
  private servicos: Array<Servico>
  constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
    this.loop = true;
    this.produtos = produtos
    this.servicos = servicos
  }
  public update(): void {
    this.clientes.forEach((cliente) => {
      console.log(`Nome: ${cliente.nome}, Cpf: ${cliente.getCpf.getValor}`);
    });
    let entrada = this.entrada.receberTexto(`Digite o cpf do cliente desejado:  `);
    let cliente = this.clientes.find((i) => i.getCpf.getValor === entrada);
    if (cliente) {
      while (this.loop) {
        console.log("01 - Editar Nome");
        console.log("02 - Editar Nome Social");
        console.log("03 - Editar Cpf");
        console.log("04 - Editar RG's");
        console.log("05 - Editar Telefones");
        console.log("06 - Editar Pet's");
        console.log("---------------------")
        console.log("07 - Inserir RG");
        console.log("08 - Inserir Telefone");
        console.log("09 - Inserir Pet");
        console.log("10 - Inserir Produto")
        console.log("11 - Inserir Serviço")
        console.log("0 - Sair");
        let escolha = this.entrada.receberNumero(`Digite a opção: `)
        switch(escolha){
            case 1:
                let novoNome = this.entrada.receberTexto("Digite o novo nome: ")
                cliente.nome = novoNome
                break
            case 2:
                let novoNomeSocial = this.entrada.receberTexto("Digite o novo nome social: ")
                cliente.nomeSocial = novoNomeSocial
                break
            case 3:
                let novoCpf = this.entrada.receberTexto(`Digite o novo CPF: `)
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
                let partesData = data.split("/");
                let ano = new Number(partesData[2].valueOf()).valueOf();
                let mes = new Number(partesData[1].valueOf()).valueOf();
                let dia = new Number(partesData[0].valueOf()).valueOf();
                let dataEmissao = new Date(ano, mes, dia);
                cliente.getCpf.setDataEmissao = dataEmissao
                cliente.getCpf.setValor = novoCpf
                break
            case 4:
                cliente.getRgs.forEach(( rgs, index ) => console.log(`${index} - Rgs: ${rgs.getValor}`))
                let escolha = this.entrada.receberNumero(`Digite o indice  do RG: `)
                let indeceRg = cliente.getRgs[escolha]
                if(indeceRg !== undefined){
                    let novoRg = this.entrada.receberTexto(`Digite o novo RG: `)
                    let data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
                    let partesData = data.split("/");
                    let ano = new Number(partesData[2].valueOf()).valueOf();
                    let mes = new Number(partesData[1].valueOf()).valueOf();
                    let dia = new Number(partesData[0].valueOf()).valueOf();
                    let dataEmissao = new Date(ano, mes, dia);
                    indeceRg.setValor = novoRg
                    indeceRg.setDataEmissao = dataEmissao
                }else{
                    console.log('RG não encontrado')
                }
                break
            case 5:
                cliente.getTelefones.forEach(( tell, index ) =>{console.log(`${index} - Telefones: ${tell.getDdd}${tell.getNumero}`)})
                escolha = this.entrada.receberNumero(`Digite o indice do telefone: `)
                let indiceTell = cliente.getTelefones[escolha]
                if(indiceTell !== undefined){
                    let newDDD = this.entrada.receberTexto(`Digite o DDD`)
                    let newNumber = this.entrada.receberTexto("Digite o Numero")
                    indiceTell.setDDD = newDDD
                    indiceTell.setNumero = newNumber
                }else{
                    console.log("Telefone não encontrado")
                }
                break
            case 6:
                cliente.getPets.forEach(( pets, index ) => {console.log(`${index } - ${pets.getNome}`)})
                escolha = this.entrada.receberNumero(`Digite o indice do pet a editar: `)
                let indicePet = cliente.getPets[escolha];
                if(indicePet !== undefined){
                    let newNome = this.entrada.receberTexto("Digite o nome do pet: ")
                    let newRaca = this.entrada.receberTexto("Digite a raça do pet: ")
                    let newTipo = this.entrada.receberTexto("Digite o tipo do pet: ")
                    let newGene = this.entrada.receberTexto("Qual o Genero do pet: ")
                    indicePet.setNome = newNome
                    indicePet.setRaca = newRaca
                    indicePet.setGenero = newTipo
                    indicePet.setTipo = newGene
                }else{
                    console.log('Pet não encontrado')
                }
                break
            case 7:
                let rg: RG = insertRG(this.entrada)
                cliente.getRgs.push(rg)
                break
            case 8:
                let telefone: Telefone = insertTelefone(this.entrada)
                cliente.getTelefones.push(telefone)
                break
            case 9:
                let pets: Pet = insertPet(this.entrada)
                cliente.getPets.push(pets)
                break
            case 10:
                console.log(`Digite os produtos consumidos no padrão: \nProduto A, Produto B, Produto C.... ou apenas Produto A: `)
                let nome = this.entrada.receberTexto(`Nome dos produtos: `)
                insertProduto(nome, this.produtos, cliente, this.entrada)
                break
            case 11:
                console.log(`Digite os produtos consumidos no padrão: \nServiço A, Serviço B, Serviço C.... ou apenas Serviço A: `)
                nome = this.entrada.receberTexto(`Nome dos produtos: `)
                insertServico(nome, this.servicos, cliente, this.entrada)
                break
            case 0:
                this.loop = false
                break
        }
      }
    }
  }
}