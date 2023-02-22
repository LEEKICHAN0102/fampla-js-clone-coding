const roleBoxForm = document.querySelector("#role-box");
const roleBoxInput = document.querySelector("#role-box input");
const greeting = document.querySelector("#greeting");

function onSubmit(event) {
  event.preventDefault();
  roleBoxForm.removeAttribute("id");
  roleBoxForm.classList.add("hidden");
  const username = roleBoxInput.value;
  greeting.innerText = "안녕하세요 " + username + "!";
  greeting.classList.remove("hidden");
}

roleBoxForm.addEventListener("submit", onSubmit);
