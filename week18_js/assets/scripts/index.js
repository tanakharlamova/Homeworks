
const addTaskBtn = document.getElementById("addTaskBtn");
const clearAll = document.getElementById("clearAll");
const userInput = document.getElementById("userInput");
const taskList = document.getElementById("taskList");
let taskArray = [];
addTaskBtn.addEventListener("click", addTask);
clearAll.addEventListener("click", clearTasks);
clearAll.disabled = true;
document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();
    let taskArray = JSON.parse(window.localStorage.getItem("taskArray"));
    
    if (taskArray.length === 0) {
        document.getElementById("noTasks").classList.remove("none");
        
    } else {
        for (let item of taskArray) {
            document.getElementById("taskList").innerHTML += `<input class="checkbox" type="checkbox"><span>${item}<span></span><br>`;
        }
        clearAll.disabled = false;
        return taskArray;
    }
})

function addTask() {
    let taskArray = JSON.parse(window.localStorage.getItem("taskArray"));
    if (userInput.value === '') {
        alert("Please add a task!")
    } 
    else {
        
        document.getElementById("noTasks").classList.add("none");
            taskArray.push(userInput.value);
            taskList.innerHTML += `<input class="checkbox" type="checkbox"><span>${userInput.value}</span><br>`;
            userInput.value = '';
       
            window.localStorage.setItem("taskArray", JSON.stringify(taskArray));
            console.log(taskArray);
            clearAll.disabled = false;
            return taskArray;
        }
}

userInput.addEventListener("keyup", (event)=>{
    if(event.keyCode == 13){
        this.addTask();
    }
});


function clearTasks(){
    window.localStorage.setItem("taskArray", JSON.stringify([]));
    taskList.innerHTML = '';
    document.getElementById("noTasks").classList.remove("none");
    clearAll.disabled = true;
    console.log(taskArray)
}

