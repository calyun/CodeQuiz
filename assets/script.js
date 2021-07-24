const startBtn = document.getElementById("startBtn");
let countdown = 60;
let currentQ = 0;

const questions= [
  {
    text: "How are you?",
    choices: ["good", "bad", "great", "terrible"],
    correctAns: "great"
  },
  {
    text: "Where are you?",
    choices: ["good", "bad", "great", "terrible"],
    correctAns: "good"
  },
  {
    text: "Why are you?",
    choices: ["good", "bad", "great", "terrible"],
    correctAns: "bad"
  },
]

function beginQuiz() {
  countdown = 60;
  timerStarts()
  hideAndShowElements()
  currentQ = 0;
  questionChanges()
}

function timerStarts() {
  var gameInterval = setInterval(function(){
    // console.log(countdown)
    countdown--;
    document.getElementById("time").textContent = countdown;

    if(countdown <= 0){
      clearInterval(gameInterval)
      endQuiz();
    }

  }, 1000)
}

function hideAndShowElements(){
  document.getElementById("start").setAttribute("style", "display: none;")
  document.getElementById("questions").setAttribute("style", "display: block;")
}

function questionChanges(){
  document.getElementById("text").textContent = questions[currentQ].text

  let allBtns = document.querySelectorAll(".q1Btn");
  for(i=0; i<allBtns.length; i++){
    allBtns[i].textContent = questions[currentQ].choices[i]
    allBtns[i].addEventListener("click", checkAnswerAndGoUp)
  }
}

function checkAnswerAndGoUp(event) {
  event.preventDefault();

  let choicePicked = event.target.textContent;
  if(choicePicked == questions[currentQ].correctAns){
    score++
  }

  currentQ++;
  if(currentQ < questions.length){
    questionChanges()
  } else {
    endQuiz();
  }
}

let score = 0

function endQuiz() {
  clearInterval(countdown);
  document.getElementById("score").textContent = score;
  document.getElementById("questions").setAttribute("style", "display: none");
  document.getElementById("quizOver").setAttribute("style", "display: block");
}

startBtn.addEventListener("click", beginQuiz);

var scoreArr = [];
if (localStorage.getItem("score")){
  scoreArr = JSON.parse(localStorage.getItem("score"))
}

function saveScore() {
  const intials = document.querySelector("#initials").value;
  var newScore = {
    initials: intials,
    score: score
  }
  scoreArr.push(newScore);
  localStorage.setItem("score", JSON.stringify(scoreArr));
  document.getElementById("quizOver").setAttribute("style", "display: none");
  document.getElementById("scoreboard").setAttribute("style", "display: block");
  for (let i = 0; i < scoreArr.length; i++) {
    let aScore = document.createElement("ul");
    aScore.textContent=((scoreArr[i].initials)+" "+(scoreArr[i].score));
    const scores = document.getElementById("scores");
    scores.appendChild(aScore);
  }
}
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", saveScore);

function restartQuiz() {
  score=0;
  document.getElementById("scoreboard").setAttribute("style", "display: none");
  document.getElementById("start").setAttribute("style", "display: block");
}
const refreshBtn = document.getElementById("goBack");
refreshBtn.addEventListener("click", restartQuiz);

function clear() {
  localStorage.removeItem("score");
}
const clearBtn = document.getElementById("clearHighscores");
clearBtn.addEventListener("click", clear);

//Pause Timer, if you are on scoreboard when timer runs out it shows quiz over page.
//Display Highscores
