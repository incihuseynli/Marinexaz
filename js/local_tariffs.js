const priceWeights = document.querySelector(".head");
const pricesRows = document.querySelectorAll(".row p");
const contentsContainer = document.querySelector(".contents");

const SHIPPING_PRICES_URL = "http://localhost:3001/shippingPrices?&_limit=6";

fetch(SHIPPING_PRICES_URL)
  .then((response) => {
    return response.json();
  })
  .then((prices) => {
    prices.forEach(({ tariff, forLiquids }) => {
      pricesRows.forEach((pricesRow) => {
        pricesRow += `<p>${forLiquids}</p>`;
        let priceTag = pricesRow.innerHTML;

        contentsContainer.innerHTML += `
          <div class="content">
            <div class="tariffTable">
              <div class="table">
                <div class="head">
                  <p>${tariff}</p>
                </div>
                <div class="sort">
                  <h4 class="subtitle">Adi məhsul</h4>
                  <div class="row">
                    ${priceTag}
                  </div>
                </div>
                <div class="sort">
                  <h4 class="subtitle">Maye</h4>
                  <div class="row">
                  ${priceTag}
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
      });
    });
  });

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    contents[index].classList.add("active");
  });
});
