// Access elements
const button = document.getElementById("clickBtn");
const input = document.getElementById("textInput");
const dropdown = document.getElementById("dropdown");
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const output = document.getElementById("output");
const hoverBox = document.getElementById("hoverBox");

// 4.2 Click Event
button.addEventListener("click", () => {
  output.textContent = "Button was clicked!";
});

// 4.3 Input Event
input.addEventListener("input", () => {
  output.textContent = "Typing: " + input.value;
});

// Change Event
dropdown.addEventListener("change", () => {
  output.textContent = "Selected: " + dropdown.value;
});

// 4.4 Submit Event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.textContent = "Form submitted! Name: " + nameInput.value;
});

// 4.5 Keyup Event
input.addEventListener("keyup", (e) => {
  output.textContent = "Last key: " + e.key;
});

// 4.6 Mouseover / Mouseout
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "Blue";
  output.textContent = "Mouse entered box";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "lightgray";
  output.textContent = "Mouse left box";
});

// 4.7 Focus / Blur
input.addEventListener("focus", () => {
  input.style.background = "#e0f7ff";
});

input.addEventListener("blur", () => {
  input.style.background = "white";
});