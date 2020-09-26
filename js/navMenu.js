const navSlide = () => {
  const hamb = document.querySelector(".hamb");
  const menu = document.querySelector(".header-menu");

  hamb.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
  });
};

navSlide();