const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");
const nextAwesomeBtn = document.getElementById("nextAwesomeBtn");

function toggleMusic() {
  if (!bgMusic) return;

  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
    if (musicBtn) musicBtn.classList.add("active");
  } else {
    bgMusic.pause();
    if (musicBtn) musicBtn.classList.remove("active");
  }
}

// From awesome.html → final.html with fade-out
if (nextAwesomeBtn) {
  nextAwesomeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const body = document.querySelector(".fade-container");

    if (!body) {
      window.location.href = "final.html";
      return;
    }

    body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "final.html";
    }, 500);
  });
}
