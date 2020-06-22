import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const counter = document.querySelector('.counter--js');
const addDate = document.querySelector('.date--js');

let quantity = 0;

const key = new Date().toISOString().slice(0, 10);//key jest stringiem
console.log(`${key}`);

addDate.innerHTML = `${key}`;

//checking local storage
let entry = localStorage.getItem(key);//entry jest stringiem
 if (entry) {
    quantity = JSON.parse(entry);//zamienia string na number
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
 }