
import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const counterElement = document.querySelector('.counter--js');
const ulElement = document.querySelector('.list--js');


//local storage content put into table

const storageKeys = Object.keys(localStorage);

for (let i=0; i<storageKeys.length; i++) { 
    
    if (storageKeys[i].indexOf(2020 || 2021) != -1) {
    const liItem = document.createElement('li');
    ulElement.appendChild(liItem);
    liItem.innerHTML = storageKeys[i];
    }
}   

const storageValues = Object.values(localStorage);

for (let u=0; u<storageValues.length; u++) {
    if (storageValues[u] != 'INFO') {
        const liItemGlass = document.createElement('li');
        counterElement.appendChild(liItemGlass);
        let quantity = storageValues[u];
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
