document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".hamburger-menu");
  const menu = document.querySelector(".main-nav-content");

  // Add click event listener
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
})