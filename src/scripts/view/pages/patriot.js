import { onValue } from 'firebase/database';
import { createCardPatriotTemplate, createSkeletonCardPatriot } from './templates/template-creator';
import Firebase from '../../globals/firebase';

const Patriot = {
  async render() {
    return `
        <div class="content-filter">
            <div class="col-sm col-md col-lg wave"></div>
            <div class="row mx-auto justify-content-center p-3">
                <div class="col-xs-12 col-sm-9 col-md-8 col-lg-5 search">
                    <form class="d-flex" role="search">
                        <input class="form-control py-3 px-4 border-0 shadow-none" type="text" placeholder="Cari..." aria-label="Cari..." tabindex="0" id="search">
                        <button class="btn border-0 btn-search ps-4 pe-4 px-md-5 px-lg-4 px-xl-5" type="submit" tabindex="0" id="btn-search" aria-label="button search"><i class="bi bi-search text-white " ></i></button>
                    </form>
                </div>
            </div>
            <div class="row d-flex mx-auto justify-content-center px-3">
            <div class="col-xs-2 col-sm-2 col-md-5 col-lg-2 mb-3">
                    <select class="form-select" tabindex="0" id="gelar-pahlawan">
                    <option selected value="Gelar Pahlawan">Gelar Pahlawan</option>
                    <option value="Pahlawan Nasional">Pahlawan Nasional</option>
                    <option value="Pahlawan Revolusi">Pahlawan Revolusi</option>
                    <option value="Pahlawan Kemerdekaan Nasional">Pahlawan Kemerdekaan Nasional</option>
                </select>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-5 col-lg-2 ">
                    <select class="form-select" tabindex="0" id="kategori-pahlawan">
                    <option selected value="Kategori Pahlawan">Kategori Pahlawan</option>
                    <option value=": Politik">Politik</option>
                    <option value=": Agama">Agama</option>
                    <option value=": Revolusi">Revolusi</option>
                    <option value=": Kemerdekaan">Kemerdekaan</option>
                    <option value=": Perjuangan">Perjuangan</option>
                </select>
            </div>
            </div>
        </div>
        <div class="container px-3 mt-4 mb-3 ">
            <div class="gap-3 d-flex justify-content-center flex-wrap " id="contents">
                ${createSkeletonCardPatriot(20)}
            </div>
            <div class="scroll-up">
                <button type="button" class='moveUp handleScrollUp' id='back-to-top' >
                    <i class="bi bi-arrow-up"></i>
                </button>
            </div>
        </div>
        `;
  },

  async afterRender() {
    const btnSearch = document.getElementById('btn-search');
    const filterGelarPahlawan = document.getElementById('gelar-pahlawan');
    const filterKategoriPahlawan = document.getElementById('kategori-pahlawan');
    const patriotContainer = document.querySelector('#contents');
    const patriotDb = Firebase.initializeFirebase();
    onValue(patriotDb, (snapshot) => {
      patriotContainer.innerHTML = '';
      snapshot.forEach((element) => {
        const id = element.key;
        const data = element.val();
        patriotContainer.innerHTML += createCardPatriotTemplate(id, data);
      });
    });

    // handle search
    btnSearch.addEventListener('click', (e) => {
      e.preventDefault();
      const inputSearch = document.getElementById('search').value.toLowerCase();
      const cardItems = document.querySelectorAll('.card');
      for (let i = 0; i < cardItems.length; i++) {
        const cardTitle = cardItems[i].getElementsByTagName('h5')[0];
        if (cardTitle) {
          const textTitle = cardTitle.textContent;
          if (textTitle.toLowerCase().indexOf(inputSearch) > -1) {
            cardItems[i].style.display = 'block';
          } else {
            cardItems[i].style.display = 'none';
          }
        }
      }
    });

    // handle filter

    // gelar pahlawan
    filterGelarPahlawan.addEventListener('change', () => {
      const cardItems = document.querySelectorAll('.card');
      const choose = filterGelarPahlawan.options[filterGelarPahlawan.selectedIndex].value;
      for (let i = 0; i < cardItems.length; i++) {
        const cardGelar = cardItems[i].getElementsByTagName('h6')[0];
        const textGelar = cardGelar.textContent;
        if (choose) {
          if (choose === 'Gelar Pahlawan' || choose === textGelar) {
            cardItems[i].style.display = 'block';
          } else {
            cardItems[i].style.display = 'none';
          }
        }
      }
    });

    // handle kategori pahlawan
    filterKategoriPahlawan.addEventListener('change', () => {
      const cardItems = document.querySelectorAll('.card');
      const choose = filterKategoriPahlawan.options[filterKategoriPahlawan.selectedIndex].value;
      for (let i = 0; i < cardItems.length; i++) {
        const cardKategori = cardItems[i].getElementsByTagName('dd')[4];
        const textKategori = cardKategori.textContent;
        if (choose) {
          if (choose === 'Kategori Pahlawan' || choose === textKategori) {
            cardItems[i].style.display = 'block';
          } else {
            cardItems[i].style.display = 'none';
          }
        }
      }
    });

    // handle back-to-top
    const btnScroll = document.getElementById('back-to-top');
    const handleScrollUp = document.querySelector('.handleScrollUp');
    window.onscroll = function () {
      scrollFunction();
    };
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 500
                || document.documentElement.scrollTop > 500
      ) {
        btnScroll.style.display = 'block';
      } else {
        btnScroll.style.display = 'none';
      }
    };
    handleScrollUp.addEventListener('click', (e) => {
      e.preventDefault();
      const element = document.getElementById('mainContent');
      element.scrollIntoView({ behavior: 'smooth' });
    });
  },
};

export default Patriot;
