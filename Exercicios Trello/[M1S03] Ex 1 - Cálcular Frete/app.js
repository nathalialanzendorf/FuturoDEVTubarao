let peso = window.prompt("Qual o peso (kg) da remessa?");
console.log("Peso (kg) da remessa: " + peso);

let distancia = window.prompt("Qual a distância (km) da remessa?");
console.log("Distância (km) da remessa: " + distancia);


let kg_km = 6;
let frete = 0;
calcular();

function calcular() {;
    frete = kg_km * peso * distancia
    console.log("Frete:" + frete);
    window.alert("Frete: " + frete);
}