const codigo = document.getElementById("codigo");
const quantidade = document.getElementById("quantidade");
const pedidoBtn = document.getElementById("pedidoBtn");
const total = document.getElementById("total");

function calcular() {

  const codigoFormat = codigo.value;
  const quantidadeFormat = Number(quantidade.value);
  let preco = 0;
  let produto = "Produto inexistente";

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
      alert("Produto inexistente.");
      break;
  }
    const valor = preco * quantidadeFormat;
    const valorFormat = valor.toFixed(2);

    console.log("codigo:"+codigoFormat);
    console.log("quantidade:"+quantidadeFormat);
    console.log("produto:"+produto);
    console.log("valor:"+valorFormat);
    console.log("preco:"+preco);

   alert(quantidadeFormat + " " + produto + " custam R$ " + valorFormat);
   
}
pedidoBtn.addEventListener("click", calcular);
