const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");
const giftBox = document.querySelector(".gift-box");
const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");

let isOpen = false;
let countdownInterval = null;

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

function openGift() {
  if (isOpen) return;

  isOpen = true;
  giftBox.classList.add("open");

  // 5-second countdown before showing the message
  let timeLeft = 5;
  countdownEl.textContent = `Opening in ${timeLeft}...`;

  countdownInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      countdownEl.textContent = `Opening in ${timeLeft}...`;
    } else {
      clearInterval(countdownInterval);
      countdownEl.textContent = "";
      showMessage();
    }
  }, 1000);
}

function showMessage() {
  messageEl.classList.remove("hidden");
  // Trigger fade in
  requestAnimationFrame(() => {
    messageEl.classList.add("show");
  });
}
// existing code: typing + toggleMusic...

const nextBtn = document.getElementById("nextBtn");

if (nextBtn) {
  nextBtn.addEventListener("click", (event) => {
    event.preventDefault();            // stop default link behavior
    window.location.href = "message.html"; // go to message page
  });
}
