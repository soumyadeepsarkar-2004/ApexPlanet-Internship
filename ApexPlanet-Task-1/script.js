// Toggle between daylight and evening color palettes to make the page feel alive
const toggleButton = document.getElementById("alertButton");
const statusMessage = document.getElementById("themeStatus");

const messages = {
  day: "Bright daylight mode keeps things fresh.",
  evening: "Evening mode is on—time to unwind and focus."
};

let isEvening = false;

toggleButton.addEventListener("click", () => {
  isEvening = !isEvening;
  document.body.classList.toggle("dark-theme", isEvening);
  toggleButton.textContent = isEvening ? "Switch Back to Daylight" : "Toggle Evening Mode";
  statusMessage.textContent = isEvening ? messages.evening : messages.day;
});
