class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Hero Jumbotron Element -->
    <div class="hero-container" id="hero">
      <div class="hero-content-container">
        <div class="jumbotron">
          <h1>My Patriot</h1>
          <p>
            Website seputar informasi mengenai pemahaman dan penghargaan terhadap Pahlawan Nasional Indonesia tersebut sehingga diharapkan dapat memberikan manfaat dan kemudahan terhadap pengguna dalam mengenal, mengetahui dan memahami jasa
            para Pahlawan Nasional di Indonesia.
          </p>
          <a class="patriot-button" href="#/patriot">Patriot</a>
        </div>
        <div class="image-jumbo">
          <img data-src="./img/hero1.png" alt="Gambar Jumbotron" class="lazyload" />
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
