import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Update from "../update";

export default class AtualizarServico extends Update {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada();
    }
    public update(): void {
        console.log(`Lista de todos os Serviços`);
        this.servicos.forEach((servico, index) => { console.log(`${index} - Serviço: ${servico.nome}`)})
        let entrada = this.entrada.receberNumero(`Digite o index: `)
        let indexServico = this.servicos[entrada]
        if (indexServico !== undefined) {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do Serviço: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do Serviço: R$`)
            indexServico.nome = novoNome
            indexServico.preco = novoPreco
            console.log(`Serviço alterado com sucesso`);
        } else {
            console.log(`Serviço não encontrado`);
        }
    }
}