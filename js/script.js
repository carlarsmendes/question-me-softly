import { colorsData } from './colorsData.js';
import { questions } from './questionsData.js';

/*
let questionArray = [
    "What’s your favorite way to spend a day off?",
    "What was the best vacation you ever took and why?",
    "What was your favorite age growing up?",
    "What's the best joke you've ever heard?",
    "Is there any product that you couldn't live without?",
    "If you could have any exotic animal as a pet, which would it be?",
    "How would your 10-year-old self react to what you do now?",
    "What’s the worst career decision you’ve ever made?", "What do you think about workaholics?"
];*/

let questionArray = [...questions];

let colorsArray = ["#1B75BC", "#2CA58D", "#84BC9C", "#FFFDF7", "#7E2E84"];

var ul = document.getElementById("cards");


for (let i = 0; i < questionArray.length; i++) {

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(questionArray[i].question));
    ul.appendChild(li);
    var h = document.createElement("H4");             // Create a <h1> element
    var t = document.createTextNode("- " + questionArray[i].type + " -");     // Create a text node
    h.appendChild(t); 
    li.appendChild(h);
}


let randomSlideNumber = Math.floor(Math.random() * questionArray.length); //returns integrer from 0 to 9


document.querySelector('#cards').onclick = () => {


    var lis = document.getElementById("cards").getElementsByTagName(
        "li");


    [...lis].forEach(element => { element.style.display = "none"; })

    let parentSelector = document.querySelector('#cards');
    // we want to make sure we get a random number between 1 and the number of child.

    if (parentSelector.childElementCount === 1) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode("You reached the end of the game!"));
        ul.appendChild(li);
        li.style.display = "inline";
    }
    else {
        parentSelector.removeChild(parentSelector.childNodes[0]);

        let random = Math.floor(1 + Math.random() * parentSelector.childElementCount);

        let child = document.querySelector('.parent>li:nth-child(' + random + ')');
        
        if (child) {
            //console.log(child);
            child.style.display = "inline";
        }


    }
};


let questionMark = document.querySelector('#questionMark');

questionMark.onclick = () => {

    let helpModal = document.querySelector('#helpModal');


    if (questionMark.classList.contains('showModal')) {
        questionMark.classList.remove('showModal');
        helpModal.style.display = "none";
        questionMark.innerHTML = "?";

    } else {
        questionMark.classList.add('showModal');
        helpModal.style.display = "flex";
        questionMark.innerHTML = "x";
    }

};

//Gotten from Stack Overflow
function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}




