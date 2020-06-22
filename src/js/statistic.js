const counter = document.querySelector('.counter--js');

const addDate = document.querySelector('.date--js');

const key = new Date().toISOString().slice(0, 10);//key jest stringiem
console.log(`${key}`);
addDate.innerHTML = `${key}`;