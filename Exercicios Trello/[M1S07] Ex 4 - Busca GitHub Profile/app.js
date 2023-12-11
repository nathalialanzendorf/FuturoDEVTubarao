const findButtonElement = document.querySelector("#findButton");
const usernameElement = document.querySelector("#usernameInput");
const profileElement = document.querySelector("#profileDetail");

findButtonElement.addEventListener("click", find);

function createElement(item) {
  const itemElement = document.createElement("span");

  itemElement.innerHTML = `
    <span><strong>Perfil:</strong> ${item.login}</span></br>
    <span><strong>Repositórios públicos:</strong> ${item.public_repos}</span></br> 
    <img src="${item.avatar_url}" alt="Profile Image" />
  `;
  return itemElement;
}

function errorException(message) {
  profileElement.innerHTML = "";

  const itemElement = document.createElement("span");
  itemElement.innerHTML = `</br>${message}!`;
  profileElement.appendChild(itemElement);

  throw new Error(message);
}

function criaListagem(item) {
  profileElement.innerHTML = "";
  const newElement = createElement(item);
  profileElement.appendChild(newElement);
}

async function find() {
  try {
    if (!usernameElement.value) {
      alert("Informe um usuário!");
      return;
    }
    const response = await fetch("https://api.github.com/users/" + usernameElement.value);

    if (response.status === 404) {
      errorException("Usuário não encontrado!");
    }

    const data = await response.json();
    criaListagem(data);

  } catch (ex) {
    console.error("Ocorreu um erro ao buscar o usuário...", {ex});
  }
}

