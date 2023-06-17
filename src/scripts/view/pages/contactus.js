import ContactUsHandler from '../../utils/contactusHandler';

const Contactus = {
  async render() {
    return `
      <!-- Contact Us -->
        <div class="p-5">
            <div class=" d-flex justify-content-center">
            <div class="form">
            <div class="contact-info">
                <h2 class="title">Let's Talk!</h2>
                <p class="text">Saran dan masukkan anda sangat berharga bagi kami. Anda dapat
                    mengirim pesan termasuk tampilan website, fitur, dan kendala-kendala yang anda alami.</p>
                    <div class="info">
                        <div class="information">
                            <img src="./img/gmail.png" class="icon mb-3" alt="">
                            <p>mypatriot@gmail.com </p>
                        </div>
                        <div class="information">
                            <img src="./img/handphone.png" class="icon mb-3" alt="">
                            <p>0822 - 1234 - 4321 </p>
                        </div>
                    </div>
            </div>
  
            <div class="contact-form">
                <span class="circle one"></span>
                <span class="circle two"></span>
  
                <form action="index.html">
                    <h3 class="title">CONTACT US</h3>
  
                    <div class="input-container mb-3">
                        <label for="name"> Name</label>
                        <input type="text" name="name" id="name" class="input mt-2" required placeholder="Enter your name">  
                    </div>
  
                    <div class="input-container mb-3">
                    <label for="email"> Email</label>
                    <input type="email" name="name" id="email" class="input mt-2" required placeholder="Enter your email">
                  </div>
  
                    <div class="input-container textarea focus" >
                    <label for="message">Message</label>
                      <textarea name="message" class="input mt-2" id="message" required placeholder="Enter your message..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-submit mt-2" id="btn-submit">Submit</button>
                </form>
            </div>
        </div>
            </div>
        </div> 
        `;
  },
  async afterRender() {
    const submitContactUs = document.querySelector('#btn-submit');
    submitContactUs.addEventListener('click', (e) => {
      e.preventDefault();
      ContactUsHandler();
    });
  },
};

export default Contactus;
