let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let container = document.querySelector("#list");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	let delButton = document.createElement("button");
	delButton.innerHTML = "Delete";
	delButton.className = "delete";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(delButton);
	input.value = "";	
}


// Function to Delete item from list

function deleteListItems(event) {

	if(event.target.getAttribute("class") === "delete") {
		event.target.closest("LI").remove();
	}
}


// Toggle's class "done"

function toggleDone(event) {

	let closestElement = event.target.closest("LI");
	closestElement.classList.toggle("done");
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

container.addEventListener("click", toggleDone);

container.addEventListener("click", deleteListItems);

input.addEventListener("keypress", addListAfterKeypress);