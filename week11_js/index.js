const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener('click', addItem);

function addItem() {
    //e.preventDefault();
    const newItem = document.createElement("li");
    newItem.textContent = input.value;
    list.append(newItem);
    input.value = "";
    newItem.addEventListener('click', function(){
        newItem.classList.toggle('strikethrough');
    })
}




