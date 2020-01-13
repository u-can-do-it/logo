const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

//play pause on modal action
const backdrop = document.querySelector("#videoModal");
const close = document.querySelector(".modal .close");
const trigger = document.querySelector('div[data-target="#videoModal"]');

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function play() {
  video.play();
}
function pause() {
  video.pause();
}

video.addEventListener("click", togglePlay);
backdrop.addEventListener("click", pause);
close.addEventListener("click", pause);
trigger.addEventListener("click", play);
