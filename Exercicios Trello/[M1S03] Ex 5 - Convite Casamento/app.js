let convidado = window.prompt("Qual o nome da pessoa convidada?");
let noivo = window.prompt("Qual o nome da primeira pessoa do casal?");
let noiva = window.prompt("Qual o nome da segunda pessoa do casal?");
let data = window.prompt("Qual a data do casamento?");   
let hora = window.prompt("Qual a hora do casamento?");   

exibirSolicitacao();

function exibirSolicitacao() {
    document.getElementById("convidado").innerHTML = convidado;
    document.getElementById("noivo").innerHTML = noivo;
    document.getElementById("noiva").innerHTML = noiva;
    document.getElementById("data").innerHTML = data;
    document.getElementById("hora").innerHTML = hora;
}