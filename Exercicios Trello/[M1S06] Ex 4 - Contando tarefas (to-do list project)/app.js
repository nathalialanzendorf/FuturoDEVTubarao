const itemElement = document.getElementById("item_input");
const addButtonElement = document.getElementById("add_button");
const itemsElement = document.getElementById("items_element");
const totalItems = document.getElementById("total_items");

let items = [
  {
    name: "Lavar a roupa",
    finished: false,
  },
  {
    name: "Secar a roupa",
    finished: false,
  },
  {
    name: "Guardar a roupa",
    finished: false,
  },
];

function removeItem(itemRemove) {
  const newItems = items.filter((item) => {
    return item !== itemRemove;
  });
  items = newItems;
  reloadPage();
}

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

function reloadPage() {
    itemsElement.innerHTML = "";

  items.forEach((item) => {
    const newElement = createElement(item);
    itemsElement.appendChild(newElement);
  });

  totalItems.innerHTML = items.length;
}

reloadPage();

function addItems() {
  if (itemElement.value) {
    const novaTarefa = {
      name: itemElement.value,
      finished: false,
    };
    items.push(novaTarefa);
    itemElement.value = "";
    reloadPage();
  }
}

addButtonElement.addEventListener("click", addItems);


addButtonElement.addEventListener("click", addItems);
