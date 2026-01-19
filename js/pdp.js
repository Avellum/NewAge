import { categories } from "./categories.js";
import { renderNavColumns, bindNavToggle } from "./nav.js";
import { products } from "../data/products.js";
import { getStockLabel } from "./products.js";

const navColumns = document.getElementById("nav-columns");
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector("[data-nav-panel]");

if (navColumns) {
  renderNavColumns(navColumns, categories);
}

if (navToggle && navPanel) {
  bindNavToggle(navToggle, navPanel);
}

const heroImage = document.getElementById("pdp-hero");
const thumbs = document.getElementById("pdp-thumbs");
const categoryEl = document.getElementById("pdp-category");
const nameEl = document.getElementById("pdp-name");
const ratingEl = document.getElementById("pdp-rating");
const pricingEl = document.getElementById("pdp-pricing");
const descriptionEl = document.getElementById("pdp-description");
const stockEl = document.getElementById("pdp-stock");
const ingredientsEl = document.getElementById("pdp-ingredients");
const usageEl = document.getElementById("pdp-usage");
const ctaButton = document.getElementById("pdp-cta");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id") || products[0]?.id;
const product = products.find((item) => item.id === productId) || products[0];

if (!product) {
  if (nameEl) {
    nameEl.textContent = "Product not found";
  }
} else {
  document.title = `${product.name} | NewAge`;

  if (heroImage) {
    heroImage.src = product.images[0];
    heroImage.alt = product.name;
  }

  if (thumbs) {
    thumbs.innerHTML = "";
    product.images.forEach((image, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pdp-thumb";
      button.innerHTML = `<img src="${image}" alt="${product.name} image ${
        index + 1
      }" />`;
      button.addEventListener("click", () => {
        if (heroImage) {
          heroImage.src = image;
        }
      });
      thumbs.appendChild(button);
    });
  }

  if (categoryEl) {
    categoryEl.textContent = `${product.category} • ${product.subcategory}`;
  }

  if (nameEl) {
    nameEl.textContent = product.name;
  }

  if (ratingEl) {
    ratingEl.textContent = `${product.rating} ★ (${product.reviewsCount} reviews)`;
  }

  if (pricingEl) {
    const hasDiscount =
      Number.isFinite(product.originalPrice) &&
      product.originalPrice > product.price;
    pricingEl.innerHTML = `
      <span>$${product.price}</span>
      ${
        hasDiscount
          ? `<span class="original">$${product.originalPrice}</span>`
          : ""
      }
    `;
  }

  if (descriptionEl) {
    descriptionEl.textContent = product.description;
  }

  if (stockEl) {
    const stockInfo = getStockLabel(product.stock);
    stockEl.textContent = stockInfo.label;
  }

  if (ingredientsEl) {
    ingredientsEl.innerHTML = "";
    product.ingredients.forEach((ingredient) => {
      const item = document.createElement("li");
      item.textContent = ingredient;
      ingredientsEl.appendChild(item);
    });
  }

  if (usageEl) {
    usageEl.textContent = product.usage;
  }

  if (ctaButton) {
    const isOut = product.stock === 0;
    ctaButton.textContent = isOut ? "Notify me" : "Add to cart";
    ctaButton.disabled = isOut;
  }
}
