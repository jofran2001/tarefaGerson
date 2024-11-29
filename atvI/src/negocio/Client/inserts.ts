import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";

function insertRG(entrada: Entrada): RG {
  let valor = entrada.receberTexto(`Por favor informe o número do RG: `);
  let data = entrada.receberTexto(
    `Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `
  );
  let partesData = data.split("/");
  let ano = new Number(partesData[2].valueOf()).valueOf();
  let mes = new Number(partesData[1].valueOf()).valueOf();
  let dia = new Number(partesData[0].valueOf()).valueOf();
  let dataEmissao = new Date(ano, mes, dia);
  let rg = new RG(valor, dataEmissao);
  return rg;
}

function insertTelefone(entrada: Entrada): Telefone {
  let tell = entrada.receberTexto(
    `Por favor digite o numero do telefone no padrão DDD NUMERO:`
  );
  let partesTell = tell.split(" ");
  let ddd = new String(partesTell[0].valueOf()).valueOf();
  let numero = new String(partesTell[1].valueOf()).valueOf();
  let telefone = new Telefone(ddd, numero);
  return telefone;
}

function insertPet(entrada: Entrada): Pet {
  let petNome = entrada.receberTexto("Digite o nome do pet: ");
  let petRaca = entrada.receberTexto("Digite a raça do pet: ");
  let petTipo = entrada.receberTexto("Digite o tipo do pet: ");
  let petGene = entrada.receberTexto("Qual o Genero do pet: ");
  let pet = new Pet(petNome, petRaca, petTipo, petGene);
  return pet;
}

function insertProduto(lista: string, produtos: Produto[], cliente: Cliente, entrada: Entrada) {
  let newLista = lista.split(", ");
  newLista.forEach((item) => {
    let achar = produtos.find((alvo) => alvo.nome === item);
    if(achar !== undefined){
        cliente.getProdutosConsumidos.push(achar)
    }else{
        let preco = entrada.receberNumero("Digite o preço do objeto: R$")
        let newProd = new Produto(item, preco)
        produtos.push(newProd)
        cliente.getProdutosConsumidos.push(newProd)
    }
  });
}
function insertServico(lista: string, servicos: Servico[], cliente: Cliente, entrada: Entrada) {
  let newLista = lista.split(", ");
  newLista.forEach((item) => {
    let achar = servicos.find((alvo) => alvo.nome === item);
    if(achar !== undefined){
        cliente.getProdutosConsumidos.push(achar)
    }else{
        let preco = entrada.receberNumero("Digite o preço do serviço: R$")
        let newProd = new Servico(item, preco)
        servicos.push(newProd)
        cliente.getProdutosConsumidos.push(newProd)
    }
  });
}

export {insertRG, insertTelefone, insertPet, insertProduto, insertServico};
