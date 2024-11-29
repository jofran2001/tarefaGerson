import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastrarServico extends Cadastro {
  private servicos: Array<Servico>;
  private entrada: Entrada;
  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }
  public cadastrar(): void {
    console.log(`\nCadastre seu produto`);
    let newServico = this.entrada.receberTexto(`Qual é o nome do produto: `);
    let nomes = this.servicos.map((servico) => servico.nome);
    if (nomes.includes(newServico)) {
      console.log(`${newServico} já existe dentro do sistema`);
    } else {
      let preco = this.entrada.receberNumero(`Qual é o preço do produto? R$`);
      let cadastrar = new Servico(newServico, preco);
      this.servicos.push(cadastrar);
    }
  }
}
