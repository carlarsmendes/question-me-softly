let questionArray = [
    "What’s your favorite way to spend a day off?",
    "What was the best vacation you ever took and why?",
    "What was your favorite age growing up?",
    "What's the best joke you've ever heard?",
    "Is there any product that you couldn't live without?",
    "If you could have any exotic animal as a pet, which would it be?",
    "How would your 10-year-old self react to what you do now?",
    "What’s the worst career decision you’ve ever made?", "What do you think about workaholics?"
];

let colorsArray = ["#1B75BC", "#2CA58D", "#84BC9C", "#FFFDF7", "#7E2E84"];

var ul = document.getElementById("cards");


for (let i = 0; i < questionArray.length; i++) {

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(questionArray[i]));
    ul.appendChild(li);
}

//lis.style.display = "none";

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

        child = document.querySelector('.parent>li:nth-child(' + random + ')');
        //console.log("child here",child);
        if (child) {
            //console.log(child);
            child.style.display = "inline";
        }


    }
}


let questionMark = document.querySelector('#questionMark');

questionMark.onclick = () => {

    let helpModal = document.querySelector('#helpModal');


    if (questionMark.classList.contains('showModal')) {
        questionMark.classList.remove('showModal');
        helpModal.style.display = "none";

    } else {
        questionMark.classList.add('showModal');
        helpModal.style.display = "inline";
    }

}


