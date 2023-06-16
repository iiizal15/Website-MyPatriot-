import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/style.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './view/app';

const app = new App({
  button: document.querySelector('#menu-hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  // contents: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// Load images lazily
// const lazyImages = document.querySelectorAll('img[src]');
// lazyImages.forEach((lazyImage) => {
//   lazyImage.addEventListener('load', () => {
//     lazyImage.classList.add('lazyloaded');
//   });

//   lazyImage.addEventListener('error', () => {
//     lazyImage.classList.add('lazyerror');
//   });

//   // eslint-disable-next-line no-param-reassign
//   lazyImage.src = lazyImage.dataset.src;
// });
