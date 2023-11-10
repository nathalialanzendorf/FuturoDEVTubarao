
function enviar(){ 

    var nome = document.getElementById("nome").value;
    console.log("Nome:" + nome);

    var sobrenome = document.getElementById("sobrenome").value;
    console.log("Sobrenome:" + sobrenome);  

    var idade = document.getElementById("idade").value;
    console.log("Idade:" + idade); 

    var nomeCompleto = nome + " " + sobrenome;

    if (nome != "" || sobrenome != ""  || idade != "" ){
        if (idade >= 18 && idade < 60){
            document.getElementById("mensagem_1").innerHTML  = "O usuário <b>" + nomeCompleto + "</b> é <b>adulto.</b>";
        } else if (idade >= 60){
                document.getElementById("mensagem_1").innerHTML  = "O usuário <b>" + nomeCompleto + "</b> é <b>idoso.</b>";
        } else {
            document.getElementById("mensagem_1").innerHTML  = "O usuário <b>" + nomeCompleto + "</b> é <b>menor de idade.</b>";
        }
    
        document.getElementById("mensagem_2").innerHTML = "O usuário <b>" + nomeCompleto + "</b> tem <b>" + idade + "</b> anos.";
    
    } else {
        alert("Favor preencha todos os campos!");
    }
}



//var nome = prompt("Insira seu nome: ")
//var sobrenome = prompt("Insira seu sobrenome: ")
//var idade = prompt("Insira sua idade: ")
//window.document.getElementById("theValue1").innerText = "value div";
//window.document.getElementById("theValue2").value = "value input";
