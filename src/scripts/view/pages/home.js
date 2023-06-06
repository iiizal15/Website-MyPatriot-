import MyPatriotIdbSource from "../../data/mypatriotdb-source";
import { createCardTemplatePatriot } from "./templates/template-creator";
import CONFIG from "../../globals/config";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { collection, getFirestore } from "firebase/firestore/lite";
import { async } from "regenerator-runtime";

const Home = {
    async render() {
        return `
            <div class="min-vh-100 fs-1">Tes</div>
        `;
    },

    async afterRender(){
        // const app = firebase.database().ref();
        // app.on("value", function(snapshot) {
        //     console.log(snapshot.val());
        //  }, function (error) {
        //     console.log("Error: " + error.code);
        //  });

    }
}

export default Home;