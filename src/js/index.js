import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const counter = document.querySelector('.counter--js');

const addButton = document.querySelector('.add--js');

const removeButton = document.querySelector('.remove--js');

const addDate = document.querySelector('.date--js');

let quantity = 0;

const key = new Date().toLocaleString().slice(0, 10);//key jest stringiem
console.log(`${key}`);



//checking local storage
let entry = localStorage.getItem(key);//entry jest stringiem
 if (entry) {
    quantity = parseInt(entry);//zamienia string na number
    //increasing counter while loading page
    let i = 0;
    const time = setInterval(function() {       
        counter.innerHTML = `${i}`;
        console.log(`licznik: ${i}`);
        if (i >= quantity) {
            clearInterval(time);
        }
        i++;
    }, 50);
    console.log(`ilość szklanek = ${quantity}`);
 }
 else {
    counter.innerHTML = `${quantity}`;
    console.log(`ilość szklanek = ${quantity}`);
    localStorage.setItem(key, quantity);
 }

if (quantity > 0) {
    let water = document.querySelector('.water--js');
    water.style.setProperty('display', 'block');
}


//add button

addButton.addEventListener('click', function(e) {
    quantity = quantity + 1;//można zrobić quantity++, wtedy nie trzeba wcześniej zamieniać stringa na number, tylko dzieje się to automatycznie
    counter.innerHTML = `${quantity}`;
    console.log(`Dodano 1 szklankę. Ilość szklanek = ${quantity}`);
    localStorage.setItem(key, quantity);
    //adding animated water svg path - from https://css-tricks.com/restart-css-animation/
    let water = document.querySelector('.water--js');
    water.classList.remove('water-animation-remove');
    water.classList.remove('water-animation-disappear');
    water.classList.add('water-animation-add');
    let newone = water.cloneNode(true);
    water.parentNode.replaceChild(newone, water);  
})


removeButton.addEventListener('click', () => {
    if (quantity > 0) {
    quantity = quantity - 1;
    counter.innerHTML = `${quantity}`;
    console.log(`Odjęto 1 szklankę. Ilość szklanek = ${quantity}`);
    localStorage.setItem(key, quantity);
        if (quantity == 0) {
            let water = document.querySelector('.water--js');
            water.classList.remove('water-animation-remove');
            water.classList.remove('water-animation-add');
            water.classList.add('water-animation-disappear');
        }
        else {
            let water = document.querySelector('.water--js'); 
            water.classList.remove('water-animation-add');
            water.classList.add('water-animation-remove');
            let newone = water.cloneNode(true);
            water.parentNode.replaceChild(newone, water); 
        }
    }    
})


