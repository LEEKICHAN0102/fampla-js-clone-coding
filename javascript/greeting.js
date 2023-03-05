const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");
const reset = document.getElementById("reset");

const Hidden_Class = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.removeAttribute("id");
  loginForm.classList.add(Hidden_Class);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(Hidden_Class);
}

function resetUser(savedUsername) {
  localStorage.removeItem(USERNAME_KEY, savedUsername);
  location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
reset.addEventListener("click", resetUser);

if (savedUsername === null) {
  loginForm.classList.remove(Hidden_Class);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
