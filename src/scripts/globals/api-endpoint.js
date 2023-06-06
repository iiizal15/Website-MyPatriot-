import CONFIG from './config';
import Firebase from './firebase';

const API_ENDPOINT = {
  PATRIOT: `${CONFIG.BASE_URL}Pahlawan.json`,
  // DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;