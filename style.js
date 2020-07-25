
var list = document.getElementById("list");
function add(){
    var input = document.getElementById("todo-list");
    var li = document.createElement("li");
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);

    var deleteBtn = document.createElement("button");
    var btnText = document.createTextNode("X");
    deleteBtn.setAttribute("class","delButton");
    deleteBtn.setAttribute("onclick","deleteItem(this)");

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class","editButton");
    editBtn.setAttribute("onclick","editTxt(this)");

    editBtn.appendChild(editText);
    deleteBtn.appendChild(btnText);
    li.appendChild(deleteBtn);

   
    li.appendChild(editBtn);
    
    
    list.appendChild(li);
    input.value = " ";



}
function deleteItem(button){
    button.parentNode.remove()
}

function Delete(){
    list.innerHTML = "";
}

function editTxt( button ){
    var val = prompt("Edit your To-Do:",button.parentNode.firstChild.nodeValue);
    button.parentNode.firstChild.nodeValue = val;

}

