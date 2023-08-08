const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuBtnClose1 = document.getElementById("mobile-menu-1");
const menuBtnClose2 = document.getElementById("mobile-menu-2");
const menuBtnClose3 = document.getElementById("mobile-menu-3");
const menuBtnClose4 = document.getElementById("mobile-menu-4");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
menuBtnClose1.addEventListener("click", toggleMenu);
menuBtnClose2.addEventListener("click", toggleMenu);
menuBtnClose3.addEventListener("click", toggleMenu);
menuBtnClose4.addEventListener("click", toggleMenu);