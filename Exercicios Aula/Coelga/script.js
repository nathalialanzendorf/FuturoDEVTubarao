var button = document.getElementById("button");
button.addEventListener("mouseenter", mouseenter);//no html vai o on na função

function mouseenter() {
  cabecalho = document.querySelector("#cabecalho1");
  cabecalho.innerHTML = "M1 S06 A01"; 
}

var button1 = document.getElementById("button");
button1.addEventListener("mouseleave", mouseleave);//no html vai o on na função

function mouseleave() {
  alert("mouse saiu!"); 
}

var botaodesabilitar = document.querySelector("#caiFora");
botaodesabilitar.addEventListener("click", click);

function click() {
  button1.removeEventListener("mouseleave", mouseleave);
}

var campoTexto = document.querySelector("#beforeall");
console.log("Teste de campo");

var addbefore = document.querySelector("#before");
console.log("ateste");

addbefore.addEventListener("click", newclick);


function newclick() {
  console.log("clicou");
  let newput = document.createElement("input");
  newput.type = "text";
  newput.placeholder = "teste";
  divForm.insertBefore(newput, campoTexto);

  createButtonDelete(newput);
}

var createTexto = document.querySelector("#create");
console.log("Teste create");

var createbefore = document.querySelector("#insert");
console.log("ateste");
createbefore.addEventListener("click", createclick);

function createclick() {
  console.log("clicouBefore");
  let newput = document.createElement("input");
  newput.type = "text";
  newput.placeholder = "Digite seu Sobrenome:";
  divForm.insertBefore(newput, createTexto);

  createButtonDelete(newput);
}

function createButtonDelete(inputTextToDelete) {
  let newPutButton = document.createElement("button");
  inputTextToDelete.insertchild(newPutButton,"afterend");
  newPutButton.innerHTML = "🗑️";

  newPutButton.addEventListener("click", () => {
    funClean(inputTextToDelete,newPutButton);
  });
}

var botaoclean = document.querySelector("#clean")
console.log("botaoclean");
botaoclean.addEventListener("click", funClean);

function funClean(inputTextToDelete,newPutButton) {
  console.log("clicouclean");
  inputTextToDelete.removeChild(newPutButton);
  divForm.removeChild(inputTextToDelete);
} 