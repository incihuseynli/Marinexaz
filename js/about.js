// const ABOUT_URL = "http://localhost:3001/about";
const ABOUT_URL = "https://my-json-server.typicode.com/incihuseynli/MarinexData1/about";
const aboutContainer = document.querySelector(".about");
fetch(ABOUT_URL)
.then((response) => {
    return response.json();
}).then((about) => {
    about.forEach(({title, content, image}) => {
        aboutContainer.innerHTML += `
        <div class="img">
        <img src=${image} alt="" />
      </div>
      <div class="content">
        <h1 class="title">${title}</h1>
        <p>${content}</p>
        <p>${content}</p>
      </div>
        `;
    });
})