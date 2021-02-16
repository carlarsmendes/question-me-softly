import { colorsData } from './colorsData.js';
import { questions } from './questionsData.js';

let questionArray = [...questions];

//let colorsArray = ["#1B75BC", "#2CA58D", "#84BC9C", "#FFFDF7", "#7E2E84"];

var ul = document.getElementById("cards");


document.querySelector('#cards').onclick = () => {

    let firstLI = document.getElementsByTagName("li")[0];
    firstLI.remove();

    let randomSlideNumber = Math.floor(Math.random() * questionArray.length); //returns integrer from 0 to 9

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(questionArray[randomSlideNumber].question));
    ul.appendChild(li);
    var h4 = document.createElement("H4");             // Create a <h1> element
    var question = document.createTextNode(questionArray[randomSlideNumber].type);     // Create a text node
    h4.appendChild(question); 
    li.appendChild(h4);

    let typeText = document.getElementsByTagName("H4")[0].innerHTML;


    colorsData.forEach(
        colorCombo =>  {
            
            if (typeText === colorCombo.type){
                li.parentNode.style.backgroundColor = `${colorCombo.color}`;
                li.style.color = getContrastYIQ(`${colorCombo.color}`);
            }
            }
    );

}



//For the help modal
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

//Gotten from Stack Overflow - Get contrast right depending on color
//Result is white or black
function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}
let allCards = document.querySelectorAll("li");





