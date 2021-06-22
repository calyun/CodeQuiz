const startHeader = document.createElement("h1");
const headerText = document.createTextNode("Coding Quiz Challenge");
startHeader.appendChild(headerText);

const startParagraph = document.createElement("p");
const paragraphText = document.createTextNode("This is supposed to be a coding quiz.")
startParagraph.appendChild(paragraphText);

const startButton = document.createElement("button");
// element.classList.add("startButton");
const start = document.createTextNode("Start");
startButton.appendChild(start);
startButton.id = "startButton";

//'Landing' Page
function init() {
  const page1 = document.getElementById("game");
  page1.appendChild(startHeader);
  page1.appendChild(startParagraph);
  page1.appendChild(startButton);
}

init();

document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
  function clear() {
    const page1 = document.getElementById("game");
    page1.remove(startHeader);
    page1.remove(startParagraph);
    page1.remove(startButton);
    question1.appendChild(question1Text);
  }

  clear()
  loadPage2
};

const question1 = document.createElement("h1");
const question1Text = document.createTextNode("Question 1!");


function loadPage2() {
  question1.appendChild(question1Text);
  console.log("hi");
}