import x from "./x.js";
import png from "./assets/1.png";
console.log(x);

const div = document.getElementById("app");
div.innerHTML = `
<img src="${png}">
`;
