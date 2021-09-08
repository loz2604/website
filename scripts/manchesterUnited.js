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

const image1 = document.getElementById("image1");
const hideShow = document.getElementById("hideShow");
const image2 = document.getElementById("image2");


hideShow.addEventListener("click", () => {
    if (image1.style.display == "none") {
        image1.style.display = "block";
        hideShow.textContent = "hide";
        image2.style.display = "none";
    } else {
        image1.style.display = "none";
        hideShow.textContent = "show";
        image2.style.display = "block";

    }

});

