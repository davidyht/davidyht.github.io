document.addEventListener("DOMContentLoaded", () => {
  const randomValue = () => {
    if (window.crypto && window.crypto.getRandomValues) {
      const values = new Uint32Array(1);
      window.crypto.getRandomValues(values);
      return values[0] / 4294967296;
    }

    return Math.random();
  };

  const shuffle = (items) => {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(randomValue() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  };

  const selectFeaturedItems = (section, previousItems = new Set()) => {
    const count = Number.parseInt(section.dataset.featuredPaperCount || "3", 10);
    const items = Array.from(section.querySelectorAll("ol.bibliography > li"));
    const pool = items.length > count ? items.filter((item) => !previousItems.has(item)) : items;
    const sourceItems = pool.length >= count ? pool : items;
    const visibleItems = new Set(shuffle(sourceItems).slice(0, Math.min(count, items.length)));

    items.forEach((item) => {
      const isVisible = visibleItems.has(item);
      item.hidden = !isVisible;
      item.classList.toggle("featured-paper-visible", isVisible);
    });

    section.classList.add("featured-papers-ready");
    return visibleItems;
  };

  document.querySelectorAll("[data-random-featured-papers]").forEach((section) => {
    let visibleItems = selectFeaturedItems(section);
    const block = section.closest(".featured-papers-block");
    const shuffleButton = block ? block.querySelector("[data-featured-papers-shuffle]") : null;

    if (shuffleButton) {
      shuffleButton.addEventListener("click", () => {
        visibleItems = selectFeaturedItems(section, visibleItems);
      });
    }
  });
});
