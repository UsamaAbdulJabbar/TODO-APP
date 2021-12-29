var todoText = document.getElementById("addtodo");
var Ulist = document.getElementById("ul");

//Add Todo Button
function addTodo() {
  var todoInp = todoText.value;
  var todoLi = document.createElement("li");
  var text = document.createTextNode(todoInp);
  todoLi.appendChild(text);
  Ulist.appendChild(todoLi);

  var EditBtn = document.createElement("button");
  var EditTxt = document.createTextNode("EDIT");
  EditBtn.setAttribute("class", "EditBtn");
  EditBtn.setAttribute("onclick", "EditTodo(this)");
  EditBtn.appendChild(EditTxt);
  todoLi.appendChild(EditBtn);

  var DelBtn = document.createElement("button");
  var DelTxt = document.createTextNode("DELETE");
  DelBtn.setAttribute("class", "del1");
  DelBtn.setAttribute("onclick", "deleteTodo(this)");
  DelBtn.appendChild(DelTxt);
  todoLi.appendChild(DelBtn);

  todoText.value = "";
}
function deleteTodo(element) {
  console.log(element);
  element.parentNode.remove();
}

function EditTodo(element) {
  element.parentNode.firstChild.nodeValue = prompt("");
}

function DelAll() {
  Ulist.innerHTML = "";
}

//Delete Button

// var DelBtn = document.createElement("button");
// var DelTxt = document.createTextNode("DELETE");
// DelBtn.setAttribute("class", "button");
// DelBtn.setAttribute("onclick", "deleteTodo(this)");
// DelBtn.appendChild(DelTxt);
// todoLi.appendChild(DelBtn);
