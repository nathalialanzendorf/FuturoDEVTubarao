//Verificar se a funcionalidade do html é compativel com o navegador
//https://caniuse.com/?search=async

const description2Element = document.getElementById("description");
const script2Element = document.getElementById("script2");

script2Element.addEventListener('click', update);
log();

function update() {
    description2Element.innerHTML = "Script 2";
    log();
}

function log() {
    const currentDate = new Date();
    console.log("Log script2! " + currentDate.toLocaleString('pt-BR'));
}


