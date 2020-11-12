import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const counterElement = document.querySelector('.counter--js');
const dateListElement = document.querySelector('.list--js');

//local storage content put into array
const storageContent = Object.entries(localStorage);

//create array of objects with day, month, year and glass properties
const arrayOfObjects = [];

//fill array of objects
for (let i=0; i<storageContent.length; i++) {
    var oneElement = storageContent[i];
    console.log(oneElement);
    var keyDay = oneElement[0].slice(0,2); 
    var keyMonth = oneElement[0].slice(3,5);
    var keyYear = oneElement[0].slice(6,10);
    var keyGlass = oneElement[1];
    console.log(keyDay, keyMonth, keyYear);
    arrayOfObjects.push({day: keyDay, month: keyMonth, year: keyYear, glass: keyGlass});
}

//sort array of objects by date
var arraySort = require('array-sort');
var sortedStorageContent = arraySort(arrayOfObjects, ['year', 'month', 'day']);
console.log(sortedStorageContent);

for (let i=0; i<sortedStorageContent.length; i++) { 
    
    if ((sortedStorageContent[i].year.indexOf(2020) != -1) || (sortedStorageContent[i].year.indexOf(2021) != -1)) {
        const liItem = document.createElement('li');
        dateListElement.appendChild(liItem);
        liItem.innerHTML = `${sortedStorageContent[i].day}.${sortedStorageContent[i].month}.${sortedStorageContent[i].year}`;
        const liItemGlass = document.createElement('li');
        counterElement.appendChild(liItemGlass);
        //increasing counter while loading page
        let quantity = sortedStorageContent[i].glass;
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