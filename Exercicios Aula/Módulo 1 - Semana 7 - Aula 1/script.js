const findButtonElement = document.querySelector("#findButton");
const itemsElement = document.querySelector("#items");

findButtonElement.addEventListener("click", getList);

function createElement(item) {
  console.log("Criando elemento para uma pessoa...");
  const itemElement = document.createElement("li");

  itemElement.innerHTML = `
    <span>${item.name}</span>
  `;
  return itemElement;
}

function criaListagem(list) {
  console.log("Criando a lista para as pessoas retornadas...");
  list.forEach((item) => {
    const newElement = createElement(item);
    itemsElement.appendChild(newElement);
  });
}

/*


function mockData() { 
  const data = {
    "results": [
      {
        "name": "Luke Skywalker"
      }, 
      {
        "name": "C-3PO"
      }
  ]};

  return data;
}

async function getList() {
  const request = new Promise((resolve, reject) => {
    resolve(mockData());
    //reject(mockData());

  }).then((response) => {
    console.log("Buscando pessoas...");
    const data = response;
    criaListagem(data.results);

  }).catch((error) => { 
    console.log("Ocorreu um erro ao buscar pessoas...", error)

  }).finally(() => {
    console.log("Terminou a promisse para buscar pessoas...");
  }); 
}

/*


async function getList() {
  const request = fetch("https://swapi.dev/api/people");
  
  try {
    console.log("Buscando pessoas...");
    const response = await request;
    const data = await response.json();
    criaListagem(data.results);

    } catch (error) {
      console.log("Ocorreu um erro ao buscar pessoas...", error)
    } finally {
      console.log("Terminou a promisse para buscar pessoas...");
    }
}
*/