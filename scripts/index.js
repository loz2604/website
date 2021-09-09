
// Example function

// function example() {
//     let myUl = document.getElementById("test");

//     if (myUl.style.display == "flex") {
//         myUl.style.display = "none";
//     } else {
//         myUl.style.display = "flex";
//     }

// }

let sound = document.getElementById("poolHit");
const home = document.getElementById("button1");
const pool = document.getElementById("button2");
const manU = document.getElementById("button3");

pool.addEventListener("click", () => {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
    console.log("hello");
});

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