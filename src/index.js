import {drawFormat} from "./format";
import {homePage} from "./homepage";
import {menuPage} from "./menupage";
import {contactPage} from "./contactpage";

const content = document.querySelector('#content');

const contentTable = {home: homePage(), menu: menuPage(), contact: contactPage()};

let mainContent = contentTable.home;
mainContent.classList.add('main');

content.appendChild(drawFormat().header);
content.appendChild(mainContent);
content.appendChild(drawFormat().footer);

document.querySelectorAll('.menubutton').forEach(item => {
    item.addEventListener('click', event => changeContent(event));
});

function changeContent(event) {

    let textContent = event.target.textContent;

    content.removeChild(content.querySelector('.main')); 
    content.removeChild(content.querySelector('.footer')); 

    mainContent = contentTable[textContent];
    mainContent.classList.add('main');

    content.appendChild(mainContent);
    content.appendChild(drawFormat().footer);

}