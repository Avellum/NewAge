const categories = {
  "Skin, Hair & Nails": [
    "Collagen",
    "Hair Growth",
    "Nail Health",
    "Skin Glow",
    "Beauty Minerals",
    "Skin Microbiome",
    "Beauty Stacks",
  ],
  "Longevity & Cellular Energy": [
    "NAD+ & Precursors",
    "Cellular Energy",
    "Mitochondrial Support",
    "Longevity Antioxidants",
    "Metabolic Longevity",
    "Longevity Minerals",
    "Longevity Stacks",
  ],
  "Stress, Sleep & Nervous System": [
    "Stress Support",
    "Cortisol Balance",
    "Sleep Support",
    "Magnesium",
    "Nervous System Support",
    "Hormonal Balance",
    "Cycle Support",
    "Stress & Sleep Stacks",
  ],
  "Gut Health & Microbiome": [
    "Probiotics",
    "Prebiotics",
    "Synbiotics",
    "Digestive Enzymes",
    "Digestive Comfort",
    "Gut Barrier Support",
    "Gut–Skin Axis",
    "Gut Health Stacks",
  ],
  "Cognitive Performance & Focus": [
    "Nootropics",
    "Focus & Productivity",
    "Mental Energy",
    "Mood Support",
    "Cognitive Stacks",
  ],
  "Metabolic Health & Energy": [
    "Blood Sugar Support",
    "Electrolytes & Minerals",
    "Energy Metabolism",
    "Weight & Body Composition",
    "Metabolic Stacks",
  ],
  "Biohacking Systems": [
    "Daily Stacks",
    "AM Stacks",
    "PM Stacks",
    "Performance Stacks",
    "Beauty Stacks",
    "Longevity Stacks",
  ],
  "Korean Beauty": [
    "Serums & Ampoules",
    "Creams & Moisturizers",
    "Sheet Masks",
    "Hydrogel & Bio-Cellulose Masks",
    "Sleeping Masks",
    "Barrier Repair",
    "Brightening & Glow",
    "Sensitive Skin",
  ],
  "Bundles & Subscriptions": [
    "Starter Kits",
    "Best Sellers",
    "Subscription Products",
    "Routine Bundles",
    "Limited Editions",
  ],
};

const navColumns = document.getElementById("nav-columns");

if (navColumns) {
  Object.entries(categories).forEach(([group, items]) => {
    const column = document.createElement("div");
    column.className = "nav-column";

    const heading = document.createElement("h3");
    heading.textContent = group;

    const list = document.createElement("ul");
    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });

    column.appendChild(heading);
    column.appendChild(list);
    navColumns.appendChild(column);
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector("[data-nav-panel]");

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!navPanel.contains(event.target) && !navToggle.contains(event.target)) {
      navPanel.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
