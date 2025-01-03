// Prompt for the max number and ensure it's a valid integer
let max = prompt("Enter the max number");

while (isNaN(max) || max <= 0) {
    max = prompt("Please enter a valid positive number for the max number.");
}

// Generate a random number between 1 and max
const random = Math.floor(Math.random() * max) + 1;

// Start the guessing loop
let guess = prompt("Guess the number");

while (true) {
    // If the user types "quit", end the game
    if (guess.toLowerCase() === "quit") {
        console.log("User quit");
        break;
    }

    // Ensure the guess is a number
    guess = Number(guess);
    
    if (isNaN(guess)) {
        guess = prompt("Please enter a valid number or 'quit' to exit.");
        continue;
    }

    // Check if the guess is correct, too small, or too large
    if (guess === random) {
        console.log("You are right! Congrats!!");
        break;
    } else if (guess < random) {
        guess = prompt("Your guess was too small. Please try again.");
    } else {
        guess = prompt("Your guess was too large. Please try again.");
    }
}
