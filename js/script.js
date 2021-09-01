//Import all the types and respective colors
import { colorsData } from './colorsData.js';
//Import all the questions
import { questions } from './questionsDataEN.js';

let questionArray = [...questions];
//An array with only the colors
let colorsArray = colorsData.map(colorObject=> colorObject.color);
let typesArray = colorsData.map(data=> data.type);

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
let roundedCircleElements = document.querySelectorAll('.rounded-circle');

roundedCircleElements.forEach((element)=>

    element.onclick = () => {
        
        console.log("click on .round circle");

        let helpModal = document.querySelector('.fullscreen-modal');

        if (element.classList.contains('showModal')) {
            element.classList.remove('showModal');
            helpModal.style.display = "none";

                if( element.classList.contains('filter') ){

                element.innerHTML = "+";
                document.querySelector(".filter-content").style.display="inline";
                
            } else {
                    element.innerHTML = "?";
                    document.querySelector(".help-content").style.display="inline";
                }

        } else {

            element.classList.add('showModal');
            helpModal.style.display = "flex";
            element.innerHTML = "x";

            if( element.classList.contains('filter') ){

                
                document.querySelector(".filter-content").style.display="none";
                
            } else {
                   
                    document.querySelector(".help-content").style.display="none";
                }

        }

    });

    console.log("typesArray", typesArray);

    typesArray.forEach(
        (category) => {
            let checkboxesContainer = document.querySelector(".checkboxes--container");


            let p = document.createElement('p');

            checkboxesContainer.appendChild(p);            
            
            let input = document.createElement('input');// Create n input element
            input.classList.add("checkbox");
            input.type = "checkbox";
            input.id = category;
            //input.label = category;

            let label = document.createElement('label');// Create n input element
            label.for = category;
            label.textContent = category;
            //console.log("input", input.createAttribute("type"));
            //let category = document.createTextNode(type);// Create a text node
            
            //
            //li.appendChild(question);
            p.appendChild(label);
            p.appendChild(input);
            //checkboxesContainer.appendChild(category);

        }
    );
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





