// Activity: If Else If Activity

// Prompt the user to input their score
let score = prompt("Enter your score:");

// Convert input to a number
score = Number(score);

// Assign grades based on the score
if (score >= 90) {
    console.log("Your grade is: Excellent.");
} else if (score >= 80 && score <= 89) {
    console.log("Your grade is: Good.");
} else if (score >= 70 && score <= 79) {
    console.log("Your grade is: Fair.");
} else {
    console.log("Your grade is: Needs Improvement.");
}
