function makeChoice(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const result = determineWinner(playerChoice, computerChoice);
  
    displayResult(playerChoice, computerChoice, result);
  }
  
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <p>Your choice: ${playerChoice}</p>
      <p>Computer's choice: ${computerChoice}</p>
      <p>${result}</p>
    `;
  }
  