const codigo = document.getElementById("codigo");
const quantidade = document.getElementById("quantidade");
const pedidoBtn = document.getElementById("pedidoBtn");
const total = document.getElementById("total");

function calcular() {

  const codigoFormat = codigo.value;
  const quantidadeFormat = Number(quantidade.value);
  let preco = 0;
  let produto = "Desconhecido";

  switch (codigoFormat) {
    case "1123":
      produto = "Hambúrguer";
      preco = 12;
      break;

    case "3423":
      produto = "Sanduíche de pernil";
      preco = 9;
      break;

    case "4521":
      produto = "Bauru";
      preco = 15;
      break;

    case "5322":
      produto = "Sanduíche de mortadela";
      preco = 34.99;
      break;

    default:
  }
    const valor = preco * quantidadeFormat;

    console.log("codigo:"+codigoFormat);
    console.log("quantidade:"+quantidadeFormat);
    console.log("produto:"+produto);
    console.log("valor:"+valor);
    console.log("preco:"+preco);
    console.log("total:"+total);


    total.innerHTML = `${quantidadeFormat} ${produto} custam R$ ${valor.toFixed(2)}`;

}

pedidoBtn.addEventListener("click", calcular);
