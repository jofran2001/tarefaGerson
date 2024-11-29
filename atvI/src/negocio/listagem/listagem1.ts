/* Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor */
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemUmClientesQuantidade extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        let consumidores: any = []
        this.cliente.forEach(qnt => {
            let nomeCliente = qnt.nome
            let qntidadeConsumo = qnt.getProdutosConsumidos.length + qnt.getServicosConsumidos.length
            consumidores.push({ nome: nomeCliente, quantidade: qntidadeConsumo })
        })
        let ordenacao = consumidores.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let restricao = ordenacao.slice(0, 9)
        console.log(`--------------------------------------`);
        console.log(`Lista dos 10 clientes que mais consumiram produtos e serviços`);
        restricao.forEach((consumidos: { nome: string; quantidade: string }) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade total consumido: ${consumidos.quantidade} itens`);
        })
        console.log(`--------------------------------------`);

    }
}