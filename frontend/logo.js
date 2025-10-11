const circle = document.getElementById("circle");
const startBtn = document.getElementById("startBtn");

circle.addEventListener("click", () => {
  circle.classList.toggle("flipped");
});

// Navigate to next page when start button is clicked
startBtn.addEventListener("click", () => {
  window.location.href = "nextpage.html"; // replace with your target page
});
