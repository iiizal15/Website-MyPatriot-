import '../styles/main.css';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './view/app'

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});
  
window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});
  