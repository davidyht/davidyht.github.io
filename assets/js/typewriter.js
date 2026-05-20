document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-typewriter-text]");

  if (!target) {
    return;
  }

  const text = target.dataset.typewriterText || target.textContent.trim();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    target.textContent = text;
    target.classList.add("is-complete");
    return;
  }

  target.textContent = "";
  target.setAttribute("aria-hidden", "true");

  let index = 0;
  const typeNextCharacter = () => {
    target.textContent = text.slice(0, index);
    index += 1;

    if (index <= text.length) {
      window.setTimeout(typeNextCharacter, 65);
      return;
    }

    target.classList.add("is-complete");
  };

  window.setTimeout(typeNextCharacter, 250);
});
