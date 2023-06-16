import DetailPatriot from '../view/pages/detail-patriot';
import Home from '../view/pages/home';
import Patriot from '../view/pages/patriot';
import Contactus from '../view/pages/contactus';

const routes = {
  '/': Home,
  '/patriot': Patriot,
  '/detail-patriot/:id': DetailPatriot,
  '/contactus': Contactus,
};

export default routes;
