export function drawformat() {

    const header = document.createElement('div');
    const footer = document.createElement('div');

    const headerBg = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const headerSubtitle = document.createElement('p');

    const headerMenu = document.createElement('div');
    const menuList = document.createElement('ul');
    const homeButton = document.createElement('li');
    const menuButton = document.createElement('li');
    const contactButton = document.createElement('li');

    const footerContent = document.createElement('p');

    header.classList.add('header');
    headerMenu.classList.add('menu');
    menuList.classList.add('menulist');

    homeButton.classList.add('menubutton');
    homeButton.classList.add('active');
    menuButton.classList.add('menubutton');
    contactButton.classList.add('menubutton');

    footer.classList.add('footer');

    headerBg.classList.add('background');

    headerTitle.innerText = 'De friettent';
    headerSubtitle.innerText = 'De beste friet van het land!';

    homeButton.innerText = 'home';
    menuButton.innerText = 'menu';
    contactButton.innerText = 'contact';

    footerContent.innerText = '© De friettent';

    menuList.appendChild(homeButton);
    menuList.appendChild(menuButton);
    menuList.appendChild(contactButton);

    headerMenu.appendChild(menuList);

    header.appendChild(headerBg);
    header.appendChild(headerTitle);
    header.appendChild(headerSubtitle);

    header.appendChild(headerMenu);

    footer.appendChild(footerContent);

    return {header, footer}
}