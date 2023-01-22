/**
 * Module for Sodexo menu data parasing
 *
 * @auther adelal <adelal@metropolia.fi>
 * @auther Fazer
 */
import MenuFi from  '../mock-data/fazer-week-example.json';
import MenuEn from  '../mock-data/fazer-week-example-en.json';

const coursesFi = MenuFi.MenusForDays[0].SetMenus.map((menuItem) => {
 return menuItem.Components.join(',');
});
const coursesEn = MenuFi.MenusForDays[0].SetMenus.map((menuItem) => {
 return menuItem.Components.join(',');
});
console.log(coursesFi);

const Fazer = {coursesEn,coursesFi};
export default Fazer;
