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

let currentActive = document.querySelector('.active');

document.querySelectorAll('.menubutton').forEach(item => {
    item.addEventListener('click', event => changeContent(event.target));
});

function changeContent(target) {

    currentActive.classList.remove('active');
    target.classList.add('active');

    currentActive = target;

    mainContent = contentTable[target.textContent];
    mainContent.classList.add('main');

    content.removeChild(content.querySelector('.main'));
    content.insertBefore(mainContent, content.querySelector('.footer'));

}