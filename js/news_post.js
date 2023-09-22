const newsPostContainer = document.querySelector(".news-post");

async function DisplayNewsDetails() {
  const NEWS_URL = new URLSearchParams(document.location.search);
  let id = NEWS_URL.get("id");
  let res = await fetch(`http://localhost:3001/news/${id}`);
  let newsPost = await res.json();

  newsPostContainer.innerHTML += `
    <div class="content">
    <h1 class="title">${newsPost.title}</h1>
    <span class="date">${newsPost.date}</span>
    <p>${newsPost.detailedContent}</p>
  </div>
  <div class="img">
      <img src=${newsPost.image} alt="">
  </div>
    `;
}
DisplayNewsDetails()