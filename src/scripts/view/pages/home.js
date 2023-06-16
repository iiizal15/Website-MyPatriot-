import '../../components/jumbotron';

const Home = {
  async render() {
    return `
        <jumbotron-element></jumbotron-element>
        <!-- Explore Restoran -->
        <div class="explore">
          <div class="explore__container">
            <p><span> Pentingnya </span> Mengenal <span> Pahlawan Nasional</span></p>
          </div>
        </div>

        <!-- Article Section -->
        <article class="article">
          <div class="article1">
            <div class="article1__desc">
              <h3>Pahlawan mengajarkan bagaimana cara menghargai arti dari perjuangan</h3>
            </div>
            <div class="article1__image">
              <img data-src="./img/hero2.png" alt="Gambar Article 1" class="lazyload" />
            </div>
          </div>
        </article>

        <article class="articles">
          <div class="article2">
            <div class="article2__image">
              <img data-src="./img/hero3.png" alt="Gambar Article 2" class="lazyload" />
            </div>
            <div class="article2__desc">
              <h3>Teladan Bagi Masyarakat dalam memperjuangkan bangsa Indonesia</h3>
            </div>
          </div>
        </article>

        <article class="articlet">
          <div class="article3">
            <div class="article3__desc">
              <h3>Memaknai arti persatuan dalam sebuah negara</h3>
            </div>
            <div class="article3__image">
              <img data-src="./img/hero4.png" alt="Gambar Article 3" class="lazyload" />
            </div>
          </div>
        </article>

        <article class="articlex">
          <div class="article4">
            <div class="article4__image">
              <img data-src="./img/hero5.png" alt="Gambar Article 4" class="lazyload" />
            </div>
            <div class="article4__desc">
              <h3>Lebih mengenal sejarah bangsa yang beragam</h3>
            </div>
          </div>
        </article>
        `;
  },

  async afterRender() {},
};

export default Home;
