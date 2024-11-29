import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
abstract class Gerar {
  public abstract geracao(): void;
}
export default class GerarItens extends Gerar {
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;
  private clientes: Array<Cliente>
  constructor(produtos: Array<Produto>,servicos: Array<Servico>, clientes: Array<Cliente>) {
    super();
    this.produtos = produtos;
    this.servicos = servicos;
    this.clientes = clientes;
  }
  public geracao(): void {
    const preco1: number[] = [1, 49, 34, 23, 68, 7, 82, 39, 55, 11, 95, 30, 77, 16, 92, 42, 63, 8, 74, 20];
    const preco2: number[] = [82, 47, 56, 18, 29, 63, 41, 14, 39, 75, 22, 57, 33, 91, 68, 10, 52, 76, 27, 83];

    const petShopItens: string[] = ["Ração para cães", "Ração para gatos", "Petiscos para cães", "Petiscos para gatos", "Brinquedos para cães", "Brinquedos para gatos", "Camas para cães", "Camas para gatos", "Coleiras e guias", "Produtos de higiene para cães", "Produtos de higiene para gatos", "Shampoos e condicionadores para pets", "Medicamentos para pets", "Acessórios para transporte de pets", "Bebedouros e comedouros", "Roupinhas para cães e gatos", "Tábuas de arranhar para gatos", "Gaiolas e viveiros para pássaros", "Aquários e acessórios para peixes", "Areia sanitária para gatos"];
    const petShopServicos: string[] = ["Banho e tosa", "Corte de unhas", "Limpeza de ouvidos", "Escovação dentária", "Tratamento para pulgas e carrapatos", "Hidratação para pelos", "Corte de pelos", "Consulta veterinária", "Vacinação", "Microchipagem", "Banho seco", "Tratamento de pele", "Desvermifugação", "Serviço de creche para pets", "Hospedagem para cães e gatos", "Adestramento básico", "Serviço de transporte para pets", "Terapia comportamental para cães", "Acupuntura veterinária", "Cirurgia veterinária"];
    petShopItens.map((itens, index) => {
      let produto = new Produto(itens, preco1[index]);
      this.produtos.push(produto);
    });
    petShopServicos.map((itens, index ) => {
      let servico = new Servico(itens, preco2[index])
      this.servicos.push(servico)
    })
    const listaNomes = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry", "Isabel", "Jack"];
    const listaNomePets = [
      { nome: "Max", tipo: "Cachorro", raca: "Golden Retriever", genero: "Macho" },
      { nome: "Bella", tipo: "Gato", raca: "Siamês", genero: "Fêmea" },
      { nome: "Charlie", tipo: "Cachorro", raca: "Golden Retriever", genero: "Macho" },
      { nome: "Luna", tipo: "Gato", raca: "Siamês", genero: "Fêmea" },
      { nome: "Rocky", tipo: "Cachorro", raca: "Rottweiler", genero: "Macho" },
      { nome: "Molly", tipo: "Cachorro", raca: "Rottweiler", genero: "Fêmea" },
      { nome: "Simba", tipo: "Gato", raca: "Siamês", genero: "Macho" },
      { nome: "Lola", tipo: "Cachorro", raca: "Poodle", genero: "Fêmea" },
      { nome: "Oscar", tipo: "Gato", raca: "Bengal", genero: "Macho" },
      { nome: "Daisy", tipo: "Cachorro", raca: "Poodle", genero: "Fêmea" },
    ];
    const cpfs = [
      { valor: "98765432101", dataEmissao: new Date() },
      { valor: "12345678910", dataEmissao: new Date() },
      { valor: "24681357900", dataEmissao: new Date() },
      { valor: "98765432109", dataEmissao: new Date() },
      { valor: "13579246800", dataEmissao: new Date() },
      { valor: "86420975311", dataEmissao: new Date() },
      { valor: "01234567890", dataEmissao: new Date() },
      { valor: "98765432102", dataEmissao: new Date() },
      { valor: "98765432104", dataEmissao: new Date() },
      { valor: "98765432103", dataEmissao: new Date() },
    ]
    listaNomes.map(( clientes, index ) => {
      const numeroAleatorio = Math.floor(Math.random() * 10);
      let cpf = new CPF(cpfs[index].valor, cpfs[index].dataEmissao)
      let cliente = new Cliente(clientes, "",  cpf)
      let newPet = new Pet(listaNomePets[index].nome,listaNomePets[index].raca, listaNomePets[index].genero, listaNomePets[index].tipo)
      cliente.getPets.push(newPet)
      for(let x = 0; x < numeroAleatorio; x++){
        cliente.getProdutosConsumidos.push({ nome: petShopItens[x], preco: preco1[x]  })
        cliente.getServicosConsumidos.push({ nome: petShopServicos[x], preco: preco2[x]  })
      }
      this.clientes.push(cliente)
    })
  }
}
