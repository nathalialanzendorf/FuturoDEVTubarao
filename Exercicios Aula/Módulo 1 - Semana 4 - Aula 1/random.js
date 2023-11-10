//var random = Math.random() * 10;
var random = Math.floor(Math.random() * 10); // remove as casas decimais

var number = prompt("Insira um número de 0 a 9:")

random = parseFloat(random);
number = parseFloat(number);

console.log(random);
console.log(number);

//if(random != number){   

if(random === number){ 
    alert("Acertou!");
}else {
    alert("Incorreto, tente novamente!");
}