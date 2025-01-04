document.getElementById("menu-icon").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show"); // Toggler 'show' klassen
});

// Adding event listeners to each button
const buttons = document.querySelectorAll('button[id^="project_button"]');

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the URL from the data-href attribute
    const url = button.getAttribute("data-href");

    // Open the URL in a new tab
    window.open(url, "_blank");
  });
});
