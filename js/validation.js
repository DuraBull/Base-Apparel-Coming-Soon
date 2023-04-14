const submit = document.getElementById("submit");
const error = document.querySelector(".error");
const validation = document.querySelector(".validation");
const email = document.getElementById("email");

let emailText = email.value;

submit.addEventListener("click", validateEmail);

function validateEmail() {
    if (email.value.indexOf("@") == -1) {
        error.classList.remove("inv");
        validation.classList.remove("inv");
    }
}


