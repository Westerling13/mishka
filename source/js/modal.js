'use strickt';

(() => {
  const modal = document.querySelector('.modal');
  const buttonStock = document.querySelector('.stock__button');
  const buttonModal = modal.querySelector('.modal__button');
  const buttonSize = modal.querySelectorAll('.modal__size-button');
  const buttonProduct1 = document.querySelector('#product-01-button');
  const buttonProduct2 = document.querySelector('#product-02-button');
  const buttonProduct3 = document.querySelector('#product-03-button');
  const buttonProduction = document.querySelector('.production__button');
  const pageWrapper = document.querySelector('.page__wrapper');
  const ESCAPE_KEYCODE = 27;


  const modalOpen = (evt) => {
    evt.preventDefault();

    modal.classList.add('modal--active');
    modal.style.top = `${evt.pageY - modal.offsetHeight}px`;
    pageWrapper.classList.add('page__wrapper--shade');

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === ESCAPE_KEYCODE) {
        modalClose(evt);
      }
    });
  }

  const modalClose = (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--active');
    pageWrapper.classList.remove('page__wrapper--shade');

    document.removeEventListener('keydown', modalClose);
  }

  const removeActive = () => {
    for (let i = 0; i < buttonSize.length; i += 1) {
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

  buttonSize[0].addEventListener('click', () => {
    console.log('0');
    removeActive();
    buttonSize[0].classList.add('modal__size-button--active');
  });
  buttonSize[1].addEventListener('click', () => {
    console.log('1');
    removeActive();
    buttonSize[1].classList.add('modal__size-button--active');
  });
  buttonSize[2].addEventListener('click', () => {
    console.log('2');
    removeActive();
    buttonSize[2].classList.add('modal__size-button--active');
  });

  buttonModal.addEventListener('click', modalClose);
})()
