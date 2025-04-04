// Activity: Switch Statement Activity

// Prompt the user to enter a day of the week
let day = prompt("Enter a day of the week:");

// Assign tasks based on the day
switch (day) {
    case "Monday":
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case "Tuesday":
        console.log("Your task for Tuesday is: Attend team meetings.");
        break;
    case "Wednesday":
        console.log("Your task for Wednesday is: Work on project development.");
        break;
    case "Thursday":
        console.log("Your task for Thursday is: Review and debug code.");
        break;
    case "Friday":
        console.log("Your task for Friday is: Prepare for presentations.");
        break;
    case "Saturday":
        console.log("Your task for Saturday is: Complete pending work and relax.");
        break;
    case "Sunday":
        console.log("Your task for Sunday is: Plan for the upcoming week.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}

