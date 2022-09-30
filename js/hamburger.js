const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");
let lastScrollY = window.scrollY;
let isOpen = false;

function toggleHamburgerMenu() {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
  isOpen = !isOpen;
}

menuBtn.onclick = () => {
  toggleHamburgerMenu();
};

document.querySelectorAll(".list-item").forEach((n) =>
  n.addEventListener("click", () => {
    toggleHamburgerMenu();
  })
);

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && isOpen) {
    toggleHamburgerMenu();
  }

  lastScrollY = window.scrollY;
});
