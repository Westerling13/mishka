(function () {
  'use strict';

  var modal = document.querySelector('.modal');
  var buttonStock = document.querySelector('.stock__button');
  var buttonModal = modal.querySelector('.modal__button');
  var buttonSize = modal.querySelectorAll('.modal__size-button');
  var buttonProduct1 = document.querySelector('#product-01-button');
  var buttonProduct2 = document.querySelector('#product-02-button');
  var buttonProduct3 = document.querySelector('#product-03-button');
  var buttonProduction = document.querySelector('.production__button');
  var pageWrapper = document.querySelector('.page__wrapper');
  var ESCAPE_KEYCODE = 27;


  function modalOpen (evt) {
    evt.preventDefault();

    modal.classList.add('modal--active');
    modal.style.top = evt.pageY - modal.offsetHeight + 'px';
    pageWrapper.classList.add('page__wrapper--shade');

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESCAPE_KEYCODE) {
        modalClose(evt);
      }
    });
  }

  function modalClose (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--active');
    pageWrapper.classList.remove('page__wrapper--shade');

    document.removeEventListener('keydown', modalClose);
  }

  function removeActive () {
    for (var i = 0; i < buttonSize.length; i += 1) {
      buttonSize[i].classList.remove('modal__size-button--active');
    }
  }

  if (document.querySelector('.stock')) {
    buttonStock.addEventListener('click', modalOpen);
  }
  if (document.querySelector('.product-list')) {
    buttonProduct1.addEventListener('click', modalOpen);
    buttonProduct2.addEventListener('click', modalOpen);
    buttonProduct3.addEventListener('click', modalOpen);
    buttonProduction.addEventListener('click', modalOpen);
  }

  buttonSize[0].addEventListener('click', function () {
    removeActive();
    buttonSize[0].classList.add('modal__size-button--active');
  });
  buttonSize[1].addEventListener('click', function () {
    removeActive();
    buttonSize[1].classList.add('modal__size-button--active');
  });
  buttonSize[2].addEventListener('click', function () {
    removeActive();
    buttonSize[2].classList.add('modal__size-button--active');
  });

  buttonModal.addEventListener('click', modalClose);
}());
