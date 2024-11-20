(() => {
  const refs = {
    openBurgerMenuBtn: document.querySelector("[burger-menu-open]"),
    closeBurgerMenuBtn: document.querySelector("[burger-menu-close]"),
    burgerMenu: document.querySelector("[burger-menu]"),
  };

  refs.openBurgerMenuBtn.addEventListener("click", toggleBurgerMenu);
  refs.closeBurgerMenuBtn.addEventListener("click", toggleBurgerMenu);

  function toggleBurgerMenu() {
    refs.burgerMenu.classList.toggle("is-hidden");
  }
})();
