import DetailPatriot from "../view/pages/detail-patriot";
import Home from "../view/pages/home";
import Patriot from "../view/pages/patriot";


const routes = {
    '/': Home,
    '/patriot': Patriot,
    '/detail-patriot/:id': DetailPatriot,
};

export default routes;
