import { onValue } from 'firebase/database';
import API_ENDPOINT from '../globals/api-endpoint';
import Firebase from '../globals/firebase';
import { createCardPatriotTemplate } from '../view/pages/templates/template-creator';

class MyPatriotIdbSource {

  // static async patriot(){
  //   const response = await fetch(API_ENDPOINT.PATRIOT)
  //   const responseJson = await response.json();
  //   return responseJson;
  // }
  // static async patriot(){
  //   const patriotDb = Firebase.initializeFirebase();
  //   onValue(patriotDb, (snapshot) => {
  //     snapshot.forEach(function(element){
  //         const id = element.key;
  //         const data = element.val();
  //         // patriotContainer.innerHTML += createCardPatriotTemplate(id, data)
  //     });
  // });
  // }
}

export default MyPatriotIdbSource;
