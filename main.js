const form = document.getElementById("registerForm");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let isValid = true;

    clearErrors();

    // Name Validation
    if(nameField.value.trim().length < 3){
        showError(nameField, "Name must be at least 3 characters");
        isValid = false;
    }

    // Email Validation
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailField.value)){
        showError(emailField, "Enter a valid email");
        isValid = false;
    }

    // Phone Validation
    const phonePattern =
    /^03\d{9}$/;

    if(!phonePattern.test(phoneField.value)){
        showError(phoneField,
        "Enter valid Pakistani phone number");
        isValid = false;
    }

    // Password Validation
    if(passwordField.value.length < 8){
        showError(passwordField,
        "Password must be at least 8 characters");
        isValid = false;
    }

    // Confirm Password
    if(passwordField.value !== confirmPasswordField.value){
        showError(confirmPasswordField,
        "Passwords do not match");
        isValid = false;
    }

    if(isValid){
        successMessage.innerText =
        "Registration Successful! 🎉";

        successMessage.classList.add("success");

        form.reset();
    }
});

function showError(input,message){

    const parent = input.parentElement;
    const small = parent.querySelector(".error");

    small.innerText = message;

    input.classList.add("input-error");
}

function clearErrors(){

    const errors =
    document.querySelectorAll(".error");

    errors.forEach(error => {
        error.innerText = "";
    });

    const inputs =
    document.querySelectorAll("input");

    inputs.forEach(input => {
        input.classList.remove("input-error");
    });

    successMessage.innerText = "";
}