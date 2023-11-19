const taskInput = document.getElementById("taskInput");
let tasks = ["Estudar HTML e CSS", "Estudar Javascript", "Fazer Exercicios"];

function add() {
  let task = taskInput.value;
  console.log("Add: "+task);

  tasks.push(task);
  
  var index = tasks.indexOf(task);
  console.log("index: "+index);

  if(task== ""){
    alert("Preencha o campo:");
    return;
  }

  update();
}

function remove(){
  var task = tasks.find(task);
  console.log("index: "+index);

  tasks = tasks.splice(index, 1);
  update();
}

function clear() {
  document.getElementById("taskInput").value = "";
}

function update(){
  tbody = document.getElementById("tbody");
  tr = document.createElement("tr");
  tasks.forEach((t) => 
  tr.innerHTML = 
    ` 
        <td class="border"><input type="checkbox" class="checkbox" id="check1" name="check4" value="check" /></td>
        <td class="border"><label class="labelCheck" id="check4Label" for="check4Label">${t}</label></td>
        <td><input type="image" class="removeBtn" id="remove4Btn" src="images/trash.png" title="Excluir" alt="Submit"></td>
    `
  );
  tbody.appendChild(tr);

  console.log("list: " + tasks);
  clear();
}

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function() {
  add();
});

const removeBtn = document.getElementsByClassName("removeBtn");
addBtn.addEventListener("click", function() {
  remove();
});

//var primeiro = frutas.shift(); // remove Maçã do início
//var ultimo = frutas.pop(); // remove Laranja (do final)
//var adicionar = frutas.unshift("Morango"); // adiciona ao início


const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");

check1.addEventListener("click  ", function() {
  if (check1.checked) {
    document.getElementById("check1Label").style.textDecoration = "line-through";
  }else {
    document.getElementById("check1Label").style.textDecoration = "none";
  }
});

check2.addEventListener("click", function() {
  if (check2.checked) {
    document.getElementById("check2Label").style.textDecoration = "line-through";
  }else {
    document.getElementById("check2Label").style.textDecoration = "none";
  }
});

check3.addEventListener("click", function() {
  if (check3.checked) {
    document.getElementById("check3Label").style.textDecoration = "line-through";
  }else {
    document.getElementById("check3Label").style.textDecoration = "none";
  }
});