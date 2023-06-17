const createCardPatriotTemplate = (id, data) => `
    <div class="card col-sm-9 col-md-5 col-lg-3 flex-grow-2 position-relative">
        <div class="card-header text-center border-0 pt-3">
            <h5 class="card-title fw-bold" tabindex="0">${data.nama}</h5>
            <h6 class="card-gelar" tabindex="0">${data.gelar_pahlawan}</h6>
        </div>
        <div class=" d-flex mx-auto justify-content-center py-3 border-top border-bottom border-dark">
            <img data-src="${data.gambar}" class="img-fluid lazyload" alt="Gambar ${data.nama}" width="140" >
        </div>
        <div class="card-body ">
            <dl class="row px-2">
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis ">Asal Daerah</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis">: ${data.asal_daerah}</dd>
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis">Lahir</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis">: ${data.lahir}</dd>
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis">Makam</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis">: ${data.lokasi_makam}</dd>
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis">Gugur</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis">: ${data.gugur}</dd>
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis">Kategori Pahlawan</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis">: ${data.kategori}</dd>
            </dl>
            </div>
            <div class="wrapper-btn-detail ">
                <a href="#/detail-patriot/${id}" class="btn w-100 btn-detail justify-content-center " tabindex="0" >Detail</a>
            </div>
    </div>
    `;

const createDetailPatriotTemplate = (data) => `
    <div class="col-sm-6 col-md-12 col-lg-12 detail-box rounded-5 py-4">
    <div class="row px-3">
        <div class="d-flex detail-content">
            <div class="col-sm col-md-5 col-lg-4 detail-image ">
                <img data-src="${data.gambar}"  alt="${data.nama}" class="img-fluid rounded lazyload" width="350">
            </div>
            <div class="col-sm col-md-6 col-lg detail-header mx-4">
                <h1 class="text-center fw-bold text-dark-emphasis">${data.nama}</h1>
                <h3 class="text-center fw-semibold text-dark-emphasis">${data.gelar_pahlawan}</h3>

                <dl class="row text-dark-emphasis pt-4">
                    <dt class="col-sm-4  col-md-4">Asal Daerah</dt>
                    <dd class="col-sm-8  col-md-8 col-lg-8 ">: ${data.asal_daerah}</dd>
                  
                    <dt class="col-sm-4  col-md-4">Lahir</dt>
                    <dd class="col-sm-8  col-md-8 col-lg-8 ">: ${data.lahir}</dd>
                  
                    <dt class="col-sm-4  col-md-4">Gugur</dt>
                    <dd class="col-sm-8  col-md-8 col-lg-8 ">: ${data.gugur}</dd>
                  
                    <dt class="col-sm-4  col-md-4 ">Makam</dt>
                    <dd class="col-sm-8  col-md-8 col-lg-8 ">: ${data.lokasi_makam}</dd>
                    <dt class="col-sm-4  col-md-4 ">Bidang</dt>
                    <dd class="col-sm-8  col-md-8 col-lg-8 kategori">: ${data.kategori}</dd>
                  
                </dl>
            </div>
        </div>
    </div>
    <div class="row mt-2 ">
        <div class="col-sm-12 col-md-9 col-lg-9 detail-description px-4">
            <h3 class="fw-semibold text-dark-emphasis">Deskripsi</h3>
            <p class="lh-base">${data.deskripsi}</p>
        </div>
    </div>
</div>
    `;

const createSkeletonCardPatriot = (count) => {
  let template = '';
  for (let i = 0; i < count; i++) {
    template += `
        <div class="card col-sm-9 col-md-5 col-lg-3 flex-grow-2 position-relative ">
        <div class="card-header text-center border-0 pt-3 ">
            <h5 class="card-title fw-bold skeleton" tabindex="0"> Lorem ipsum dolor sit amet.</h5>
            <h6 class="card-gelar skeleton" tabindex="0">Lorem, ipsum dolor.</h6>
        </div>
        <div class=" d-flex mx-auto justify-content-center py-3 border-top border-bottom border-dark">
            <img src="" class="img-fluid skeleton" alt="Gambar " width="140" >
        </div>
        <div class="card-body ">
            <dl class="row px-2 skeleton">
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis ">Asal Daerah</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis ">: Lorem ipsum dolor sit amet.</dd>
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis ">Lahir</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis ">: </dd>
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis ">Makam</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis " >:</dd>
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis ">Gugur</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis ">: </dd>
                <dt class="col-xs-3 col-sm-3 col-md-4 font-card-left text-dark-emphasis ">Kategori Pahlawan</dt>
                <dd class="col-sm-9 col-md-8 text-truncate font-card-right text-dark-emphasis ">: </dd>
            </dl>
            </div>
            <div class="wrapper-btn-detail skeleton">
                <a href="#/detail-patriot/" class="btn w-100 btn-detail justify-content-center" tabindex="0">Detail</a>
            </div>
    </div>
        `;
  }
  return template;
};

const createSkeletonDetailPatriotTemplate = (count) => {
  let template = '';
  for (let i = 0; i < count; i++) {
    template += `
        <div class="col-sm-6 col-md-12 col-lg-12 detail-box rounded-5 p-4">
        <div class="row p-3">
            <div class="d-flex px-3 justify-content-center detail-content">
                <div class="col-sm col-md-5 col-lg-4 px-2 detail-image  skeleton ">
                    <img src="" class="img-fluid " alt="Gambar "  >
                </div>
                <div class="col-sm-12 col-md-7 col-lg ps-3 detail-header  ">
                    <h1 class="text-center fw-bold text-dark-emphasis skeleton">Lorem ipsum dolor sit amet.</h1>
                    <h3 class="text-center fw-semibold text-dark-emphasis skeleton">Lorem, ipsum dolor.</h3>
    
                    <dl class="row text-dark-emphasis pt-4 skeleton">
                        <dt class="col-sm-4  col-md-4">Asal Daerah</dt>
                        <dd class="col-sm-8  col-md-8 col-lg-8 ">: </dd>
                      
                        <dt class="col-sm-4  col-md-4">Lahir</dt>
                        <dd class="col-sm-8  col-md-8 col-lg-8 ">: </dd>
                      
                        <dt class="col-sm-4  col-md-4">Gugur</dt>
                        <dd class="col-sm-8  col-md-8 col-lg-8 ">: </dd>
                      
                        <dt class="col-sm-4  col-md-4 ">Makam</dt>
                        <dd class="col-sm-8  col-md-8 col-lg-8 ">: </dd>
                        <dt class="col-sm-4  col-md-4 ">Bidang</dt>
                        <dd class="col-sm-8  col-md-8 col-lg-8 kategori">: </dd>
                      
                    </dl>
                </div>
            </div>
        </div>
        <div class="row mt-2 ">
            <div class="col-sm-12 col-md-9 col-lg-9 detail-description px-4 skeleton ">
                <h3 class="fw-semibold text-dark-emphasis">Deskripsi</h3>
                <p class="lh-base"></p>
            </div>
        </div>
    </div>
        `;
  }

  return template;
};

export {
  createCardPatriotTemplate,
  createDetailPatriotTemplate,
  createSkeletonCardPatriot,
  createSkeletonDetailPatriotTemplate,
};
