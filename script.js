// -----------------------------------------
//  Part 1: JavaScript Basics
// -----------------------------------------

// Variable declarations and conditionals
let userName = "";
let greetingMessage = "";

// Function to capture input and respond
document.getElementById("greetBtn").addEventListener("click", function () {
  userName = document.getElementById("nameInput").value;

  // Conditional check
  if (userName.trim() === "") {
    greetingMessage = "Please enter a valid name.";
  } else {
    greetingMessage = `Hello, ${userName}! Welcome to the JavaScript Basics Project.`;
  }

  // Output result
  document.getElementById("greetingOutput").textContent = greetingMessage;
});


// -----------------------------------------
// Part 2: JavaScript Functions
// -----------------------------------------

// Custom function #1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Custom function #2: Format a string
function formatString(str) {
  return str.trim().toUpperCase();
}

// Using functions
console.log("Add 5 + 10 =", addNumbers(5, 10)); // 15
console.log("Formatted String:", formatString("  hello world  ")); // "HELLO WORLD"


// -----------------------------------------
// Part 3: JavaScript Loops
// -----------------------------------------

// Loop #1: Countdown using while loop
document.getElementById("countdownBtn").addEventListener("click", function () {
  let output = "";
  let count = 5;
  while (count > 0) {
    output += count + " ";
    count--;
  }
  output += "Blast off!";
  document.getElementById("countdownOutput").textContent = output;
});

// Loop #2: Iterating through array with forEach
const items = ["JavaScript", "HTML", "CSS"];
document.getElementById("addItemsBtn").addEventListener("click", function () {
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // Clear previous
  items.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});