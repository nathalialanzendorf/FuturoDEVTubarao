const findButtonElement = document.querySelector("#findButton");
const itemsElement = document.querySelector("#items");

const createButtonElement = document.querySelector("#createButton");
const nameInputElement = document.querySelector("#name");

findButtonElement.addEventListener("click", find);
createButtonElement.addEventListener("click", create);

function createElement(item) {
  const itemElement = document.createElement("li");

  itemElement.innerHTML = `
    <span>${item.title}</span>
    <button onclick="deleteItem(${item.id})">🗑️</button>
  `;
  return itemElement;
}

function criaListagem(items) {
  itemsElement.innerHTML = "";

  items.forEach((item) => {
    const newElement = createElement(item);
    itemsElement.appendChild(newElement);
  });
}

async function find() {
 // const request = fetch("https://swapi.dev/api/people");
  
  const request = fetch("http://localhost:3000/posts");

  try {
    console.log("Buscando...");
    const response = await request;
    const data = await response.json();
    console.log("Busca realizada com sucesso!");
    criaListagem(data);

    } catch (error) {
      console.log("Ocorreu um erro ao buscar...", error)
    }
}

async function create() {
  const item = {
    author: "Nathalia Lanzendorf",
    created_at: new Date(),
    title: nameInputElement.value,
  };
   
  const request = fetch("http://localhost:3000/posts", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(item),
   });
 
   try {
     console.log("Salvando...");
     const response = await request;
     const data = await response.json();
     console.log("Salvo com sucesso!");
     find();
 
     } catch (error) {
       console.log("Ocorreu um erro ao salvar...", error)
     }
 }

 async function deleteItem(itemId) {
  // const request = fetch("https://swapi.dev/api/people");
   
  const request = fetch("http://localhost:3000/posts/"+itemId, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
     }
   });
 
   try {
     console.log("Deletando...");
     const response = await request;
     const data = await response.json();
     console.log("Deletado com sucesso!");
     find();
 
     } catch (error) {
       console.log("Ocorreu um erro ao deletar...", error)
     }
 }