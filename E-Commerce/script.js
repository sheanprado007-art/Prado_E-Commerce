const form = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Kinalimutan mo na ako? ang sakit mo naman");
});
signUp.addEventListener("click", function(event) {
    event.preventDefault();
    alert(" Sign up ka pa? papasok ka nnmn sa buhay ko tapos ano iiwan mo rin ako ayaw ko na.");
});

const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    userError.textContent = "";
    passError.textContent = "";
    message.textContent = "";

    let valid = true;

    
    if(username.value.trim() === ""){
        userError.textContent = "Please enter your username or email.";
        valid = false;
    }

    
    if(password.value.trim() === ""){
        passError.textContent = "Please enter your password.";
        valid = false;
    }

    
    else if(password.value.length < 6){
        passError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }

   
    if(valid){
        message.style.color = "White";
        message.textContent = "Login successful!";
    }
});


const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function(){

    if(password.type === "password"){
        password.type = "text";
        togglePassword.textContent = "Hide";
    }
    else{
        password.type = "password";
        togglePassword.textContent = "Show";
    }
    

});