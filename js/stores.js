const STORE_URL = "http://localhost:3001/brands";

const storesList = document.querySelector(".list");

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
