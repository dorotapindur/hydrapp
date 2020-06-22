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

const storage = localStorage;
console.log(storage);
console.log(storage.loglevel);


const myArray = JSON.stringify(storage);
console.log(myArray);


