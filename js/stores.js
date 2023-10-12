// const STORE_URL = "http://localhost:3001/brands";
const STORE_URL = "https://my-json-server.typicode.com/incihuseynli/MarinexData1/brands";

const storesList = document.querySelector(".list");
const storesBanner = document.querySelector(".stores");
fetch(STORE_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ id, image }) => {
      storesList.innerHTML += `
            <div class="store" data-id="${id}">
              <img src=${image} alt="" />
            </div>
            `;
      
    });
  });

// const storeLists = document.querySelector(".list");
// const stores = document.querySelectorAll(".store");

// let currentPage = 1;
// let limit = 12;

