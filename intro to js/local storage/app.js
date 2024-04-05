//local storage
// => access the local storage
// setItem => saving the values
//getItem => read the values

//localStorage.setItem('name','yash');

//console.log(localStorage.getItem('name'));

let storageName = localStorage.getItem('name');
localStorage.removeItem('name');
console.log(storageName);