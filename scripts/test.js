
const password = document.getElementById("password");
const eye = document.getElementsById("togglePassword");

eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        // password.getElementById("password").type = "text";
    } else {
        password.type = "password";
    }

});
