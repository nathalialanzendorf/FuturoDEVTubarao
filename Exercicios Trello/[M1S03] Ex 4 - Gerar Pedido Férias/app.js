let nome = window.prompt("Qual o nome da pessoa?");
let dataInicio = window.prompt("Qual a data de início das férias?");
let dataTermino = window.prompt("Qual a data de término das férias?");

exibirSolicitacao();

function exibirSolicitacao() {
    document.getElementById("nome").innerHTML = nome;
    document.getElementById("nome2").innerHTML = nome;
    document.getElementById("dataInicio").innerHTML = dataInicio;
    document.getElementById("dataTermino").innerHTML = dataTermino;
}