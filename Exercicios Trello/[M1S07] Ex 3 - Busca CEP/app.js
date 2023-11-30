const findButtonElement = document.querySelector("#findButton");
const cepElement = document.querySelector("#cepInput");
const itemsElement = document.querySelector("#items");

findButtonElement.addEventListener("click", find);

function createElement(item) {
  const itemElement = document.createElement("span");

  itemElement.innerHTML = `
    <span><strong>Rua:</strong> ${item.address}</span><br>
    <span><strong>CEP:</strong> ${item.code}</span><br>  
    <span><strong>Distrito:</strong> ${item.district}</span><br> 
    <span><strong>Cidade:</strong> ${item.city}</span><br>  
    <span><strong>Estado:</strong> ${item.state}</span><br> 
  `;
  return itemElement;
}

function criaListagem(item) {
  itemsElement.innerHTML = "";
  const newElement = createElement(item);
  itemsElement.appendChild(newElement);
}

async function find() {
  try {
    if (!cepElement.value) {
      alert("Informe um CEP!");
      return;
    }
    const response = await fetch("https://cdn.apicep.com/file/apicep/"+cepElement.value+".json");
    const data = await response.json();
    criaListagem(data);

    } catch (error) {
      console.log("Ocorreu um erro ao buscar...", {error})
    }
}