import { onValue } from 'firebase/database';
import { createDetailPatriotTemplate, createSkeletonDetailPatriotTemplate } from '../templates/template-creator';
import Firebase from '../../globals/firebase';
import UrlParser from '../../routes/url-parser';

const DetailPatriot = {
  async render() {
    return `
        <div class="container ">
            <div class="row px-3 my-3" id="detail-content">
            ${createSkeletonDetailPatriotTemplate(1)}
            </div>
        </div>
        `;
  },

  async afterRender() {
    const detailContentContainter = document.querySelector('#detail-content');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const patriotId = url.id.toLowerCase();
    const patriotDb = Firebase.initializeFirebase();
    onValue(patriotDb, (snapshot) => {
      detailContentContainter.innerHTML = '';
      snapshot.forEach((element) => {
        const id = element.key.toLowerCase();
        const data = element.val();
        if (id !== patriotId) return;
        detailContentContainter.innerHTML += createDetailPatriotTemplate(data);
      });
    });
  },
};

export default DetailPatriot;
