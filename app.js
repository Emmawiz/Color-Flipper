// defined color arrays
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// defining the html elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// adding event handlers to it with callback function
btn.addEventListener("click", function () {
  // define and set random number from 0 - 3
  const changeNumber = getRandomNumber();
  console.log(changeNumber);
  // attaching the colors to the window background
  document.body.style.backgroundColor = colors[changeNumber];
  //   displaying the color text on window
  color.textContent = colors[changeNumber];
});

// setting up function that will generate random numbers for the backgroundcolor
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
