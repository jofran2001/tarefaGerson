import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Delete from "../delete"

export default class ClienteDelete extends Delete {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public delete(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente, index) => {console.log(`${index} - Nome: ${cliente.nome}`)})
        let entrada = this.entrada.receberNumero(`Digite o indice:  `)
        let indiceCliente = this.clientes[entrada]
        if(indiceCliente !== undefined){
            let receber = this.entrada.receberTexto(`Tem certeza que deseja deletar o cliente? Sim | Não: `).toLowerCase()
            if(receber === 'sim'){
                this.clientes.splice(entrada, 1)
            }
        }
    }
}