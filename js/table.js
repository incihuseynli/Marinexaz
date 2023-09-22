const SHIPPING_PRICES_URL = "http://localhost:3001/shippingPrices?&_limit=6";

const tableHead = document.querySelector(".head");
const pricesRows = document.querySelectorAll(".sort .row");
fetch(SHIPPING_PRICES_URL)
  .then((response) => {
    return response.json();
  })
  .then((prices) => {
    prices.forEach(({ tariff, forLiquids }) => {
      tableHead.innerHTML += `<p>${tariff}</p>`;
      pricesRows.forEach((pricesRow) => {
        pricesRow.innerHTML += `<p>${forLiquids}</p>`;
      });
    });
  });


  // PRICE TABLE
const PRICES_URL = "http://localhost:3001/shippingPrices";

const tableContainer = document.querySelector(".table-Container .body .col");

fetch(PRICES_URL)
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