document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-typewriter-text]");

  if (!target) {
    return;
  }

  const text = target.dataset.typewriterText || target.textContent.trim();

  target.textContent = text;
  target.classList.add("is-complete");
});
