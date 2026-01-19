/**
 * Return label + status style for stock counts.
 * @param {number} stockCount
 */
export const getStockLabel = (stockCount) => {
  if (stockCount === 0) {
    return { label: "Out of stock", status: "out" };
  }
  if (stockCount <= 10) {
    return { label: `Low stock (${stockCount})`, status: "low" };
  }
  return { label: `In stock (${stockCount})`, status: "in" };
};

/**
 * Render product cards into a grid container.
 * @param {HTMLElement} container
 * @param {Array} products
 * @param {Object} options
 * @param {boolean} options.showCategory
 */
export const renderProducts = (container, products, options = {}) => {
  const { showCategory = true } = options;

  products.forEach((product) => {
    const stockInfo = getStockLabel(product.stock);
    const hasDiscount =
      Number.isFinite(product.originalPrice) &&
      product.originalPrice > product.price;

    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <a class="product-image" href="product.html?id=${product.id}">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
        <span class="product-tag">${product.tag}</span>
      </a>
      <div class="product-body">
        ${
          showCategory
            ? `<p class=\"product-meta\">${product.category} • ${product.subcategory}</p>`
            : ""
        }
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-footer">
        <div class="product-pricing">
          <span class="product-price">$${product.price}</span>
          ${
            hasDiscount
              ? `<span class=\"product-original\">$${product.originalPrice}</span>`
              : ""
          }
          <span class="stock-badge ${stockInfo.status}">${stockInfo.label}</span>
        </div>
        <div class="product-actions">
          <a class="secondary-button" href="product.html?id=${product.id}">
            View details
          </a>
          <button class="primary-button" type="button" ${
            product.stock === 0 ? "disabled" : ""
          }>
            ${product.stock === 0 ? "Notify me" : "Add to cart"}
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
};
