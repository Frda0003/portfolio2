////// Header funktionalitet ////////////
// link https://frederikdamgaard14.dk/kea/02_web/01_website/website/index.html

document.getElementById("menu-icon").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show"); // Toggler 'show' klassen
});

/////////////////// Videooverlay funktion ////////////

const videoPlayer = document.querySelector("#video");
const overlayVideo = document.querySelector("#overlay_video");

videoPlayer.addEventListener("ended", showOverlay);

function showOverlay() {
  overlayVideo.style.display = "flex";
}
