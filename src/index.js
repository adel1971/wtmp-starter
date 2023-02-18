/**
 * Main JS file
 *
 * @author: mattpe <mattpe@metropolia.fi>
 * @summary: Example solution for
 * https://github.com/mattpe/wtmp/blob/master/docs/01-javascript-basics.md#task-4---dummy-lunch-menu-2
 */
import Sodexo from './modules/sodexo-data';
import Fazer from './modules/fazer-data';

// Global variables
let lang = 'fi';
const restaurants = [
  {name: 'Myrtsi', id: 152, type: 'sodexo'},
  {name: 'Myllypuro', id: 158, type: 'sodexo'},
  {name: 'Karaportti', id: 3208, type: 'fazer'},
];

const saveSetting = () => {
const setting = {};
setting.restaurants = restaurants;
setting.darkmode = true;
localStorage.setItem('settings', JSON.stringify(setting));
};
saveSetting();

const loadSettings = () => {

};

/**
 * Renders menu content to html page
 * @param {Array} menu - array of dishes
 */
const renderMenu = (menu, targetElem) => {
  const menuContainer = document.createElement('div');
  menuContainer.classList = 'menu-container';
  targetElem.append(menuContainer);
  const list = document.createElement('ul');
  for (const dish of menu) {
    const li = document.createElement('li');
    li.textContent = dish;
    list.append(li);
  }
  menuContainer.append(list);
};

const renderAllMenus = async () => {
  const menuWrapper = document.querySelector('#menu-wrapper');
  menuWrapper.innerHTML= '';
  for (const restaurant of restaurants) {
    let menu;
    if (restaurant.type === 'sodexo') {
      menu = await Sodexo.getDailyMenu(restaurant.id, lang);
    } else if (restaurant.type === 'fazer') {
      menu = await Fazer.getDailyMenu(restaurant.id, lang);
    }
    renderMenu(menu, menuWrapper);
  }
};

/**
 * Change UI language
 * @param {string} language
 */
const changeLanguage = async (language) => {
  lang = language;
  renderAllMenus();
};

/**
 * Buttons & event handlers
 */
const langButton = document.querySelector('#lang-button');
langButton.addEventListener('click', () => {
  if (lang === 'fi') {
    changeLanguage('en');
  } else {
    changeLanguage('fi');
  }
});

/**
 * App initalization
 */
const init = () => {
  loadSettings();
  renderAllMenus();
};
init();

// TODO: wrap to function / move to separate module
// eslint-disable-next-line no-undef
if (APP_CONF.productionMode && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
