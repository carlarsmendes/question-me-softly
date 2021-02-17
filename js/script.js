//Import all the types and respective colors
import { colorsData } from './colorsData.js';
//Import all the questions
import { questions } from './questionsData.js';

let questionArray = [...questions];
//An array with only the colors
let colorsArray = colorsData.map(colorObject=> colorObject.color);

var ul = document.getElementById("cards");

//Random background color for the first opening slide
let openingSlide = document.getElementById("startingQuestion");
let randomColorIndex = Math.floor(Math.random() * colorsArray.length);
openingSlide.parentNode.style.backgroundColor = colorsArray[randomColorIndex];
openingSlide.style.color = getContrastYIQ(`${colorsArray[randomColorIndex]}`);

/* Functionality on click */
document.querySelector('#cards').onclick = () => {

    //Make sure to always remove the previous slide, or li, on click
    let firstLI = document.getElementsByTagName("li")[0];
    firstLI.remove();
    
    //Get a random element from the questions array
    let randomSlideNumber = Math.floor(Math.random() * questionArray.length); //returns integer from 0 to 9

    let li = document.createElement('li');// Create a <li> element
    let question = document.createTextNode(questionArray[randomSlideNumber].question);// Create a text node
    li.appendChild(question);
    ul.appendChild(li);

    let h4 = document.createElement("H4");             // Create a <h4> element
    let questionType = document.createTextNode(questionArray[randomSlideNumber].type);     // Create a text node
    h4.appendChild(questionType); 
    li.appendChild(h4);

    let typeText = document.getElementsByTagName("H4")[0].innerHTML;

    //Match question type with question color
    colorsData.forEach( colorCombo =>  {
          
            if (typeText === colorCombo.type){
                li.parentNode.style.backgroundColor = `${colorCombo.color}`;
                li.style.color = getContrastYIQ(`${colorCombo.color}`);
            }
            }
    );

}


//For the help modal - Changes from '?' to '-' on click
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

//From Stack Overflow - Get contrast right depending on color
//Outputs white or black for font color

function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}





