let salario = window.prompt("Qual o valor do salário bruto?");
salario = parseFloat(salario);

let ftgs = 0;
let ftgsAnual = 0;
calcular();

function calcular() {
    ftgs = salario * 0.08;
    ftgsAnual = ftgs * 12;
    window.alert("FGTS: " + ftgs + " FGTS Anual: "+ ftgsAnual);
}
