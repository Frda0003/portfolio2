////// Header funktionalitet https://frederikdamgaard14.dk/kea/02_web/01_website/website/index.html ////////////

document.getElementById("menu-icon").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show"); // Toggler 'show' klassen
});

// ChatGPT
/////////////// Adding event listeners to each button //////////////////
const buttons = document.querySelectorAll('button[id^="project_button"]');

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the URL from the data-href attribute
    const url = button.getAttribute("data-href");

    // Open the URL in a new tab
    window.open(url, "_blank");
  });
});
// ChatGPT

/////////////////// Videooverlay funktion ////////////

const video = document.querySelector("#video");
const overlayVideo = document.querySelector("#overlay_video");

video.addEventListener("ended", showOverlay);

function showOverlay() {
  overlayVideo.style.display = "flex";
}
