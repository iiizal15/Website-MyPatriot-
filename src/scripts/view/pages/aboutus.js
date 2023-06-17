const Aboutus = {
  async render() {
    return `
          <div class="about-container ">
            <div class="position-relative">
              <div class="wave-about"></div>
              <div class="about-description">
                <div class="col-sm-5 col-md-11 col-lg-6 text-center">
                  <h1 class="fs-2 fw-bold">Tentang MyPatriot</h1>
                  <p>MyPatriot merupakan sebuah aplikasi berbasis website yang berisikan seputar informasi tentang Pahlawan Nasional Indonesia mulai dari gelar pahlawan hingga jasa-jasa dari pahlawan tersebut.</p>
                </div>
              </div>
            </div>
            <div class="about-our-team my-5">
                 <h1 class="text-center fw-bold">Our Team</h1>
                  <div class="d-flex justify-content-center flex-wrap mt-5">
                    <div class="col-sm-12 col-md-5 col-lg-3 mb-3 profile">
                      <img src="./img/fahrizal.jpg" alt="Fahrizal Amri Bachtiar" class="img-fluid lazyload mx-auto img-profile" />
                      <h3 class="fs-5 fw-bold text-center mt-2">Fahrizal Amri Bachtiar</h3>
                      <p class="text-center fst-italic" >Student at Dicoding Academy</p>
                      <div class="team-sosmed d-flex justify-content-center align-items-center">
                      <a href="https://github.com/iiizal15" target="_blank" rel="noopener" > 
                        <img src="./img/github.png" alt="github" class="img-fluid" />
                      </a>
                      <a href="https://www.linkedin.com/in/fahrizal-amri-bachtiar-955647242" target="_blank" rel="noopener"> 
                        <img src="./img/linkedin.png" alt="github" class="img-fluid" />
                      </a>
                      <a href="https://instagram.com/iiizal?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener"> 
                        <img src="./img/instagram.png" alt="github" class="img-fluid" />
                      </a>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-3 mb-3 profile">
                      <img src="./img/zaidan.jpg" alt="Ahmad Jourji Zaidan" class="img-fluid lazyload mx-auto img-profile" />
                      <h3 class="fs-5 fw-bold text-center mt-2">Ahmad Jourji Zaidan</h3>
                      <p class="text-center fst-italic" >Student at Dicoding Academy</p>
                      <div class="team-sosmed d-flex justify-content-center align-items-center">
                          <a href="https://github.com/zidaann" target="_blank" rel="noopener"> 
                            <img src="./img/github.png" alt="github" class="img-fluid" />
                          </a>
                          <a href="https://www.linkedin.com/in/ahmad-jourji-zaidan-6b6240231" target="_blank" rel="noopener"> 
                            <img src="./img/linkedin.png" alt="github" class="img-fluid" />
                          </a>
                          <a href="https://www.instagram.com/zidaann54/" target="_blank" rel="noopener"> 
                            <img src="./img/instagram.png" alt="github" class="img-fluid" />
                          </a>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-3 mb-3 profile">
                      <img src="./img/Tegar.png" alt="Tegar Karunia Ilham" class="img-fluid lazyload mx-auto img-profile" />
                      <h3 class="fs-5 fw-bold text-center mt-2">Tegar Karunia Ilham</h3>
                      <p class="text-center fst-italic" >Student at Dicoding Academy</p>
                      <div class="team-sosmed d-flex justify-content-center align-items-center">
                          <a href="https://github.com/TegarDev9" target="_blank" rel="noopener"> 
                            <img src="./img/github.png" alt="github" class="img-fluid" />
                          </a>
                          <a href="https://www.linkedin.com/in/tegar-karunia-ilham-888b861b5" target="_blank" rel="noopener"> 
                            <img src="./img/linkedin.png" alt="github" class="img-fluid" />
                          </a>
                          <a href="https://instagram.com/tegarkaruniailham?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener"> 
                            <img src="./img/instagram.png" alt="github" class="img-fluid" />
                          </a>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-3 mb-3 profile">
                      <img src="./img/nurul.jpg" alt="Nurul Prima Annisa" class="img-fluid lazyload mx-auto img-profile" />
                      <h3 class="fs-5 fw-bold text-center mt-2">Nurul Prima Annisa</h3>
                      <p class="text-center fst-italic" >Student at Dicoding Academy</p>
                      <div class="team-sosmed d-flex justify-content-center align-items-center">
                          <a href="https://github.com/NurulPrimaAnnisa" target="_blank" rel="noopener" > 
                            <img src="./img/github.png" alt="github" class="img-fluid" />
                          </a>
                          <a href="https://www.linkedin.com/in/nurul-prima-annisa-837b90223" target="_blank" rel="noopener"> 
                            <img src="./img/linkedin.png" alt="github" class="img-fluid" />
                          </a>
                          <a href="https://instagram.com/npannisa_?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener"> 
                            <img src="./img/instagram.png" alt="github" class="img-fluid" />
                          </a>
                      </div>
                    </div>
              </div>
            </div>
          </div>
          
        `;
  },
  // eslint-disable-next-line no-empty-function
  async afterRender() {},
};

export default Aboutus;
