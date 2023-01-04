import {drawhome} from "./homepage";

const content = document.querySelector('#content');

let mainContent = document.createElement('div');
mainContent.classList.add('main');

content.appendChild(drawhome().header);
content.appendChild(mainContent);
content.appendChild(drawhome().footer);

console.log(drawhome().header);

//drawhome();