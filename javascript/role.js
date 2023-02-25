const roleBoxForm = document.querySelector("#role-box");
const roleBoxInput = document.querySelector("#role-box input");
const greeting = document.querySelector("#greeting");
const reset = document.querySelector("#reset");

const HIDDEN_KEY = "hidden";
const USER_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  roleBoxForm.classList.add(HIDDEN_KEY);
  reset.className = "";
  const username = roleBoxInput.value;
  localStorage.setItem(USER_KEY, username);
  appearGreeting(username);
}

function appearGreeting(savedUsername) {
  greeting.innerText = `안녕하세요 ${savedUsername} !`;
  greeting.classList.remove(HIDDEN_KEY);
}

function resetUser() {
  localStorage.clear();
  location.reload();
}

roleBoxForm.addEventListener("submit", onLoginSubmit);
reset.addEventListener("click", resetUser);
const savedUsername = localStorage.getItem(USER_KEY);

if (savedUsername === null) {
  roleBoxForm.classList.remove(HIDDEN_KEY);
} else {
  appearGreeting(savedUsername);
}
