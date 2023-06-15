<<<<<<< HEAD
import DetailPatriot from '../view/pages/detail-patriot';
import Home from '../view/pages/home';
import Patriot from '../view/pages/patriot';
import Contactus from '../view/pages/contactus';

const routes = {
  '/': Home,
  '/patriot': Patriot,
  '/detail-patriot/:id': DetailPatriot,
  '/contactus': Contactus,
=======
import Restaurant from '../views/pages/restaurant-pages';
import Detail from '../views/pages/detail-pages';
import Favorite from '../views/pages/favorite-pages';
import ContactUs from '../views/pages/contactus-pages';

const routes = {
  '/': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/#/contact-us' : ContactUs,
>>>>>>> 338b5e43ae095ee48da6e0a778f3a5ed221fe3b5
};

export default routes;
