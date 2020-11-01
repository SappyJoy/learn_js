'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const contents = document.querySelectorAll('.tabcontent');
  const tabParent = document.querySelector('.tabheader__items');
  const tabs = document.querySelectorAll('.tabheader__item');

  hideTabContent();

  contents[0].classList.remove('hide');
  tabs[0].classList.add('tabheader__item_active');

  function hideTabContent() {
    contents.forEach(tab => {
      tab.classList.add('hide');
      tab.classList.remove('show', 'fade');
    });
    tabs.forEach(tab => {
      tab.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    contents[i].classList.add('show', 'fade');
    contents[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  tabParent.addEventListener('click', evt => {
    if (evt.target && evt.target.classList.contains('tabheader__item')) {
      let tabIndex = 0;
      while (tabIndex < contents.length && tabs[tabIndex] != evt.target) {
        tabIndex++;
      }
      hideTabContent();
      showTabContent(tabIndex);
    }
  });

  // Timer

  const deadline = '2020-11-2';

  setClock('.timer', deadline);

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.now();
    const days = ~~(t / (1000 * 60 * 60 * 24)); // "~~" - fast trunc number
    const hours = ~~((t / (1000 * 60 * 60)) % 24);
    const minutes = ~~((t / 1000 / 60) % 60);
    const seconds = ~~((t / 1000) % 60);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    updateClock();
    const timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      if (t.total < 0) {
        t.total = 0;
        t.days = 0;
        t.hours = 0;
        t.minutes = 0;
        t.seconds = 0;
      }
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(item => {
    item.addEventListener('click', evt => {
      toggleModal();
    });
  });

  modalCloseBtn.addEventListener('click', evt => {
    toggleModal();
  });

  modal.addEventListener('click', evt => {
    if (evt.target === modal) {
      toggleModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) toggleModal();
  });

  function toggleModal() {
    modal.classList.toggle('show');
    const overflow = document.body.style.overflow;
    if (overflow == '') document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    clearInterval(modalTimerId);
  }

  // const modalTimerId = setTimeout(() => {
  //   if (!modal.classList.contains('show')) toggleModal();
  // }, 5000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      toggleModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  // Use class for cards

  class MenuCard {
    constructor(img, alt, title, desc, price, parentSelector, ...classes) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 79.37;
      this.changeToRUB();
    }

    changeToRUB() {
      this.price = +this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        element.classList.add('menu__item');
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
        <img src="${this.img}" alt="${this.alt}">
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.desc}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  for (let i = 0; i < 3; i++) {
    new MenuCard(
      'img/tabs/elite.jpg',
      'Elite',
      'Элитный завтрак',
      'Такое подают только' + ' у нас.',
      5,
      '.menu .container',
    ).render();
  }
});
