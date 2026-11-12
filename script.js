const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
const phrases = ["AI & engineering.", "machine learning.", "real-world problems."];
let phraseIndex = 0;
const rotatingText = document.getElementById("rotatingText");
setInterval(() => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  rotatingText.style.opacity = "0";
  setTimeout(() => {
    rotatingText.textContent = phrases[phraseIndex];
    rotatingText.style.opacity = "1";
  }, 180);
}, 2600);
rotatingText.style.transition = "opacity .18s ease";
