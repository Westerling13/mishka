'use strickt';

(() => {
  const mainNav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--no-js');

  const openMenu = () => {
    mainNav.classList.toggle('main-nav--opened');
  }

  toggle.addEventListener('click', openMenu);
})();
