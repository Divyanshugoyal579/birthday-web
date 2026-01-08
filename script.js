let music;

document.addEventListener("DOMContentLoaded", () => {
  music = document.getElementById("bgMusic");
});

/* MUSIC */
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

/* OPEN GIFT */
function openGift() {
  window.location.href = "message.html";
}

/* TYPING EFFECT */
const text = "Happy Birthday Afrah 🎉 You bring fun, smiles, and good vibes everywhere you go 😄 Hope your day is full of laughter, cake, and amazing moments 🎂✨";
let i = 0;

function typeEffect() {
  const el = document.getElementById("typing");
  if (el && i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

/* COUNTDOWN (CHANGE DATE) */
const birthday = new Date("2026-02-10 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = birthday - now;

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const m = Math.floor((gap / (1000 * 60)) % 60);
  const s = Math.floor((gap / 1000) % 60);

  const cd = document.getElementById("countdown");
  if (cd) cd.innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s to go!`;
}, 1000);

/* CONFETTI */
function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff5e7e", "#6c63ff", "#ffe066", "#4ecdc4"]
      [Math.floor(Math.random() * 4)];
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
