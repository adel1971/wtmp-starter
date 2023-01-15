'use strict';




const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];


let long = 'fi';
let activeMenu = coursesFi;

/**
 * Renders menu content to html page
 * @param {Array} menu - array of dishes
 */

const renderMenu = (menu) => {
  const menuBox = document.querySelector('.menu-box');
  menuBox.innerHTML ='';
 const list = document.createElement('ul');
 for(const dish of menu ){
  const li = document.createElement('li');
  li.textContent = dish;
  list.append(li);
 }
 menuBox.append(list);
};

renderMenu(activeMenu);

/**
 * Sorts menu alphanpetically
 * @param {Array} menu - Array of dishes
 * @param {string} order  - 'asc' or 'desc'
 * @returns sorted menu array
 */
const sortMenu = (menu, order='asc') => {

   menu.sort();
   if (order === 'desc'){
     menu.reverse();
   }
    return menu;
   };

   /**
    * Change UI language
    * @param {*}  value
    */


   const enLang = document.querySelector('#en-button');
   const fiLang = document.querySelector('#fi-button');
   enLang.addEventListener('click', () => {
    let value = enLang.value;
     console.log(value);

      renderMenu(coursesEn);
    } );
    fiLang.addEventListener('click', () => {
      let value = fiLang.value;
      console.log(value);

       renderMenu(coursesFi);
     } );




    /**
     * Get a random dish item from an array
     * @param {*} menu  - Array of dishes
     * @returns Random dish item
     */

   const getRandomDish = (menu) => {
     const randomIndex = Math.floor(Math.random() * menu.length);
     return menu[randomIndex];
   };



  const sortButton = document.querySelector('#sort-button');
  sortButton.addEventListener('click', () => {
   renderMenu(sortMenu(activeMenu)) ;
  });


   // TODO: Add a button for changing the language of the menu

   // TODO: Add a button that picks a random dish from the array and displays it
