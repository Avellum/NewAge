/**
 * Build the category navigation columns.
 * @param {HTMLElement} container
 * @param {Record<string, string[]>} categories
 */
export const renderNavColumns = (container, categories) => {
  Object.entries(categories).forEach(([group, items]) => {
    const column = document.createElement("div");
    column.className = "nav-column";

    const heading = document.createElement("h3");
    heading.textContent = group;

    const list = document.createElement("ul");
    items.forEach((item) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `products.html?category=${encodeURIComponent(group)}`;
      link.textContent = item;
      link.className = "nav-link";
      link.dataset.subcategory = item;
      listItem.appendChild(link);
      list.appendChild(listItem);
    });

    column.appendChild(heading);
    column.appendChild(list);
    container.appendChild(column);
  });
};

/**
 * Wire click handlers for opening/closing the nav panel.
 * @param {HTMLButtonElement} toggle
 * @param {HTMLElement} panel
 */
export const bindNavToggle = (toggle, panel) => {
  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!panel.contains(event.target) && !toggle.contains(event.target)) {
      panel.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
};
