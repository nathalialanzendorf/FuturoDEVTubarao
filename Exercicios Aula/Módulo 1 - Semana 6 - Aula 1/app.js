const primaryLabelElement = document.getElementById("primaryLabel");
const secondLabelElement = document.getElementById("secondLabel");
const lastLabelElement = document.getElementById("lastLabel");

const primaryButtonElement = document.getElementById("primaryButton");
const secondButtonElement = document.getElementById("secondButton");
const lastButtonElement = document.getElementById("LastButton");

//primaryButtonElement.addEventListener('click', changeColor);
function changeColor() {
    primaryLabelElement.style.color = "red";
    primaryLabelElement.innerHTML = "Alerta pelo HTML!"
}

secondButtonElement.addEventListener('click', openAlert);
function openAlert() {
    alert("Alerta!");
    
    secondLabelElement.style.background = "red";
    secondLabelElement.innerHTML = "Alerta pelo JS!"
}

lastButtonElement.addEventListener('click', createNewLabel);
function createNewLabel() {
    const elemento = document.createElement("p");
    elemento.innerHTML = "Novo!";
  //  document.body.appendChild(elemento);
    document.body.insertBefore(elemento, lastButtonElement);
}

// por "tag"
document.getElementsByTagName("p");

// por "id"
document.getElementById("idDeUmElemento");

//por "name"
document.getElementsByName("nomeDeElemento"); 

//por "class"
document.getElementsByClassName("classeDeElementos");

//por "selector"
document.querySelector("p#idDesseP");
document.querySelectorAll("p.classeDosPs");