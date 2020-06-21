import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const counter = document.querySelector('.counter--js');

const addButton = document.querySelector('.add--js');

const removeButton = document.querySelector('.remove--js');

let quantity = 0;

//checking local storage
let entry = localStorage.getItem('quantity');
 if (entry) {
     quantity = entry;
     document.querySelector('.counter--js').innerHTML = quantity;
     console.log(`ilość szklanek = ${quantity}`);
 }
 else {
    document.querySelector('.counter--js').innerHTML = `${quantity}`;
    console.log(`ilość szklanek = ${quantity}`);
 }

//add button

addButton.addEventListener('click', () => {
    quantity = quantity + 1;
    counter.innerHTML = `${quantity}`;
    console.log(`Dodano 1 szklankę. Ilość szklanek = ${quantity}`);
    localStorage.setItem('quantity', quantity);
})

removeButton.addEventListener('click', () => {
    if (quantity > 0) {
    quantity = quantity - 1;
    counter.innerHTML = `${quantity}`;
    console.log(`Odjęto 1 szklankę. Ilość szklanek = ${quantity}`);
    localStorage.setItem('quantity', quantity);
    }
})
