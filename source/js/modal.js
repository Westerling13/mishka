'use strickt';

(() => {
  const modal = document.querySelector('.modal');
  const buttonStock = document.querySelector('.stock__button');
  const buttonModal = modal.querySelector('.modal__button');
  const buttonProduct1 = document.querySelector('#product-01-button');
  const buttonProduct2 = document.querySelector('#product-02-button');
  const buttonProduct3 = document.querySelector('#product-03-button');
  const buttonProduction = document.querySelector('.production__button');
  const ESCAPE_KEYCODE = 27;


  const modalOpen = (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--active');

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === ESCAPE_KEYCODE) {
        modalClose(evt);
      }
    });
  }

  const modalClose = (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--active');

    document.removeEventListener('keydown', modalClose);
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

  buttonModal.addEventListener('click', modalClose);
})()
