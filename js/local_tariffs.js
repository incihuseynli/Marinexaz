const priceWeights = document.querySelector(".head");
const pricesRows = document.querySelectorAll(".row p");
const contentsContainer = document.querySelector(".contents");

// const SHIPPING_PRICES_URL = "http://localhost:3001/places";
const SHIPPING_PRICES_URL = "https://my-json-server.typicode.com/incihuseynli/MarinexData3/places";

fetch(SHIPPING_PRICES_URL)
  .then((response) => response.json())
  .then((prices) => {
    prices.forEach(({ tariffs, id }) => {
      const adiTag = tariffs.adi.reduce((a, b) => `${a}<p>${b}</p>`, "");
      const mayeTag = tariffs.maye.reduce((a, b) => `${a}<p>${b}</p>`, "");
      contentsContainer.innerHTML += `
            <div class="content" id="${id}-content">
              <div class="tariffTable">
                <div class="table">
                  <div class="head">
                  <p>0.00 kg - 0.10 kg</p>
                  <p>0.10 kg - 0.25 kg</p>
                  <p>0.25 kg - 0.50 kg</p>
                  <p>0.50 kg - 0.75 kg</p>
                  <p>0.75 kg - 1.00 kg</p>
                  <p>1.00 kg və üzəri</p>
                  </div>
                  <div class="sort">
                    <h4 class="subtitle">Adi məhsul</h4>
                    <div class="row">
                      ${adiTag}
                    </div>
                  </div>
                  <div class="sort">
                    <h4 class="subtitle">Maye</h4>
                    <div class="row">
                    ${mayeTag}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      `;
    });
  });


function tabClick(e) {
  const contents = document.querySelectorAll(".content");
  const tabs = document.querySelectorAll(".tab-btn");

  tabs.forEach((tab, index) => {
    tab.classList.remove("active");
    contents[index].classList.remove("active");
  });
  document.getElementById(`${e.target.id}-content`).classList.add("active");
  e.target.classList.add("active");
  console.log(document.getElementById(`${e.target.id}-content`));
}
