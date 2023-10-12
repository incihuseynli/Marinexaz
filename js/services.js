// Getting Services Datas

// const SERVICES_URL = "http://localhost:3001/services";
const SERVICES_URL = "https://my-json-server.typicode.com/incihuseynli/MarinexData1/services";

const ServiceCards = document.querySelector(".cards");

fetch(SERVICES_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ title, image, infoContent }) => {
      ServiceCards.innerHTML += `
      <div class="card">
      <img src=${image} alt="" />
      <h4 class="subtitle">${title}</h4>
      <p>${infoContent}</p>
    </div>
      `;
    });
  });