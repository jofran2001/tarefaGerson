import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico";
import Delete from "../delete"

export default class DeletarServico extends Delete {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos;
        this.entrada = new Entrada();
    }
    public delete(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach((servico, index) => {console.log(`${index} - Nome: ${servico.nome}`)})
        let entrada = this.entrada.receberNumero(`Digite o indice:  `)
        let indiceServico = this.servicos[entrada]
        if(indiceServico !== undefined){
            let receber = this.entrada.receberTexto(`Tem certeza que deseja deletar o serviço? Sim | Não: `).toLowerCase()
            if(receber === 'sim'){
                this.servicos.splice(entrada, 1)
            }
        }
    }
}