// const STORE_URL = "http://localhost:3001/brands?&_limit=8";
const STORE_URL = "https://my-json-server.typicode.com/dbStoreForProjects/MarinexData1/brands?&_limit=8";

const storesBanner = document.querySelector(".stores");
fetch(STORE_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ image }) => {
      storesBanner.innerHTML += `
            <div class="store">
              <img src=${image} alt="" />
            </div>
            `;
    });
  });
