const home1 = document.getElementById("home");
const home2 = document.querySelector("#home");

const li = document.querySelector('li[data-direction]');
console.log('Li z atrybutem data-direction zaraz poniej w consol logu')
console.log(li);

const blockClass = document.querySelector(".block");
console.log('Pierwszy element o klasie block console logu')
console.log(blockClass);

home1.style.backgroundColor = "#FF8C00";
home2.style.backgroundColor = "#00BFFF"; 
li.style.backgroundColor = "yellow";
blockClass.style.backgroundColor = "green";