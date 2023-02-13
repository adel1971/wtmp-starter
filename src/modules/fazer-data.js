/**
 * Module for Sodexo menu data parasing
 *
 * @auther adelal <adelal@metropolia.fi>
 * @auther Fazer
 */
import {doFetch} from './network';

const weeklyUrl =
  'https://www.compass-group.fi/menuapi/feed/json?costNumber=3208&language=';

/**
 * Gets today's menu from Fazer API
 *
 * @param {string} lang - menu language 'fi'/'en'
 * @returns Menu array
 */
const getDailyMenu = async (lang) => {
  try {
    const weeklyMenu = await doFetch(weeklyUrl + lang, true);
    console.log('fazer menu', weeklyMenu);
    const courses = weeklyMenu.MenusForDays[0].SetMenus.map(
      (menuItem) => {
        return menuItem.Components.join(', ');
      }
    );
    return courses;
  } catch (error) {
    throw new Error('getDailyMenu error: ' + error);
  }
};

const Fazer = {getDailyMenu};
export default Fazer;

  /* import MenuFi from  '../mock-data/fazer-week-example.json';
import MenuEn from  '../mock-data/fazer-week-example-en.json';

const coursesFi = MenuFi.MenusForDays[0].SetMenus.map((menuItem) => {
 return menuItem.Components.join(',');
});
const coursesEn = MenuEn.MenusForDays[0].SetMenus.map((menuItem) => {
 return menuItem.Components.join(',');
});
console.log(coursesFi);

const Fazer = {coursesEn,coursesFi};
export default Fazer;
 */
