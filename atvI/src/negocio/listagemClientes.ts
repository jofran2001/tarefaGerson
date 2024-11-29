import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`--------------------------------------`);
            console.log(`Cadastrado efetuado em: ${cliente.getDataCadastro.toLocaleDateString()}`)
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ${cliente.getCpf.getValor} Emissão: ${cliente.getCpf.getDataEmissao.toLocaleDateString()}`);
            console.log(`------------------RG------------------`);
            cliente.getRgs.forEach((rg, index) => {
                console.log(`${index + 1} RG:` + rg.getValor + ` emissao em ` + rg.getDataEmissao.toLocaleDateString());
            });
            console.log(`---------------Telefone---------------`);
            cliente.getTelefones.forEach((tell, index) => {
                console.log(`${index + 1 } Telefone: ` + tell.getDdd + ` ` + tell.getNumero)
            })
            console.log(`------------------Pet------------------`);
            cliente.getPets.forEach((pet, index) => {
                console.log(`${index + 1 } Nome: ${pet.getNome}, Genero: ${pet.getGenero}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}`)
            })
            console.log(`----------------Serviços-----------------`);
            cliente.getServicosConsumidos.map(servicos => {
                console.log(servicos.nome + `\nR$${servicos.preco}`);
            })
            console.log(`----------------Produtos-----------------`);
            cliente.getProdutosConsumidos.map(produto => {
                console.log(produto.nome + `\nR$${produto.preco}`);
            })
        });
        console.log(`\n`);
    }
}