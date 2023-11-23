const primaryLabelElement = document.getElementById("primaryLabel");
const primaryButtonElement = document.querySelector("#primaryButton");
const secondLabelElement = document.getElementById("secondLabel");
const secondButtonElement = document.querySelector("#secondButton");
let count = 0;
//primaryButtonElement.addEventListener('click', changeColor);
function timeout() {
    console.log("change color");
    setTimeout(changeColor, 3000);
}

function changeColor() {
    count++;
    primaryLabelElement.style.color = "red";
    primaryLabelElement.innerHTML = 'Alerta pelo HTML! {$count}'
}

secondButtonElement.addEventListener('click', openAlert);
function openAlert() {
    setTimeout(() => {
        alert("Alerta timeout!");
    }, 3000);
    
    secondLabelElement.style.background = "red";
    secondLabelElement.innerHTML = "Alerta pelo JS!"
}

const thirdLabelElement = document.getElementById("thirdLabel");
const thirdButtonElement = document.querySelector("#thirdButton");

thirdButtonElement.addEventListener('click', removeLabel);

function removeLabel() {
    //document.getElementById("thirdDiv").removeChild(thirdLabelElement);
   // thirdLabelElement.remove();
   thirdButtonElement.parentNode.removeChild(thirdLabelElement);
   // thirdLabelElement.style.display = "none";
   // thirdLabelElement.style.visibility = "hidden";
   
}
//document.body.onload = addElement;
const lastButtonElement = document.getElementById("lastButton");
lastButtonElement.addEventListener('click', addElement);

function addElement(){
    const newLabel = document.createElement("label");
    newLabel.id = "newLabel";
    newLabel.innerHTML = "Novo!";
   // document.body.appendChild(newLabel);
    document.getElementById("lastDiv").insertBefore(newLabel, lastButtonElement);
}

const startTimeButtonElement = document.getElementById("startTimeButton");
const pauseTimeButtonElement = document.getElementById("pauseTimeButton");
const time = document.getElementById("time");

startTimeButtonElement.addEventListener('click', startTime);
pauseTimeButtonElement.addEventListener('click', pauseTime);
let timeInterval;


function startTime() {
    timeInterval = setInterval(updateTime, 1000);

}

function updateTime() { 
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
}


function pauseTime() { 
    clearTimeout(timeInterval);
}

const nameInputElement = document.getElementById("nameInput");
const saveButtonElement = document.getElementById("saveButton");
const showButtonElement = document.getElementById("showButton");
const removeButtonElement = document.getElementById("removeButton");

saveButtonElement.addEventListener('click', save);
showButtonElement.addEventListener('click', show);
removeButtonElement.addEventListener('click', remove);

function save(){
    localStorage.setItem("nome", nameInputElement.value);
}

function show(){
    console.log("Nome: " + localStorage.getItem("nome"));
}

function remove(){
    localStorage.removeItem("nome");
}


const nameSessionInputElement = document.getElementById("nameSessionInput");
const saveSessionButtonElement = document.getElementById("saveSessionButton");
const showSessionButtonElement = document.getElementById("showSessionButton");
const removeSessionButtonElement = document.getElementById("removeSessionButton");

saveSessionButtonElement.addEventListener('click', saveSession);
showSessionButtonElement.addEventListener('click', showSession);
removeSessionButtonElement.addEventListener('click', removeSession);

function saveSession(){
    sessionStorage.setItem("nome", nameInputElement.value);
    //CacheStorage.setItem("nome", nameInputElement.value);
}

function showSession(){
    console.log("Nome: " + sessionStorage.getItem("nome"));
}

function removeSession(){
    sessionStorage.removeItem("nome");
}

const nameListInputElement = document.getElementById("nameListInput");
const saveListButtonElement = document.getElementById("saveListButton");
const removeListButtonElement = document.getElementById("removeListButton");

saveListButtonElement.addEventListener('click', saveList);
removeListButtonElement.addEventListener('click', removeList);

let list = [];
function saveList(){
    list.push(nameListInputElement.value);

    localStorage.setItem("list", JSON.stringify(list));
    showList();
}

function showList(){
    console.log("List: " + localStorage.getItem("list"));
    nameListInputElement.value = "";
}

function removeList(){
    removeLastItemFromList();
}

function removeLastItemFromList() {
    let list = JSON.parse(localStorage.getItem("list"));
    if (list && list.length > 0) {
        list.pop();
        localStorage.setItem("list", JSON.stringify(list));
        showList();
    }
}


