//Verificar se a funcionalidade do html é compativel com o navegador
//https://caniuse.com/?search=async

const description1Element = document.getElementById("description");
const script1Element = document.getElementById("script1");

script1Element.addEventListener('click', update);

log();

function update() {
    description2Element.innerHTML = "Script 1";
    log();
}

function log() {
    const currentDate = new Date();
    console.log("Log script1! " + currentDate.toLocaleString('pt-BR'));
}
