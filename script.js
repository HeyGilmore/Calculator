// Creation of Enter BTN
const EnterBTN = document.querySelector("#enterBTN");
// Capture all Number & Operators Buttons
let allButtons = document.querySelectorAll(".button");

// SHOWCASE
let showcaseSection = document.querySelector("#showcaseSection");
// Create the header Section
const header = document.createElement("header");
// Create class for header section
header.classList.add("headerSection");
// Creation of Header
const heading = document.createElement("h1");
heading.textContent = "Does this work?";
// Append the heading to the header
header.appendChild(heading);
// Append the header to the showcase section
showcaseSection.appendChild(header);

//-- Global: All Values
let value1 = null;
let value2 = null;
let equation = null;
let results = 0;
let userInput = "";

//-- Loop through all buttons
allButtons.forEach((eachBTN) => {
  eachBTN.addEventListener("click", (e) => {
    e.preventDefault(); // Ensure the default behavior is prevented

    userInput = eachBTN.textContent;
    heading.textContent += userInput; // Display user input in the header

    if (
      value1 === null &&
      eachBTN.classList.contains("num") &&
      equation === null
    ) {
      value1 += Number(eachBTN.textContent);
      showCase(value1);
    } else if (
      value2 === null &&
      eachBTN.classList.contains("num") &&
      equation !== null
    ) {
      value2 += Number(eachBTN.textContent);
      alert(`The second value is: ${value2}`);
      showCase(value1, equation, value2);
    } else if (
      equation === null &&
      eachBTN.classList.contains("operator") &&
      value2 === null &&
      value1 !== null
    ) {
      equation = eachBTN.textContent;
      alert(`The equation value is: ${equation}`);
      showCase(value1, equation);
    }
  });
});

let showCase = (val1 = "", equ = "", val2 = "") => {
  // Update the heading text with the current equation state
  heading.textContent = `${val1} ${equ} ${val2}`;
  // Append the heading to the header
  header.appendChild(heading);
};

EnterBTN.addEventListener("click", (e) => {
  e.preventDefault(); // Ensure the default behavior is prevented

  if (equation === "+") {
    results = value1 + value2;
  } else if (equation === "-") {
    results = value1 - value2;
  } else if (equation === "x") {
    results = value1 * value2;
  } else if (equation === "/") {
    if (value2 !== 0) {
      results = value1 / value2;
    } else {
      results = "Error: Division by zero";
    }
  } else {
    results = "Please enter a proper operator";
  }

  alert(`Results are: ${results}`);
  heading.textContent = `${results}`; // Display result in the heading
  header.appendChild(heading);

  //-- Global: Reset All Values
  value1 = null;
  value2 = null;
  equation = null;
  results = 0;
});
