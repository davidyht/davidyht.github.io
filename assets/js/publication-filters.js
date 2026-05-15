document.addEventListener("DOMContentLoaded", () => {
  const filterPanel = document.querySelector("[data-publication-filters]");
  if (!filterPanel) {
    return;
  }

  const buttons = Array.from(filterPanel.querySelectorAll("[data-publication-filter]"));
  const countLabel = filterPanel.querySelector("[data-publication-filter-count]");
  const items = Array.from(document.querySelectorAll(".publications ol.bibliography > li"));
  const searchInput = document.getElementById("bibsearch");

  const isVisible = (item) => !item.classList.contains("unloaded") && !item.classList.contains("publication-topic-filtered");

  const updateGroups = () => {
    document.querySelectorAll(".publications ol.bibliography").forEach((list) => {
      const hasVisibleItems = Array.from(list.querySelectorAll(":scope > li")).some(isVisible);
      list.classList.toggle("publication-topic-filtered", !hasVisibleItems);

      const heading = list.previousElementSibling;
      if (heading && heading.matches("h2.bibliography")) {
        heading.classList.toggle("publication-topic-filtered", !hasVisibleItems);
      }
    });

    if (countLabel) {
      const visibleCount = items.filter(isVisible).length;
      const totalCount = items.length;
      countLabel.textContent = `${visibleCount} of ${totalCount}`;
    }
  };

  const applyFilter = (value) => {
    const normalizedValue = value.trim().toLowerCase();
    const terms = normalizedValue
      .split(",")
      .map((term) => term.trim())
      .filter(Boolean);

    items.forEach((item) => {
      const card = item.querySelector("[data-publication-tags]");
      const tags = card ? card.dataset.publicationTags.toLowerCase() : "";
      const matchesTopic = normalizedValue === "all" || terms.some((term) => tags.includes(term));
      item.classList.toggle("publication-topic-filtered", !matchesTopic);
    });

    updateGroups();
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.toggle("active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });

      applyFilter(button.dataset.publicationFilter || "all");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      window.setTimeout(updateGroups, 350);
    });
    window.addEventListener("hashchange", () => {
      window.setTimeout(updateGroups, 350);
    });
  }

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
  });
  applyFilter("all");
});
