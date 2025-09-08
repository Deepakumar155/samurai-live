// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});
// Random Video Button 🎲
const randomBtn = document.getElementById("randomBtn");

// Add your video links here
const videos = [
  "https://www.youtube.com/watch?v=2fFQiYFtR-M",
  "https://www.youtube.com/watch?v=No6EeSB6Ipg",
  "https://www.youtube.com/watch?v=HuXvCJqHK4E",
  "https://www.youtube.com/watch?v=TowyAwlpnVI",
  "https://youtu.be/DfkpHkZ1ttI?si=7SkGXb7kjrtMa5Ma",
  "https://youtu.be/JOrsH83g2-c?si=lwBm8ESwTDXl8yXZ",
  "https://youtu.be/8_S4r0ymOfI?si=fUk9xHojMqIudDPi",
  "https://youtu.be/JYGq23MlRao?si=DpTomNKy7SiOtALd"
];

randomBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * videos.length);
  window.open(videos[randomIndex], "_blank");
});

