import KaruniaRestaurantdb from '../../data/Karunia_restaurant_db';
import { KaruniaRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
    async render() {
        return `
  <main id="mainContent">
  <div class="container">
      <div class="form">
          <div class="contact-info">
              <h2 class="title">Get In Touch</h2>
              <p class="text">Saran dan masukkan anda sangat berharga bagi kami. Anda dapat
                  mengirim pesan termasuk tampilan website, fitur, dan kendala-kendala yang anda alami.</p>

                  <div class="info">
                      <div class="information">
                          <img src="../../public/img/gmail.png" class="icon" alt="">
                          <p>mypatriot@gmail.com </p>
                      </div>

                      <div class="information">
                          <img src="../../public/img/handphone.png" class="icon" alt="">
                          <p>0822 - 1234 - 4321 </p>
                      </div>
                  </div>
          </div>

          <div class="contact-form">s
              <span class="circle one"></span>
              <span class="circle two"></span>

              <form action="index.html">
                  <h3 class="title">CONTACT</h3>

                  <div class="input-container">
                      <input type="text" name="name" class="input">
                      <label for=""> Name</label>
                  </div>

                  <div class="input-container">
                    <input type="mail" name="name" class="input">
                    <label for=""> Email</label>
                </div>

                  <div class="input-container textarea focus" >
                     <textarea name="message" class="input"></textarea>
                      <label for="">Message</label>
                  </div>
                  <input type="submit" value="Send Message" class="btn">

              </form>
          </div>
      </div>
  </div> 
</main>
        `;
    },

    async afterRender() {

        // const restaurants = await KaruniaRestaurantdb.KaruniarestaurantList();
        // const restaurantContainer = document.querySelector('.list-karunia-restaurants');

        // restaurants.forEach((restaurant) => {
        //   restaurantContainer.innerHTML += KaruniaRestaurantItemTemplate(restaurant);
        // });


    },
};

export default Restaurant;
