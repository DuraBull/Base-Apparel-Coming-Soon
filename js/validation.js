// const email = document.querySelector(".email");
// const error = document.querySelector(".error");
// const valid = document.querySelector(".validation");
// const button = document.querySelector(".btn-submit");

// button.addEventListener("click", validateEmail);

function validateEmail(input) {

    var email = input.value;
    var mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    console.log(input);

    if(input.value.match(mailFormat)) {
        alert("valid!");
    }
    else {
        alert("Not Valid!");
    }
}

