document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const storedTheme = localStorage.getItem("theme");

  // Apply saved theme
  if (storedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "light_mode";
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.textContent = "dark_mode";
  }

  toggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
