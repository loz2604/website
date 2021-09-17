// const image = document.getElementsByClassName("image1");
// const text = document.getElementsByClassName("title");

// image.addEventListener("click", () => {
//     if (image.style.display == "none") {
//         image.style.display = "block";

//     } else {
//         image.style.display = "block";
//         text.textContent = "Boooooooooooooo!";
//     }
// });

// const image = document.getElementsByClassName("image1");
// const submit = document.getElementById("submit");

// submit.addEventListener("click", () => {
//     if (image.style.display == "none") {
//         image.style.display = "block";
//         submit.textContent = "hide";
//     } else {
//         image.style.display = "none";
//         submit.textContent = "show";
//     }

// });
let sound = document.getElementById("poolHit");
const home = document.getElementById("button1");
const pool = document.getElementById("button2");
const manU = document.getElementById("button3");


pool.addEventListener("click", () => {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
});


const image1 = document.getElementById("image1");
const hideShow = document.getElementById("hideShow");
const image2 = document.getElementById("image2");
// const text = document.getElementsByClassName("title");

function changeText(text) {
    document.getElementById("text").innerHTML = text;
}

// This is when I had a button to click instaed of just on the image
// hideShow.addEventListener("click", () => {
//     if (image1.style.display == "none") {
//         image1.style.display = "block";
//         hideShow.textContent = "hide";
//         image2.style.display = "none";
//         changeText("This is the best view in the world. You may, however, not agree. If this is the case, please click the button.");
//     } else {
//         image1.style.display = "none";
//         hideShow.textContent = "show";
//         image2.style.display = "block";
//         changeText("Click again if you change your mind, or when your eyes start going funny!");
//         // text.innerHTML = "Hello";
//     }
// });

image2.addEventListener("click", () => {
    image1.style.display = "block";
    image2.style.display = "none";
    changeText("This is the best view in the world. You may, however, not agree. If this is the case, please click the image.");
});

image1.addEventListener("click", () => {
    image1.style.display = "none";
    image2.style.display = "block";
    changeText("Click again if you change your mind, or when your eyes start going funny!");
});

