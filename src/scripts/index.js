import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function (event) {
  drawer.classList.remove('open');
  event.stopPropagation();
});
