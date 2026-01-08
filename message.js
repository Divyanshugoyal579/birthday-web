const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");
const typingEl = document.getElementById("typing");

// Customize this message for Afrah
const message = [
  "Happy Birthday, Afrah 🎉",
  " You bring fun, smiles, and good vibes everywhere you go 😄",
  "You light up every room you walk into,",
  "and today is all about celebrating you. 💙",
  "",
  "Scroll with your heart and unwrap more memories. 🎀"
].join("\n");

let index = 0;

function typeMessage() {
  if (index <= message.length) {
    typingEl.textContent = message.slice(0, index);
    index++;
    setTimeout(typeMessage, 55); // speed
  }
}

function toggleMusic() {
  if (!bgMusic) return;

  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
    musicBtn.classList.add("active");
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("active");
  }
}

// Start typing when page loads
window.addEventListener("load", typeMessage);
