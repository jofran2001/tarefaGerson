/* Listagem geral dos serviços ou produtos mais consumidos. */
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemServicoMaisConsumido extends Listagem {
  private cliente: Array<Cliente>;
  constructor(cliente: Array<Cliente>) {
    super();
    this.cliente = cliente;
  }
  public listar(): void {
    let servicosConsumidos: { [nome: string]: number } = {};
    this.cliente.forEach((cliente) => {
      cliente.getServicosConsumidos.forEach((servico) => {
        const nome = servico.nome;
        servicosConsumidos[nome] = (servicosConsumidos[nome] || 0) + 1;
      });
    });
    let ordenacao = Object.entries(servicosConsumidos).sort((a, b) => {
      return b[1] - a[1];
    });
    let restricao = ordenacao.slice(0, 3);
    console.log("-------------------------");
    console.log("Serviço mais Consumido");
    restricao.forEach((consumidos: [string, number]) => {
      const nome = consumidos[0];
      const quantidade = consumidos[1];
      console.log(`Nome: ${nome}`);
      console.log(`Quantidade consumida: ${quantidade}`);
    });
    console.log("-------------------------");
  }
}
