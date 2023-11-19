var list = ["Default"];

console.log(list);

function save() {
    item = document.getElementById('inputText').value;
    list.push(item);
    updateList(item);
    inputText.value = "";
}

function updateList(item) {
    const toDoTable = document.getElementById('toDoTable');

       const tr =  document.createElement("tr");

       const tdCheckbox =  document.createElement("td");
       tdCheckbox.className = "border";

       const checkBox =  document.createElement("input");
       checkBox.type = "checkbox";


       
       const tdLabel =  document.createElement("td");
       tdLabel.className = "border";
       const label =  document.createElement("label");
       label.textContent = item;

       const tdButton =  document.createElement("td");
       tdButton.className = "border";
       const button =  document.createElement("input");
       button.type = "image";
       button.src = "images/trash.png";
       button.title = "Excluir"
       button.className = "removeBtn";

       tdCheckbox.appendChild(checkBox); 
       tdLabel.appendChild(label);
       tdButton.appendChild(button);
    
       tr.appendChild(tdCheckbox); 
       tr.appendChild(tdLabel); 
       tr.appendChild(tdButton); 
       toDoTable.appendChild(tr);

}

const retorno = list.map( (item) => {

    const  liElement = document.createElement("li");
    liElement.innerHTML = `
        <input type="button">
        <label> ${item} </label>
        <button> Excluir </button>
    `;
    list.appendChild(liElement);
    return liElement;
});

console.log({list, retorno});


//https://developer.mozilla.org/en-US/docs/Web/Events
/*
pElement.onclick = mostraOlaDev;
inputElement.onchange = mostraEvento;



var pElementId = document.getElementById('pElementId');
var inputElementId = document.getElementById('inputElementId');

pElementId.addEventListener('click', mostraOlaDev());
inputElementId.onchange = mostraEvento();

*/



/*
document.getElementById("pElement");
document.getElementsByClassName("p");
document.getElementsByTagName("tagName");

Retorna vetores
document.querySelector("seletorCSS");
document.querySelectorAll("seletorCSS");

onclick=""
onchange=""
onmouseover=""
onmouseout=""
onkeydown=""
onkeypress=""
onkeyup=""
*/