const itemElement = document.getElementById("item_input");
const addButtonElement = document.getElementById("add_button");
const itemsElement = document.getElementById("items_element");
const totalItems = document.getElementById("total_items");

reloadPage();

function createElement(item) {
  const itemElement = document.createElement("li");
  const check = item.finished ? "checked" : "";

  itemElement.innerHTML = `
    <input type="checkbox" ${check} />
    <span>${item.name}</span>
    <button>🗑️</button>
  `;
  itemElement.className = "item";

  const removeButton = itemElement.querySelector("button");
  removeButton.addEventListener("click", () => {
    removeItem(item);
  });
  return itemElement;
}

function removeItem(itemToRemove) {
  console.log("remove item...");
  let items = JSON.parse(localStorage.getItem("list"));

  const index = items.findIndex(item => item.name === itemToRemove.name);

  if (index !== -1) {
    items.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(items));
    reloadPage();
  }
}

addButtonElement.addEventListener("click", save);

function save(){
  console.log("save item...");
  let items = JSON.parse(localStorage.getItem("list"));

  if (itemElement.value) {
    const novaTarefa = {
      name: itemElement.value,
      finished: false,
    };
    items.push(novaTarefa);
    itemElement.value = "";

    localStorage.setItem("list", JSON.stringify(items));
    reloadPage();
  }
}

function reloadPage() {
  let items = JSON.parse(localStorage.getItem("list"));

  itemsElement.innerHTML = "";

  items.forEach((item) => {
    const newElement = createElement(item);
    itemsElement.appendChild(newElement);
  });

  totalItems.innerHTML = items.length;
}