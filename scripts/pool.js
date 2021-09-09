let sound = document.getElementById("poolHit");
const home = document.getElementById("button1");
const pool = document.getElementById("button2");
const manU = document.getElementById("button3");

// home.addEventListener("click", () => {
//     sound.pause();
//     sound.currentTime = 0;
//     sound.play();
// });
pool.addEventListener("click", () => {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
});
// manU.addEventListener("click", () => {
//     sound.pause();
//     sound.currentTime = 0;
//     sound.play();
// });