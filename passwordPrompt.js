// Activity: Do-While Loop Activity

// Hardcoded correct password
const correctPassword = "correctPassword";
let userPassword = "";

// Do-while loop to keep asking for the password until the correct one is entered
do {
    // Prompt the user to enter a password
    userPassword = prompt("Enter your password:");

    // Check if the entered password is correct
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);

// Once the correct password is entered, log success
console.log("Access granted.");
