
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
      selectText.innerHTML = option.innerText;
      select.classList.remove("active");
    });
  });
});
