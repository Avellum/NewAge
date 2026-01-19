CREATE DATABASE IF NOT EXISTS newage_store;
USE newage_store;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  parent_id INT,
  UNIQUE KEY uniq_category_name (name, parent_id),
  CONSTRAINT fk_category_parent
    FOREIGN KEY (parent_id) REFERENCES categories(id)
      ON DELETE CASCADE
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(160) NOT NULL UNIQUE,
  name VARCHAR(160) NOT NULL,
  description TEXT NOT NULL,
  price_cents INT NOT NULL,
  original_price_cents INT,
  image_url VARCHAR(500) NOT NULL,
  tag VARCHAR(80),
  stock INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  CONSTRAINT fk_product_images_product
    FOREIGN KEY (product_id) REFERENCES products(id)
      ON DELETE CASCADE
);

CREATE TABLE product_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  category_id INT NOT NULL,
  UNIQUE KEY uniq_product_category (product_id, category_id),
  CONSTRAINT fk_product_category_product
    FOREIGN KEY (product_id) REFERENCES products(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_product_category_category
    FOREIGN KEY (category_id) REFERENCES categories(id)
      ON DELETE CASCADE
);
