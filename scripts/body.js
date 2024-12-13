// Select the button
const themeToggleButton = document.getElementById("theme-toggle");

// Function to toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); // Save preference
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); // Save preference
  }
}

// Add event listener to the button
themeToggleButton.addEventListener("click", toggleTheme);

// Preserve the user's theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"; // Default to light
  document.documentElement.setAttribute("data-theme", savedTheme);
});
