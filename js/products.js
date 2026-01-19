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
 */
export const renderProducts = (container, products) => {
  products.forEach((product) => {
    const stockInfo = getStockLabel(product.stock);

    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-body">
        <p class="product-meta">${product.category} • ${product.subcategory}</p>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-footer">
        <div>
          <span class="product-price">$${product.price}</span>
          <span class="stock-badge ${stockInfo.status}">${stockInfo.label}</span>
        </div>
        <button class="primary-button" type="button" ${
          product.stock === 0 ? "disabled" : ""
        }>
          ${product.stock === 0 ? "Notify me" : "Add to cart"}
        </button>
      </div>
    `;

    container.appendChild(card);
  });
};
