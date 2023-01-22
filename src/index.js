

const nameBt = document.getElementById("submit");
nameBt.onclick = ()=> {
let name = $(".inputNumber").val();
 const regexp = /^[A-Z]{1}[a-z]{4,64}[0-9]{1}[()/;,]{1,10}$/;
 let output = regexp.test(name);
 console.log(output);
};

const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

const sortedMenu = menu.sort((a,b) => {
  return a.price - b.price;
});
console.log(sortedMenu);

const filtered = menu.filter(menu=> menu.price < 5);
console.log(filtered);

const maped = menu.map(menu => menu.price*1.15);
console.log(maped);

let guessLeft=10;
let guesscount = 0;

const totalprice = menu.reduce((acc, current) => acc + current.price, 0);
console.log(totalprice);
