const target = document.querySelector(".targetDiv");
const body = document.querySelector("body");
const field = document.querySelector(".playField");
const buttonPlay = document.querySelector(".PLAY");
//setting username 
const username = document.querySelector('.Username')
username.textContent = prompt("Your Name ?")
const score = document.querySelector(".score");
let scoreNumber = 0;

const winWidth = field.offsetWidth;
const winHeight = field.offsetHeight;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function getFlipNumber(){
  if(getRandomNumber(0,50)>25){
    return 1
  }
else
    return 0
  
}
//Function for clicking on targets
field.addEventListener("mousedown", deleteDiv);
function deleteDiv(e) {
  if (e.target.id === "badWasp") {
    e.target.remove();
    scoreNumber++;
    console.log(e.target);
    score.textContent = scoreNumber;
  }
  if (e.target.id === "goodBee") {
    console.log("Nothing");
    e.target.remove();
    scoreNumber--;
    console.log(e.target);
    score.textContent = scoreNumber;
  }
}
//Function for generatin Divs
buttonPlay.addEventListener("mousedown", () => {
  let timer = 60;
  function generateDiv() {
    const newTarget = document.createElement("div");
    newTarget.className = "targetDiv";
    const broj = getRandomNumber(0, 50);
    //Odds for new div to be a bee
    if (broj > 35) {
      newTarget.id = "goodBee";
      newTarget.style.backgroundColor = "transparent";
      setTimeout(() => {
        newTarget.remove();
      }, 8000);
    }
    //Odds for new div to be a wasp
    if (broj <= 35) {
      newTarget.id = "badWasp";
      setTimeout(() => {
        newTarget.remove();
      }, 2000);
    }
    //Generating and assigning top and left position to generated divs and appending it to field div
    const topPosition = getRandomNumber(60, winHeight);
    const leftPosition = getRandomNumber(0, winWidth - 100);
    const rotatePosition = Math.round(getRandomNumber(0,180))
    const flipPostition = getFlipNumber()
    newTarget.style.transform = `scaleX(${flipPostition})`
    newTarget.style.transform = `rotate(${rotatePosition}deg)`;
    newTarget.style.top = topPosition + "px";
    newTarget.style.left = leftPosition + "px";
    field.appendChild(newTarget);
    //When timer hits 0-> Stop the game and reset values to default
    if(timer===0){
    clearInterval(interval);
    clearInterval(intervalSceonds)
    alert("Your score is " + score.textContent);
    buttonPlay.textContent = "PLAY"
    score.textContent = 0
    const allChildren = document.querySelectorAll('.targetDiv')
    allChildren.forEach(
      function(node, index) {
        node.remove()
      }
    );
    }
  }
  
  const interval = setInterval(generateDiv, 800);
  const intervalSceonds = setInterval(()=>{
     timer--;
    buttonPlay.textContent = timer;
  },1000)
});
