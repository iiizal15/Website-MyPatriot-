import { async } from "regenerator-runtime";
import { createDetailPatriotTemplate } from "./templates/template-creator";
import Firebase from "../../globals/firebase";
import { onValue } from "firebase/database";
import UrlParser from "../../routes/url-parser";

const DetailPatriot = {
    async render(){
        return `
        <div class="container ">
            <div class="row " id="detail-content">
            </div>
        </div>
        `;
    },

    async afterRender(){
        const headerPatriot = document.getElementById('patriot-header');
        const detailContentContainter = document.querySelector('#detail-content');
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const patriotId = url.id.toLowerCase();
        const patriotDb = Firebase.initializeFirebase();
        document.addEventListener('load', () => {
            headerPatriot.style.visibility= 'hidden';
        });
        onValue(patriotDb, (snapshot) => {
            snapshot.forEach(function(element){
                const id = element.key.toLowerCase();
                const data = element.val();
                if(id !== patriotId) return;
                detailContentContainter.innerHTML = createDetailPatriotTemplate(data)
            });
        });


    }
}

export default DetailPatriot;