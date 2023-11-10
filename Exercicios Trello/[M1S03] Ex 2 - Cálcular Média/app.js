let nota1 = window.prompt("Qual a nota da primeira avaliação?");
console.log("PNota da primeira avaliação:  " + nota1);
nota1 = parseFloat(nota1);

let nota2 = window.prompt("Qual a nota da segunda avaliação");
console.log("Nota da segunda avaliação: " + nota2);
nota2 = parseFloat(nota2);

let nota3 = window.prompt("Qual a nota da terceira avaliação");
console.log("Nota da terceira avaliação: " + nota3);
nota3 = parseFloat(nota3);

calcular();

function calcular() {;
    media = (nota1 + nota2 + nota3) / 3
    console.log("Média final: " + media);
    window.alert("Média final: " + media);
}