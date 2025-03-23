document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".hamburger-menu");
  const menu = document.querySelector(".main-nav-content");

  // Add click event listener
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
})

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("sticky_navbar");
  const navbarOffset = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > navbarOffset) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
})

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("mobile_sticky");
  const navbarOffset = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > navbarOffset) {
      navbar.classList.add("fixed-mobile");
    } else {
      navbar.classList.remove("fixed-mobile");
    }
  });
})