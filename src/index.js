import {drawformat} from "./format";

const content = document.querySelector('#content');

let mainContent = document.createElement('div');
mainContent.classList.add('main');

content.appendChild(drawformat().header);
content.appendChild(mainContent);
content.appendChild(drawformat().footer);

console.log(drawhome().header);

//drawhome();