import { categories } from "./categories.js";
import { renderNavColumns, bindNavToggle } from "./nav.js";
import { products } from "../data/products.js";
import { getStockLabel, renderProducts } from "./products.js";

const navColumns = document.getElementById("nav-columns");
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector("[data-nav-panel]");

const categorySelect = document.getElementById("filter-category");
const tagSelect = document.getElementById("filter-tag");
const stockSelect = document.getElementById("filter-stock");
const sortSelect = document.getElementById("filter-sort");
const searchInput = document.getElementById("filter-search");
const productGrid = document.getElementById("plp-grid");
const resultCount = document.getElementById("result-count");

if (navColumns) {
  renderNavColumns(navColumns, categories);
}

if (navToggle && navPanel) {
  bindNavToggle(navToggle, navPanel);
}

const populateSelect = (select, values) => {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
};

if (categorySelect) {
  populateSelect(categorySelect, Object.keys(categories));
}

if (tagSelect) {
  const tags = [...new Set(products.map((product) => product.tag))].sort();
  populateSelect(tagSelect, tags);
}

const matchesStock = (product, stockFilter) => {
  if (!stockFilter) {
    return true;
  }
  const stockInfo = getStockLabel(product.stock);
  if (stockFilter === "in-stock") {
    return stockInfo.status === "in";
  }
  if (stockFilter === "low-stock") {
    return stockInfo.status === "low";
  }
  return stockInfo.status === "out";
};

const sortProducts = (items, mode) => {
  const sorted = [...items];
  if (mode === "price-low") {
    return sorted.sort((a, b) => a.price - b.price);
  }
  if (mode === "price-high") {
    return sorted.sort((a, b) => b.price - a.price);
  }
  if (mode === "newest") {
    return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  if (mode === "best") {
    return sorted.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }
  return sorted;
};

const applyFilters = () => {
  if (!productGrid || !resultCount) {
    return;
  }

  const searchTerm = searchInput?.value.trim().toLowerCase() ?? "";
  const categoryValue = categorySelect?.value ?? "";
  const tagValue = tagSelect?.value ?? "";
  const stockValue = stockSelect?.value ?? "";
  const sortValue = sortSelect?.value ?? "featured";

  const filtered = products.filter((product) => {
    const matchesCategory = categoryValue
      ? product.category === categoryValue
      : true;
    const matchesTag = tagValue ? product.tag === tagValue : true;
    const matchesSearch = searchTerm
      ? `${product.name} ${product.description}`
          .toLowerCase()
          .includes(searchTerm)
      : true;

    return (
      matchesCategory &&
      matchesTag &&
      matchesSearch &&
      matchesStock(product, stockValue)
    );
  });

  const sorted = sortProducts(filtered, sortValue);

  productGrid.innerHTML = "";
  renderProducts(productGrid, sorted);
  resultCount.textContent = `Showing ${sorted.length} products`;
};

[categorySelect, tagSelect, stockSelect, sortSelect, searchInput].forEach(
  (element) => {
    if (element) {
      element.addEventListener("input", applyFilters);
      element.addEventListener("change", applyFilters);
    }
  }
);

applyFilters();
