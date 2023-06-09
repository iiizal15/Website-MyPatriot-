import Restaurant from '../views/pages/restaurant-pages';
import Detail from '../views/pages/detail-pages';
import Favorite from '../views/pages/favorite-pages';
import ContactUs from '../views/pages/contactus-pages';

const routes = {
  '/': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/#/contact-us' : ContactUs,
};
export default routes;
