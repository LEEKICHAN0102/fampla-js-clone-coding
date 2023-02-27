const PORForm = document.getElementById("POR-form");
const PORList = document.getElementById("POR-list");
const PORInput = document.querySelector("#POR-form input");
const PORUsername = document.querySelector("#role-box input");

let planOrRequest = [];
const POR_KEY = "planOrRequest";

function savePOR() {
  localStorage.setItem(POR_KEY, JSON.stringify(planOrRequest));
}

function deletePOR(event) {
  const li = event.target.parentElement;
  li.remove();
  planOrRequest = planOrRequest.filter(
    (planOrRequest) => planOrRequest.id !== li.id
  );
  savePOR();
}

function paintPOR(newPOR) {
  const li = document.createElement("li");
  const user = document.createElement("span");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "💖";
  user.innerText = localStorage.getItem(USER_KEY) + `:`;
  li.appendChild(user);
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deletePOR);
  span.innerText = newPOR.text;
  PORList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newPOR = PORInput.value;
  PORInput.value = "";
  const newPORobj = {
    text: newPOR,
    id: Date.now(),
  };
  planOrRequest.push(newPORobj);
  paintPOR(newPORobj);
  savePOR();
}

PORForm.addEventListener("submit", handleToDoSubmit);
const savedPOR = localStorage.getItem(POR_KEY);

if (savedPOR !== null) {
  const parsedPOR = JSON.parse(savedPOR);
  planOrRequest = parsedPOR;
  parsedPOR.forEach(paintPOR);
}
