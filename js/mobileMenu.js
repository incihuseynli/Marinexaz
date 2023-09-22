/**
 * ! -------------- Mobile Menu--------------------------------
 */
const mobileMenu = document.querySelector(".menu");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeBtn = document.getElementById("closeBtn");

function openMenu() {
  mobileMenu.style.transform = "translateX(0%)";
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  mobileMenu.style.transform = "translateX(-200%)";
}
