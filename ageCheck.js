// Activity: If Statement Activity

// Prompt the user to enter their age
let age = prompt("Enter your age:");

// Convert input to a number
age = Number(age);

// Determine the age category using if-else statements
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
