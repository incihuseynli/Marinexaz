document.addEventListener("DOMContentLoaded", function () {
  let selectedValue;

  // Dropdown Select Menu

  const selects = document.querySelectorAll(".select");

  selects.forEach((select) => {
    const selectHeader = select.querySelector(".select-header");
    const selectText = select.querySelector(".select-text");
    const options = select.querySelectorAll(".option");

    selectHeader.addEventListener("click", () => {
      select.classList.toggle("active");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selectedValue = option.textContent;
        // console.log(selectedValue);

        selectText.textContent = selectedValue;
        select.classList.remove("active");
      });
    });
  });

  const shippingPriceCalcForm = document.querySelector(
    "#shippingPriceCalcForm"
  );
  const productWidth = document.getElementById("productWidth");
  const productHeight = document.getElementById("productHeight");
  const productLength = document.getElementById("productLength");
  const productWeight = document.getElementById("productWeight");
  shippingPriceCalcForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let productWidthValue = productWidth.value;
    let productHeightValue = productHeight.value;
    let productLengthValue = productLength.value;
    let productWeightValue = productWeight.value;

    // console.log(selectedValue);
    // console.log(productWidthValue);
    // console.log(productHeightValue);
    // console.log(productLengthValue);
    // console.log(productWeightValue);
    if (productWeightValue > 0 && productWeightValue <= 100) {
      const URL = 
      "https://my-json-server.typicode.com/dbStoreForProjects/MarinexData1/shippingPrices";
      fetch(URL)
        .then((response) => {
          return response.json();
        })
        .then((shippingPrices) => {
          let tariffRange;
          let weight = productWeightValue;
          for (const price of shippingPrices) {
            const [minWeight, maxWeight] = price.tariff
              .split(" - ")
              .map(parseFloat);
            if (weight >= minWeight && weight <= maxWeight) {
              tariffRange = price;
              break;
            }
          }
          let shippingPrice;
          let productType = selectedValue; // Select->option value
          if (tariffRange) {
            if (productType === "Adi məhsul") {
              shippingPrice = parseInt(tariffRange.forStandards);
            } else if (productType === "Maye") {
              shippingPrice = parseInt(tariffRange.forLiquids);
            }
          }
          // console.log(tariffRange.forStandards);
          // console.log(shippingPrice);

          // let Pheight = 100;
          // let Pwidth = 60;
          // let Plenght = 50;

          let result = Math.floor(
            (productWidthValue * productHeightValue * productLengthValue) / shippingPrice / 1000);
          // console.log((result/1000) + " $");
          // console.log(selectedValue);
          const resultInput = document.getElementById("result");
          resultInput.value = result + " USD";
          // console.log(resultInput.value = result + " USD");
        });
    } else if (productWeightValue < 0 && productWeightValue > 100) {
      // console.log("error");
      alert("Məlumatları uyğun doldurun");
    }
  });
});
