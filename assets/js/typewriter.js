document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("[data-intro-editor]");
  const target = container?.querySelector(".intro-input");

  if (!target) {
    return;
  }

  const words = ["Thinking", "Pondering", "Reasoning", "Considering", "Reflecting", "Exploring", "Synthesizing", "Contemplating"];
  let wordIndex = Math.floor(Math.random() * words.length);
  let tick = 0;
  let timer;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderStatus = () => {
    if (tick > 0 && tick % 9 === 0) {
      wordIndex = (wordIndex + 1 + Math.floor(Math.random() * (words.length - 1))) % words.length;
    }
    target.textContent = `[${words[wordIndex]}${".".repeat((tick % 3) + 1)}]`;
    tick += 1;
  };

  renderStatus();
  if (!reducedMotion) timer = window.setInterval(renderStatus, 450);

  // Once editing starts, never replace the visitor's text with a status update.
  const stopStatus = () => window.clearInterval(timer);
  target.addEventListener("focus", stopStatus, { once: true });
  target.addEventListener("input", stopStatus, { once: true });
  window.addEventListener("pagehide", stopStatus, { once: true });

  // Keep the fixed greeting outside the editable region, including select-all/delete.
  container.addEventListener("click", (event) => {
    if (!target.contains(event.target)) {
      target.focus();
      const range = document.createRange();
      range.selectNodeContents(target);
      range.collapse(false);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
});
