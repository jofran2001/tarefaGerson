import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Delete from "../delete"

export default class DeletarProduto extends Delete {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public delete(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach((produtos, index) => {console.log(`${index} - Nome: ${produtos.nome}`)})
        let entrada = this.entrada.receberNumero(`Digite o indice:  `)
        let indiceProduto = this.produtos[entrada]
        if(indiceProduto !== undefined){
            let receber = this.entrada.receberTexto(`Tem certeza que deseja deletar o produto? Sim | Não: `).toLowerCase()
            if(receber === 'sim'){
                this.produtos.splice(entrada, 1)
            }
        }
    }
}