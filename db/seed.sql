USE newage_store;

INSERT INTO categories (name)
VALUES
  ("Skin, Hair & Nails"),
  ("Longevity & Cellular Energy"),
  ("Stress, Sleep & Nervous System"),
  ("Gut Health & Microbiome"),
  ("Cognitive Performance & Focus"),
  ("Metabolic Health & Energy"),
  ("Biohacking Systems"),
  ("Korean Beauty"),
  ("Bundles & Subscriptions");

INSERT INTO categories (name, parent_id)
VALUES
  ("Collagen", 1),
  ("Hair Growth", 1),
  ("Nail Health", 1),
  ("Skin Glow", 1),
  ("Beauty Minerals", 1),
  ("Skin Microbiome", 1),
  ("Beauty Stacks", 1),
  ("NAD+ & Precursors", 2),
  ("Cellular Energy", 2),
  ("Mitochondrial Support", 2),
  ("Longevity Antioxidants", 2),
  ("Metabolic Longevity", 2),
  ("Longevity Minerals", 2),
  ("Longevity Stacks", 2),
  ("Stress Support", 3),
  ("Cortisol Balance", 3),
  ("Sleep Support", 3),
  ("Magnesium", 3),
  ("Nervous System Support", 3),
  ("Hormonal Balance", 3),
  ("Cycle Support", 3),
  ("Stress & Sleep Stacks", 3),
  ("Probiotics", 4),
  ("Prebiotics", 4),
  ("Synbiotics", 4),
  ("Digestive Enzymes", 4),
  ("Digestive Comfort", 4),
  ("Gut Barrier Support", 4),
  ("Gut–Skin Axis", 4),
  ("Gut Health Stacks", 4),
  ("Nootropics", 5),
  ("Focus & Productivity", 5),
  ("Mental Energy", 5),
  ("Mood Support", 5),
  ("Cognitive Stacks", 5),
  ("Blood Sugar Support", 6),
  ("Electrolytes & Minerals", 6),
  ("Energy Metabolism", 6),
  ("Weight & Body Composition", 6),
  ("Metabolic Stacks", 6),
  ("Daily Stacks", 7),
  ("AM Stacks", 7),
  ("PM Stacks", 7),
  ("Performance Stacks", 7),
  ("Beauty Stacks", 7),
  ("Longevity Stacks", 7),
  ("Serums & Ampoules", 8),
  ("Creams & Moisturizers", 8),
  ("Sheet Masks", 8),
  ("Hydrogel & Bio-Cellulose Masks", 8),
  ("Sleeping Masks", 8),
  ("Barrier Repair", 8),
  ("Brightening & Glow", 8),
  ("Sensitive Skin", 8),
  ("Starter Kits", 9),
  ("Best Sellers", 9),
  ("Subscription Products", 9),
  ("Routine Bundles", 9),
  ("Limited Editions", 9);

INSERT INTO products (slug, name, description, price_cents, original_price_cents, image_url, tag, stock)
VALUES
  (
    "glow-marine-collagen",
    "Glow Marine Collagen",
    "Hydrolyzed marine collagen with vitamin C for elasticity.",
    4800,
    5600,
    "https://images.unsplash.com/photo-1556228724-4f5863915d3b?auto=format&fit=crop&w=600&q=80",
    "Best Seller",
    24
  ),
  (
    "hair-growth-complex",
    "Hair Growth Complex",
    "Biotin, saw palmetto, and adaptogens for stronger strands.",
    4200,
    4200,
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "New",
    12
  ),
  (
    "sleep-reset-magnesium",
    "Sleep Reset Magnesium",
    "Glycinate + L-theanine blend for restful nights.",
    3600,
    4200,
    "https://images.unsplash.com/photo-1522337094846-8a818192de1a?auto=format&fit=crop&w=600&q=80",
    "Top Rated",
    5
  ),
  (
    "nad-recharge",
    "NAD+ Recharge",
    "Nicotinamide riboside with resveratrol support.",
    6400,
    7200,
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    "Longevity",
    18
  ),
  (
    "gut-skin-synbiotic",
    "Gut-Skin Synbiotic",
    "Dual-action pre + probiotic for gut barrier support.",
    4400,
    4800,
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=80",
    "Clean Label",
    9
  ),
  (
    "focus-nootropic",
    "Focus Nootropic Drops",
    "Lion’s mane + L-tyrosine for sustained clarity.",
    3800,
    4500,
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "Staff Pick",
    0
  ),
  (
    "kbeauty-barrier-cream",
    "K-Beauty Barrier Cream",
    "Ceramide-rich moisturizer for sensitive skin.",
    3200,
    3200,
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "K-Beauty",
    7
  ),
  (
    "metabolic-mineral-blend",
    "Metabolic Mineral Blend",
    "Electrolytes with chromium for steady energy.",
    2800,
    3100,
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "Daily",
    14
  );

INSERT INTO product_categories (product_id, category_id)
VALUES
  (1, 1),
  (2, 1),
  (3, 3),
  (4, 2),
  (5, 4),
  (6, 5),
  (7, 8),
  (8, 6);

INSERT INTO product_images (product_id, image_url, sort_order)
VALUES
  (
    1,
    "https://images.unsplash.com/photo-1556228724-4f5863915d3b?auto=format&fit=crop&w=600&q=80",
    1
  ),
  (
    1,
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    2
  ),
  (
    2,
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    1
  ),
  (
    3,
    "https://images.unsplash.com/photo-1522337094846-8a818192de1a?auto=format&fit=crop&w=600&q=80",
    1
  ),
  (
    4,
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    1
  ),
  (
    5,
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=80",
    1
  ),
  (
    6,
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    1
  ),
  (
    7,
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    1
  ),
  (
    8,
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    1
  );
