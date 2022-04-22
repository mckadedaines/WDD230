// SEQUENCE
// variables and the Date object

let date = new Date();
let year = date.getFullYear();

// Selecting element in HTML and DOM manipulation
document.querySelector('h1').textContent = year;

document.querySelector('div').innerHTML = '<h2>Subtitle</h2>';

let newpara = document.createElement('p');
newpara.textContent = 'This is my paragraph';

document.querySelector('img').setAttribute('src', 'images/dog.jpg');
document.querySelector('img').setAttribute('width', '400');

document.querySelector("img").classList.add("add_border");

// Funtions
function addayaer(yr) {
    console.log(yr);
}

addayaer(year);

// SELECTION

// if clause

if (year == 2022) {
    console.log("current year");
}

// REPETITION (loops)

const myarray = ["CSE121b", "WDD230", "CIT111"];

function makelist(item) {
    document.querySelector("div").innerHTML += "<li>" +
    item + "</li>"
}

myarray.forEach(makelist);

// this is all you need with JS for Week 1

// lastModified property that works with document

let currentdate = document.lastModified;

document.querySelector("#lastdate").textContent = currentdate;

console.log(currentdate);