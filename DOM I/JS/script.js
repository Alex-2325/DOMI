let play_pause_btn = document.getElementById("play-pause-btn");
let stop_btn = document.getElementById("stop-btn");
let cover = document.getElementById("cover");
let controls = document.querySelector(".controls");

let is_playing = false;

play_pause_btn.addEventListener("click",() => {
    if (is_playing) {
        cancion.pause();
        cover.style.animationPlayState = "paused";
        controls.style.animationPlayState = "paused";
        play_pause_btn.innerHTML = "Play";
        is_playing = false;
    } else {
        cancion.play();
        cover.style.animationPlayState = "running";
        controls.style.animationPlayState = "running";
        play_pause_btn.innerHTML = "Pausa";
        is_playing = true;
    }
});

stop_btn.addEventListener("click",() => {
    cancion.load();
    controls.style.animationPlayState = "paused";
    cover.style.animationPlayState = "paused";
})

