const PORForm = document.getElementById("POR-form");
const PORList = document.getElementById("POR-list");
const PORInput = document.querySelector("#POR-form input");
const PORUsername = document.querySelector("#role-box input");

let planOrRequest = [];

function deletePOS(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintPOS(newPOS) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "💖";
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deletePOS);
  span.innerText = newPOS;
  PORList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newPOS = PORInput.value;
  PORInput.value = "";
  paintPOS(newPOS);
}

PORForm.addEventListener("submit", handleToDoSubmit);
