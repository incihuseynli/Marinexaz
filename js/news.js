const NEWS_URL = "http://localhost:3001/news";

const newsCards = document.querySelector(".cards");

fetch(NEWS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ id, title, image, content, date, detailedContent }) => {
      newsCards.innerHTML += `
            <div class="card" data-id="${id}">
            <div class="card-image">
              <img src=${image} alt="" />
            </div>
            <div class="card-body">
              <h4 class="subtitle">${title}</h4>
              <p class="content">${detailedContent}</p>
              <div class="bottom">
                <div class="date">
                  <span>18</span>
                  <span>May</span>
                </div>
                <button class="btn-rounded">
                  <a href="../news-post.html">
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
            `;
    });
  });
