const taskInput = document.getElementById("taskInput");
let tasks = [];

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
  let task = taskInput.value;
  console.log("Remove: "+task);

  var index = tasks.indexOf(task);
  console.log("index: "+index);

  tasks = tasks.splice(index, 1);
  update();
}

function clear() {
  document.getElementById("taskInput").value = "";
}

function update(){
  let task = taskInput.value;
/*
  tasks.forEach((t) => 
    taskList.innerHTML = 
    `
    <input type="checkbox" id="check" name="check" value="check"/>
    <label for="checkLabel">${task}</label>
    <button id="removeBtn">x</button>
    `
  );
*/
  console.log("list: " + tasks);
  clear();
}

//var primeiro = frutas.shift(); // remove Maçã do início
//var ultimo = frutas.pop(); // remove Laranja (do final)
//var adicionar = frutas.unshift("Morango"); // adiciona ao início

addBtn.addEventListener("click", add);
//removeBtn.addEventListener("click", remove);

const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");

check1.addEventListener("change", function() {
  if (check1.checked) {
    document.getElementById("check1Label").style.textDecoration = "line-through";
  }else {
    document.getElementById("check1Label").style.textDecoration = "none";
  }
});

check2.addEventListener("change", function() {
  if (check2.checked) {
    document.getElementById("check2Label").style.textDecoration = "line-through";
  }else {
    document.getElementById("check2Label").style.textDecoration = "none";
  }
});

check3.addEventListener("change", function() {
  if (check3.checked) {
    document.getElementById("check3Label").style.textDecoration = "line-through";
  }else {
    document.getElementById("check3Label").style.textDecoration = "none";
  }
});
