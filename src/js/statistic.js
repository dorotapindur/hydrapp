
import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const counterElement = document.querySelector('.counter--js');
const dateListElement = document.querySelector('.list--js');
//local storage content put into table
const storageKeys = Object.keys(localStorage);
const storageValues = Object.values(localStorage);


for (let i=0; i<storageKeys.length; i++) { 
    
    if ((storageKeys[i].indexOf(2020) != -1) || (storageKeys[i].indexOf(2021) != -1)) {
        const liItem = document.createElement('li');
        dateListElement.appendChild(liItem);
        liItem.innerHTML = storageKeys[i];

        const liItemGlass = document.createElement('li');
        counterElement.appendChild(liItemGlass);
        let quantity = storageValues[i];
        let a = 0;
        const time = setInterval(function() {
            liItemGlass.innerHTML = a;
            if (a >= quantity) {
                clearInterval(time);
            }
            a++;
        }, 50);  
    }
}   