const submit = document.getElementById("submit");
const error = document.querySelector(".error");
const validation = document.querySelector(".validation");
const email = document.getElementById("email");

let emailValid = false;

submit.addEventListener("click", validateEmail);
email.addEventListener("click", clearInput);
email.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        validateEmail();
    }
});

function validateEmail() {
    if (checkAt() && (emailLength() >= 2) && validDomain()) {
        emailValid = true;
    }
    else {
        emailValid = false;
    }

    if (emailValid) {
        removeError();
    }
    else {
        addError();
    }
}

function clearInput() {

    if (emailValid == false) {
        email.value = '';
    }
}

function addError() {
    error.classList.remove("inv");
    validation.classList.remove("inv");
}

function removeError() {
    error.classList.add("inv");
    validation.classList.add("inv");
}

function checkAt() {
    if (email.value.indexOf("@") != -1) {
        return true;
    }
    else {
        return false;
    }
}

function emailLength() {
    var emailText = email.value.slice(0, email.value.indexOf("@"));
    return emailText.length;
}

function validDomain() {
    var domains = ['.com', '.net', '.fr', '.co.uk', '.ru', '.de', '.it', '.es'];

    for (var i = 0; i < domains.length; i++) {
        // console.log(domains[i]);
        if (email.value.indexOf(domains[i]) != -1) {
            return true;
        }
    }

    return false;
}
