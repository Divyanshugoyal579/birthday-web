const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");
const nextMemoriesBtn = document.getElementById("nextMemoriesBtn");

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

// Fade-out then go to awesome.html from memories page
if (nextMemoriesBtn) {
  nextMemoriesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const body = document.querySelector(".fade-container");

    if (!body) {
      window.location.href = "awesome.html";
      return;
    }

    body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "awesome.html";
    }, 500);
  });
}
