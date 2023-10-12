let limit = 6;
let currentPage = 1;
// const NEWS_URL = `http://localhost:3001/news?_limit=${limit}`;
const NEWS_URL = `https://my-json-server.typicode.com/incihuseynli/MarinexData4/news?_limit=${limit}`;

const newsCards = document.querySelector(".cards");

fetch(NEWS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ id, title, image, content, day, months }) => {
      newsCards.innerHTML += `
            <div class="card" data-id="${id}">
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
  });

// ============================================
let newsCardList = document.querySelectorAll(".card");
const cards = document.querySelector(".cards");

function showNews() {
  // Starting value
  let start = limit * (currentPage - 1);
  // Ending value
  let end = limit * currentPage - 1;
  newsCardList.forEach((item, num) => {
    if (num >= start && num <= end) {
      item.style.display = "block";
      // console.log(item);
    } else {
      item.style.display = "none";
    }
  });
  getNewsPages();
}
showNews();

function getNewsPages() {
  let count = Math.ceil(newsCardList.length / limit);
  document.querySelector(".pagination").innerHTML = "";
  if (currentPage != 1) {
    let prev = document.createElement("li");
    prev.classList.add("prev");
    prev.setAttribute("onclick", "changeNewsPage(" + (currentPage - 1) + ")");
    document.querySelector(".pagination").appendChild(prev);
  } else {
    let prev = document.createElement("li");
    prev.classList.add("prev");
    prev.setAttribute("disabled", "");
    document.querySelector(".pagination").appendChild(prev);
    prev.style.cursor = "not-allowed";
  }
  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.classList.add("page-number");
    newPage.innerText = i;
    if (i == currentPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changeNewsPage(" + i + ")");
    document.querySelector(".pagination").appendChild(newPage);
  }
  if (currentPage != count) {
    let next = document.createElement("li");
    next.classList.add("next");
    next.setAttribute("onclick", "changeNewsPage(" + (currentPage + 1) + ")");
    document.querySelector(".pagination").appendChild(next);
  } else {
    let next = document.createElement("li");
    next.classList.add("next");
    next.setAttribute("disabled", "");
    document.querySelector(".pagination").appendChild(next);
    next.style.cursor = "not-allowed";
  }
}

function changeNewsPage(i) {
  currentPage = i;
  showNews();
}
