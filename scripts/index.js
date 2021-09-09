
// Example function

// function example() {
//     let myUl = document.getElementById("test");

//     if (myUl.style.display == "flex") {
//         myUl.style.display = "none";
//     } else {
//         myUl.style.display = "flex";
//     }

// }


// const togglePassword = document.getElementById("togglePassword");
// const password = document.getElementById("password");

// togglePassword.addEventListener("click", () => {
//     password.input.type = "text";

// });

// function toggleVisibility() {
//     let password = document.getElementById("clickableEye");
//     if (password.type === "password") {
//         password.type = "text";
//     } else {
//         password.type = "password";
//     }
// };

// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#password');

// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye / eye slash icon
//     //     this.classList.toggle('far fa-eye');
//     // });

// });


const password = document.getElementById("password");
const eye = document.getElementById("togglePassword");

eye.addEventListener("click", () => {

    if (password.type == "password") {
        password.type = "text";
        console.log("hello");
    } else {
        password.type = "password";
    }

});

// const poolButton = document.getElementsByClassName("button2");
// let sound = document.getElementById("sound");

// poolButton.addEventListener("click", () => {
//     sound.play();
// });