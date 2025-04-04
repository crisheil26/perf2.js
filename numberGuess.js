// Activity: While Loop Activity

// Generate a random number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

// Start the while loop to keep prompting the user until they guess correctly
while (guess !== correctNumber) {
    // Prompt the user to guess a number
    guess = prompt("Guess a number between 1 and 10:");

    // Provide feedback based on the guess
    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
    }
}

