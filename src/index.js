import './styles.css';
import menuTempl from './templates/menu-temlate.hbs';
import menu from './menu.json';

// console.log(menuTempl(menu[2]))
function createMenu(menu) {
    // return menu.map(menuItem => menuTempl(menuItem))
return menu.map(menuTempl).join('');
}
const createMenuItem = createMenu(menu);
const menuItem = document.querySelector('.menu.js-menu');
menuItem.insertAdjacentHTML('beforeend', createMenuItem);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
