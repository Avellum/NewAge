import { categories } from "./categories.js";
import { renderNavColumns, bindNavToggle } from "./nav.js";
import { products } from "../data/products.js";
import { renderProducts } from "./products.js";

const navColumns = document.getElementById("nav-columns");
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector("[data-nav-panel]");
const productGrid = document.getElementById("product-grid");

if (navColumns) {
  renderNavColumns(navColumns, categories);
}

if (navToggle && navPanel) {
  bindNavToggle(navToggle, navPanel);
}

if (productGrid) {
  renderProducts(productGrid, products);
}
