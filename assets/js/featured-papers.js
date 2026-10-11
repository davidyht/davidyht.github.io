document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-featured-papers]").forEach((section) => {
    const items = Array.from(section.querySelectorAll("ol.bibliography > li"));
    if (items.length === 0) return;

    let currentIndex = 0;
    const showCurrentPaper = () => {
      items.forEach((item, index) => {
        const isVisible = index === currentIndex;
        item.hidden = !isVisible;
        item.classList.toggle("featured-paper-visible", isVisible);
      });
      section.classList.add("featured-papers-ready");
    };

    showCurrentPaper();

    const block = section.closest(".featured-papers-block");
    const nextButton = block ? block.querySelector("[data-featured-papers-next]") : null;
    if (nextButton) {
      nextButton.disabled = items.length < 2;
      nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        showCurrentPaper();
      });
    }
  });
});
