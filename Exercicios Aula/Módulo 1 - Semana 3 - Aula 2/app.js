//Operações: Rest, Spread, Destructuring? [pesquisar🔍]


let outros = 3 ; //variavel global
const constante = 2; // variavel global
var variavel = 1; // nao mais usado, escopo função variavel local


function soma (x,y) {
    if (x == null || y == null){
        return "Os campos devem ser preenchidos!"
    }

    let result = x + y;
    return result;
}

let calc = soma(1,3);
console.log(calc);

console.log(soma(10,3));

//console.log(soma); printa a function

let result = function subtrai (x,y) {
    if (x == null || y == null){
        return "Os campos devem ser preenchidos!"
    }

    let result = x - y;
    return result;
}
console.log(result(1));
console.log(result(4,1));


console.log(typeof soma);
console.log(typeof result); 
console.log(typeof calc); 


const elemento = document.getElementById("titulo");
console.log(elemento); 
console.log(titulo.innerHTML); 

//console.log({titulo}); 
//console.log(titulo.outerHTML); 

//console.log(elemento);



function alteraCor(){
    const alteraCorBtn = document.getElementById("alteraCorBtn");

    elemento.innerHTML = "Alterado";
    console.log(elemento.innerHTML); 
    
    elemento.style.backgroundColor = "red";
}

function log(){
    const logBtn = document.getElementById("logBtn");
    console.log(logBtn.innerHTML)
//   titulo.innerHTML = botao.value;
}

function alerta(){
    alert("alerta");
}

const onClickBtn = document.getElementById("onClickBtn");
onClickBtn.onclick = alerta;

const otherBtn = document.getElementById("otherBtn");
otherBtn.addEventListener("click", alerta);