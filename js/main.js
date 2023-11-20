
// PRICE TABLE
const SHIPPING_PRICES_URL = 
"https://my-json-server.typicode.com/dbStoreForProjects/MarinexData1/shippingPrices";

const tableContainer = document.querySelector(".table-Container .body .col");

fetch(SHIPPING_PRICES_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ id, tariff, forStandards, forLiquids }) => {
      tableContainer.innerHTML += `
        <div class="row" data-id=${id}>
          <p data-usage-type="Tariflər">${tariff}</p>
          <p data-usage-type="Adi məhsul">${forStandards}</p>
          <p data-usage-type="Maye">${forLiquids}</p>
        </div>
      `;
    });
  });


  // USAGE SECTION
const usageContainer = document.querySelector(".container");

const USAGE_URL = 
"https://my-json-server.typicode.com/dbStoreForProjects/MarinexData3/work";

fetch(USAGE_URL)
  .then((response) => {
    return response.json();
  })
  .then((works) => {
    works.forEach(({ image, content }) => {
      usageContainer.innerHTML += `
        <div class="step">
        <div class="img">
          <img src=${image} />
        </div>
        <p>${content}</p>
        <span class="line"></span>
      </div>
        `;
    });
  });


  const newsCards = document.querySelector(".cards");
  
  const NEWS_URL = 
  "https://my-json-server.typicode.com/dbStoreForProjects/MarinexData4/news?&_limit=3";

  fetch(NEWS_URL)
  .then((response) => {
    return response.json();
  }).then((news) => {
    news.forEach(({id,title, content, day, months, image}) => {
      newsCards.innerHTML += `
      <div class="card">
      <div class="card-image">
        <img src=${image} alt="" />
      </div>
      <div class="card-body">
        <h4 class="subtitle">${title}</h4>
        <p class="content">${content}</p>
        <div class="bottom">
          <div class="date">
            <span>${day}</span>
            <span>${months}</span>
          </div>
          <button class="btn-rounded">
            <a href="news-post.html?id=${id}">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
      `;
    });
  })