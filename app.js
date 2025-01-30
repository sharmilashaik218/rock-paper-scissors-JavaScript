// script.js

// Step 1: Initialize Scores
let userScore = 0; // User's score starts at 0
let compScore = 0; // Computer's score starts at 0

// Step 2: Select necessary DOM elements
const choices = document.querySelectorAll(".choice"); // Choices (rock, paper, scissors)
const msg = document.querySelector("#msg"); // Message to display result
const userScorePara = document.querySelector("#user-score"); // User's score display
const compScorePara = document.querySelector("#comp-score"); // Computer's score display

// Step 3: Function to generate a random choice for the computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Choices for the computer
    const randIdx = Math.floor(Math.random() * 3); // Random index (0-2)
    return options[randIdx]; // Return computer's choice
};

// Step 4: Function to handle draw game
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again."; // Show draw message
    msg.style.backgroundColor = "#081b31"; // Set background color to dark blue
    console.log("Result: Draw"); // Log draw result
};

// Step 5: Function to display the winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) { // User wins
        userScore++; // Increment user's score
        userScorePara.innerText = userScore; // Update displayed score
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; // Win message
        msg.style.backgroundColor = "green"; // Set background color to green
        console.log(`Your Move: ${userChoice}, Computer's Move: ${compChoice}, Result: You win!`);
    } else { // Computer wins
        compScore++; // Increment computer's score
        compScorePara.innerText = compScore; // Update displayed score
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`; // Loss message
        msg.style.backgroundColor = "red"; // Set background color to red
        console.log(`Your Move: ${userChoice}, Computer's Move: ${compChoice}, Result: You lost.`);
    }
};

// Step 6: Function to play the game with user choice and generate computer's choice
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // Generate computer's choice
    console.log(`Your Move: ${userChoice}, Computer's Move: ${compChoice}`); // Log moves

    if (userChoice === compChoice) { // If it's a draw
        drawGame();
    } else { // If there's a winner
        let userWin = true; // Assume user wins by default

        // Step 7: Determine the winner based on the choices
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true; // Paper beats rock
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true; // Scissors beats paper
        } else {
            userWin = compChoice === "rock" ? false : true; // Rock beats scissors
        }

        // Step 8: Display the winner and update scores
        showWinner(userWin, userChoice, compChoice);
    }
};

// Step 9: Add event listeners to each choice element (rock, paper, scissors)
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the id of the clicked choice
        playGame(userChoice); // Call playGame with the user's choice
    });
});
