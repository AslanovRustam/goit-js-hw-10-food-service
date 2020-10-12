import './styles.css';
import menuTempl from './templates/menu-temlate.hbs';
import menu from './menu.json';

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function createMenu(menu) {
    // return menu.map(menuItem => menuTempl(menuItem))
  return menu.map(menuTempl).join('');
}
const createMenuItem = createMenu(menu);
const menuItem = document.querySelector('.menu.js-menu');
menuItem.insertAdjacentHTML('beforeend', createMenuItem);

const themeSwitch = document.querySelector('#theme-switch-toggle');
themeSwitch.addEventListener('change', themeSelector);

const bodyClass = document.querySelector('body');
// const STORAGE_KEY = 'lightTheme';
// const savedTheme = localStorage.getItem(STORAGE_KEY);
bodyClass.classList.add(theme.LIGHT);
function themeSelector(evt) {
  bodyClass.classList.toggle(theme.LIGHT)
  bodyClass.classList.toggle(theme.DARK)
}

