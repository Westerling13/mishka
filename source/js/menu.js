(function () {
  'use strict';

  var mainNav = document.querySelector('.main-nav');
  var toggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--no-js');

  function openMenu () {
    mainNav.classList.toggle('main-nav--opened');
  }

  toggle.addEventListener('click', openMenu);
}());
