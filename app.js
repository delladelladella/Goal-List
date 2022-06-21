//Select button, input, and list elements in HTML.
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

//Creating fuction to extract value from input then create a list, then add the value of input to list.
function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

//Creating a listen for the button.
buttonEl.addEventListener("click", addGoal);
