const SHIPPING_RULES_URL = "http://localhost:3001/shippingRules";

const rulesList = document.querySelector(".list");
fetch(SHIPPING_RULES_URL)
  .then((response) => {
    return response.json();
  })
  .then((rules) => {
    rules.forEach(({ content }) => {
      rulesList.innerHTML += `
           <li class="rule">${content}</li>
        `;
    });
  });

function tabMenu(event, tabId) {
  let tabContent = document.getElementsByClassName("tabcontent");
  for (let index = 0; index < tabContent.length; index++) {
    tabContent[index].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (let index = 0; index < tablinks.length; index++) {
    tablinks[index].className = tablinks[index].className.replace("active", "");
  }
  document.getElementById(tabId).style.display = "block";
  event.currenTarget.className += "active";
}
const defaultOpen = document.getElementById("defaultOpen");
defaultOpen.click();

const forbiddenTabContent = document.getElementById("forbidden");
const privacyTabContent = document.getElementById("privacy");
const faqTabContent = document.getElementById("faq");


const FORBIDDENS_URL = "http://localhost:3001/forbiddens";
const PRIVACY_URL = "http://localhost:3001/privacy";
const FAQ_URL = "http://localhost:3001/faqs";

fetch(FORBIDDENS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ title, content }) => {
      forbiddenTabContent.innerHTML += `<p>${content}</p>`;
    });
  });

fetch(PRIVACY_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ content }) => {
      privacyTabContent.innerHTML += `<p>${content}</p>`;
    });
  });
