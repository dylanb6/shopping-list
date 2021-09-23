/*!
* Start Bootstrap - Bare v5.0.3 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/

var enterBtn = document.getElementById("enterBtn");
var deleteBtn = document.getElementsByClassName("delete");
var input = document.getElementById("itemInput");
var ul = document.getElementsByClassName("shopList")[0];
var li = document.querySelectorAll("li");

function toggleDone(event) {
    var liParent = event.target.parentElement;
    liParent.classList.toggle("done");
}

// add event listener to existing Delete buttons
for(var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", removeParent, false);
}

function inputLength() {
    return input.value.length;
}

// removes li when delete button in it is clicked
function removeParent(event){
    event.target.removeEventListener("click", removeParent, false);
    event.target.parentNode.remove();
}

function createListElement() {    
    var newCheckBtn = document.createElement("button");
    newCheckBtn.className = "btn btn-primary float-start";
    newCheckBtn.innerText = "Check";
    newCheckBtn.onclick = toggleDone;

    var newDeleteBtn = document.createElement("button");
    newDeleteBtn.className = "delete btn btn-secondary float-end";
    newDeleteBtn.innerText = "Delete";
    newDeleteBtn.onclick = removeParent;

    var newLi = document.createElement("li");
    newLi.className = "list-group-item";    
    newLi.appendChild(newCheckBtn);
    newLi.appendChild(document.createTextNode(input.value));
    newLi.appendChild(newDeleteBtn);

    ul.appendChild(newLi);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

enterBtn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

/*
Event listener syntax : 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
You didn't see the function being called like this as you may have expected: 

button.addEventListener("click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeypress(event));


This is something called a callback function. 
When that line of javascript runs, we don't want the addListAfterClick function to run because we are just 
adding the event listener now to wait for click or keypress. 
We want to let it know though that we want this action to happen when a click happens. So the function now 
automatically gets run (gets added the ()) every time the click happens. 
So we are passing a reference to the function without running it.
 */