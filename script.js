// document.getElementById("menu-icon").addEventListener("click", function () {
//   const navLinks = document.getElementById("nav-links");
//   navLinks.classList.toggle("show"); // Toggler 'show' klassen
// });

// Get elements
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

// Toggle the dropdown menu when the menu icon is clicked
menuIcon.addEventListener("click", function (event) {
  // Prevent the click from propagating to document (to stop closing immediately)
  event.stopPropagation();

  // Toggle the visibility of the nav-links dropdown
  navLinks.classList.toggle("show");
});

// Close the dropdown if the user clicks anywhere outside of the menu
document.addEventListener("click", function (event) {
  // If the click happened outside of the header or menu icon, close the dropdown
  if (!header.contains(event.target)) {
    navLinks.classList.remove("show");
  }
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
