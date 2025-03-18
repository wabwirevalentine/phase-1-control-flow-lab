function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 2500) {
    return "No can do.";
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (400 < someValue < 2000) {
    return "That will be twenty bucks.";
  }
}

function ternaryCheckCity(someValue) {
  // Write your code here!
  if (someValue === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}
function switchOnCharmFromTip(someValue) {
  // Write your code here!
  if (someValue === "generous") {
    return "Thank you so much.";
  } else if (someValue === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
