import DetailPatriot from '../view/pages/detail-patriot';
import Home from '../view/pages/home';
import Patriot from '../view/pages/patriot';
import Contactus from '../view/pages/contactus';
import Aboutus from '../view/pages/aboutus';

const routes = {
  '/': Home,
  '/patriot': Patriot,
  '/detail-patriot/:id': DetailPatriot,
  '/contact-us': Contactus,
  '/aboutus': Aboutus,
};

export default routes;
