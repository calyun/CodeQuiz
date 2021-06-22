//'Landing' Page
const startHeader = document.createElement("h1");
const headerText = document.createTextNode("Coding Quiz Challenge");
startHeader.appendChild(headerText);

const startParagraph = document.createElement("p");
const paragraphText = document.createTextNode("This is a coding quiz, I suppose. Maximum effort was applied to cheese my way through.")
startParagraph.appendChild(paragraphText);

const startButton = document.createElement("button");
// element.classList.add("startButton");
const start = document.createTextNode("Start");
startButton.appendChild(start);

const element = document.getElementById("game");
element.appendChild(startHeader);
element.appendChild(startParagraph);
element.appendChild(startButton);

document.getElementById("game").lastChild.addEventListener("click", startGame);

function startGame() {
  function clear() {
    console.log("wasuup");
    document.getElementById("game").style.display = "none";
  }
  clear()
  
};

