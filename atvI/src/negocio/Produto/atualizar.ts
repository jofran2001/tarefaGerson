import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Update from "../update";

export default class AtualizarProduto extends Update {
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produto = produto
        this.entrada = new Entrada();
    }
    public update(): void {
        console.log(`Lista de todos os Produtos`);
        this.produto.forEach((produto, index) => { console.log(`${index} - Produto: ${produto.nome}`)})
        let entrada = this.entrada.receberNumero(`Indice do Produto que deseja alterar: `)
        let indexProdutos = this.produto[entrada]
        if (indexProdutos !== undefined) {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do Produto: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do Produto: R$`)
            indexProdutos.nome = novoNome
            indexProdutos.preco = novoPreco
            console.log(`Produto Alterado com sucesso`);
        } else {
            console.log(`Produto não encontrado`);
        }
    }
}