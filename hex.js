// defined array  hex color generator
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// defining html elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// adding event functions to it
btn.addEventListener("click", function () {
  //   defining a variable that has a hashtag(#)
  let hexColor = "#";
  // setting a loop that runs random values
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getColorRandom()];
    console.log(hexColor);
  }

  //   accessing and displaying the color on Webpage
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// setting function that will generate random colors
function getColorRandom() {
  return Math.floor(Math.random() * hex.length);
}
