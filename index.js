let choices = ["rock", "paper", "scissor"];
let scoreInner = document.getElementsByClassName("score")[0];
let infoInner = document.getElementsByClassName("info")[0];
let rock_hand_player = document.getElementsByClassName("rock_hand")[0];
let paper_hand_player = document.getElementsByClassName("paper_hand")[0];
let scissor_hand_player = document.getElementsByClassName("scissor_hand")[0];
let rock_hand_PC = document.getElementsByClassName("rock_hand_PC")[0];
let paper_hand_PC = document.getElementsByClassName("paper_hand_PC")[0];
let scissor_hand_PC = document.getElementsByClassName("scissor_hand_PC")[0];
console.log(rock_hand_PC, paper_hand_PC, scissor_hand_PC);
let playerSelection = "";
let score = { player: 0, computer: 0 };
let computerSelection = getComputerChoice();
let finished = false;

document.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName.toLowerCase() === "button") {
      if (e.target.classList[0] !== "reset") {
        computerSelection = getComputerChoice();
        playerSelection = e.target.classList[0];
        if (!finished) {
          infoInner.innerHTML = playRound(playerSelection, computerSelection);
          scoreInner.innerHTML = `Score You: ${score["player"]} | Computer: ${score["computer"]}`;
          if (playerSelection === "rock") {
            rock_hand_player.style.transform =
              "rotateZ(90deg) translateY(-100%)";
            paper_hand_player.style.transform = "translateX(-210%)";
            scissor_hand_player.style.transform = "translateX(-300%)";
          } else if (playerSelection === "paper") {
            rock_hand_player.style.transform =
              "rotateZ(90deg) translateY(100%)";
            paper_hand_player.style.transform = "translateX(-10%)";
            scissor_hand_player.style.transform = "translateX(-300%)";
          } else {
            rock_hand_player.style.transform =
              "rotateZ(90deg) translateY(100%)";
            paper_hand_player.style.transform = "translateX(-210%)";
            scissor_hand_player.style.transform = "translateX(-100%)";
          }

          if (computerSelection === "rock") {
            rock_hand_PC.style.transform = "rotateZ(-90deg) translateY(100%)";
            paper_hand_PC.style.transform = "rotateY(180deg) translateX(-210%)";
            scissor_hand_PC.style.transform =
              "rotateY(180deg) translateX(-100%)";
          } else if (computerSelection === "paper") {
            rock_hand_PC.style.transform = "rotateZ(-90deg) translateY(310%)";
            paper_hand_PC.style.transform = "rotateY(180deg) translateX(-10%)";
            scissor_hand_PC.style.transform =
              "rotateY(180deg) translateX(-100%)";
          } else {
            rock_hand_PC.style.transform = "rotateZ(-90deg) translateY(310%)";
            paper_hand_PC.style.transform = "rotateY(180deg) translateX(-210%)";
            scissor_hand_PC.style.transform =
              "rotateY(180deg) translateX(100%)";
          }
        }
        resetWinner();
      } else {
        rock_hand_PC.style.transform = "rotateZ(-90deg) translateY(310%)";
        paper_hand_PC.style.transform = "rotateY(180deg) translateX(-210%)";
        scissor_hand_PC.style.transform = "rotateY(180deg) translateX(-100%)";

        rock_hand_player.style.transform = "rotateZ(90deg) translateY(100%)";
        paper_hand_player.style.transform = "translateX(-210%)";
        scissor_hand_player.style.transform = "translateX(-300%)";
        score["computer"] = 0;
        score["player"] = 0;
        finished = false;
        scoreInner.innerHTML = `Score You: ${score["player"]} | Computer: ${score["computer"]}`;
        infoInner.innerHTML = "Your Turn!";
      }
    }
  },
  false
);

function resetWinner() {
  if (score["player"] === 5) {
    infoInner.innerHTML = `You won! ${score["player"]} - ${score["computer"]}`;
    finished = true;
  } else if (score["computer"] === 5) {
    infoInner.innerHTML = `Computer won :( ${score["computer"]} - ${score["player"]}`;
    finished = true;
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Tie: ${playerSelection} vs ${computerSelection}`;
  } else {
    if (playerSelection === "rock" && computerSelection === "paper") {
      score["computer"]++;
      return `Computer wins :( Paper beats rock.`;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
      score["player"]++;
      return `You won! Paper beats rock!`;
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
      score["player"]++;
      return `You won! Rock beats Scissors!`;
    } else if (computerSelection === "rock" && playerSelection === "scissor") {
      score["computer"]++;
      return `Computer wins :( Rock beats Scissors.`;
    } else if (computerSelection === "paper" && playerSelection === "scissor") {
      score["player"]++;
      return `You won! Scissors beats Paper!`;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      score["computer"]++;
      return `Computer wins :( Scissors beats Paper.`;
    }
  }
}
