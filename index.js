

window.onload = function () {
    chance();
};
let MyScore = 0;
let pcScore = 0;

const userScore_b = document.getElementById("my-score");
const computerScore_b = document.getElementById("pc-score");

const scoreBoard_div = document.querySelector(".container");
const stone_div = document.getElementById("stone");

const paper_div = document.getElementById("ppr");
const scissors_div = document.getElementById("sci");



const chance = () => {
    const MyScore = localStorage.getItem("MyScore");
    const pcScore = localStorage.getItem("pcScore");

    if (MyScore == null) {
    localStorage.setItem("MyScore", 0);
localStorage.setItem("pcScore", 0);
    } else {
userScore_b.innerText = MyScore;
computerScore_b.innerText = pcScore;
    }
};

function PcChoice() {
    const arr = ["stone", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return arr[random];
}

function convertCase(anything) {
    if (anything === "paper") return "Paper";
    if (anything === "scissors") return "Scissors";
    return "stone";
}

function win(user, computer) {
    let score = localStorage.getItem("MyScore");
    console.log(score);
    score++;
    localStorage.setItem("MyScore", score);
    userScore_b.innerText = score;
    window.location.href = "second.html";
}

function loses(user, computer) {
    let score = localStorage.getItem("pcScore");
    console.log(score);
    score++;
    localStorage.setItem("pcScore", score);
    userScore_b.innerText = score;
    computerScore_b.innerHTML = pcScore;
    window.location.href = "Third.html";
}

function draw(user, computer) {
window.location.href = "fourth.html";
}

function game(userChoice) {
    const computerChoice = PcChoice();

switch (userChoice + computerChoice) {
case "paperstone":
case "stonescissors":
case "scissorspaper":
win(userChoice, computerChoice);

break;
case "stonepaper":
case "scissorsstone":
case "paperscissors":
loses(userChoice, computerChoice);

break;
case "stonestone":
case "scissorsscissors":
case "paperpaper":
draw(userChoice, computerChoice);
console.log("draw");
break;
}
}

function Game() {
    stone_div.addEventListener("click", () => game("stone"));
    paper_div.addEventListener("click", () => game("paper"));
    scissors_div.addEventListener("click", () => game("scissors"));
}
Game();

let rule = document.getElementById("frame-image");
document.getElementById("close-tab").classList.remove("rules");
let close =  document.getElementById("close");
close.addEventListener("click",function(){
    let rule = document.getElementById("frame-image");
 rule.style.display = "none";
 close.style.display = "none";
})