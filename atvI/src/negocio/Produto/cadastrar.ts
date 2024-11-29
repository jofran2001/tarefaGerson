import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastrarProduto extends Cadastro {
  private produtos: Array<Produto>;
  private entrada: Entrada;
  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }
  public cadastrar(): void {
    console.log(`\nCadastre seu produto`);
    let newProduto = this.entrada.receberTexto(`Qual é o nome do produto: `);
    let nomes = this.produtos.map((produto) => produto.nome);
    if (nomes.includes(newProduto)) {
      console.log(`${newProduto} já existe dentro do sistema`);
    } else {
      let preco = this.entrada.receberNumero(`Qual é o preço do produto? R$`);
      let cadastrar = new Produto(newProduto, preco);
      this.produtos.push(cadastrar);
    }
  }
}
