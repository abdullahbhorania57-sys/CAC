/**
 * ============================================================================
 * CLASSIC AIR CONDITIONERS - CENTRALIZED SECOND-HAND PRODUCT INVENTORY
 * File: js/products.js
 * ============================================================================
 * 
 * WELCOME! THIS FILE CONTROLS ALL PRODUCTS SHOWN IN THE SECOND-HAND CATALOGUE.
 * You do NOT need to write any HTML. Just edit the list below!
 * 
 * ----------------------------------------------------------------------------
 * HOW TO USE THIS FILE (BEGINNER GUIDE):
 * ----------------------------------------------------------------------------
 * 1. HOW TO EDIT A PRODUCT'S PRICE:
 *    Find the product by its name or model below.
 *    Change the number next to `price:`.
 *    Example: change `price: 18500` to `price: 17000`.
 *    If you want to display "Price on Enquiry", set: `price: null`.
 * 
 * 2. HOW TO MARK A PRODUCT AS SOLD:
 *    Change `availability: "Available"` to `availability: "Sold"`.
 *    When set to "Sold", the website automatically shows a red "SOLD" badge
 *    and disables the WhatsApp button.
 * 
 * 3. HOW TO REPLACE A PRODUCT PHOTO:
 *    Put your new photo inside the matching folder:
 *      - AC: assets/products/ac/your-image.jpg
 *      - Refrigerator: assets/products/refrigerator/your-image.jpg
 *      - Washing Machine: assets/products/washing-machine/your-image.jpg
 *      - Microwave: assets/products/microwave/your-image.jpg
 *    Then update the `image:` path for that product below.
 * 
 * 4. HOW TO ADD A NEW PRODUCT:
 *    Copy an existing product block (from `{` to `},`), paste it at the end of
 *    the list, and update its details (give it a unique `id` like "sh-ac-05").
 * 
 * 5. HOW TO REMOVE A PRODUCT:
 *    Delete that product's block from `{` to `},`, or set its `availability: "Sold"`.
 * ============================================================================
 */

const CAC_FALLBACK_IMAGE = 'assets/products/fallback-appliance.svg';

const CAC_SECOND_HAND_PRODUCTS = [
  /* ==========================================================================
     CATEGORY 1: AIR CONDITIONERS (category: "ac")
     ========================================================================== */
  {
    id: "sh-ac-01",
    name: "LG 1.5 Ton 5-Star Dual Inverter Split AC",
    category: "ac",
    brand: "LG",
    model: "JS-Q18HNZD",
    condition: "Pre-Owned - Excellent Condition",
    price: 24500, // Number in Rupees or null for "Price on Enquiry"
    description: "Fully tested and serviced 1.5 ton split AC with dual inverter technology. High cooling efficiency with 100% copper condenser coil. Ready for home installation.",
    image: "assets/products/ac/split-inverter-ac-front.webp",
    availability: "Available" // "Available" or "Sold"
  },
  {
    id: "sh-ac-02",
    name: "Daikin 1.5 Ton Heavy-Duty Inverter Split AC",
    category: "ac",
    brand: "Daikin",
    model: "FTKL50TV",
    condition: "Pre-Owned - Thoroughly Inspected",
    price: 26000,
    description: "Reliable Daikin inverter AC known for steady high-ambient cooling. Clean filters, fully gas-charged, and tested under high-load conditions.",
    image: "assets/products/ac/split-inverter-ac-studio.webp",
    availability: "Available"
  },
  {
    id: "sh-ac-03",
    name: "Voltas 1.5 Ton Window AC",
    category: "ac",
    brand: "Voltas",
    model: "183V CZT (Sample)",
    condition: "Pre-Owned - Clean & Tested",
    price: null, // Displayed as "Price on Enquiry"
    description: "Robust window AC unit suitable for bedrooms or offices. Low maintenance, high airflow, and complete with wall mounting brackets.",
    image: "assets/products/ac/window-ac-front.webp",
    availability: "Available"
  },
  {
    id: "sh-ac-04",
    name: "Hitachi 1 Ton 3-Star Split AC",
    category: "ac",
    brand: "Hitachi",
    model: "RAU312HUD",
    condition: "Pre-Owned - Serviced",
    price: 18500,
    description: "Compact 1 ton inverter split AC perfect for small bedrooms or cabins. Serviced with fresh refrigerant and silent indoor blower.",
    image: "assets/products/ac/window-ac-studio.webp",
    availability: "Sold" // Sample Sold item
  },

  /* ==========================================================================
     CATEGORY 2: REFRIGERATORS (category: "refrigerator")
     ========================================================================== */
  {
    id: "sh-ref-01",
    name: "Samsung 253L Double Door Refrigerator",
    category: "refrigerator",
    brand: "Samsung",
    model: "RT28T3722S8",
    condition: "Pre-Owned - Like New",
    price: 15500,
    description: "Frost-free double door refrigerator with smart inverter compressor. All toughened glass shelves intact, odor-free, and rapid ice-making verified.",
    image: "assets/products/refrigerator/double-door-refrigerator-front.webp",
    availability: "Available"
  },
  {
    id: "sh-ref-02",
    name: "LG 190L Smart Inverter Single Door Fridge",
    category: "refrigerator",
    brand: "LG",
    model: "GL-B201ABPY",
    condition: "Pre-Owned - Very Good",
    price: 9800,
    description: "Economical single-door direct cool refrigerator. Fast cooling, low power consumption, and thoroughly sanitized interior.",
    image: "assets/products/refrigerator/double-door-refrigerator-studio.webp",
    availability: "Available"
  },
  {
    id: "sh-ref-03",
    name: "Whirlpool 340L Triple Door Refrigerator",
    category: "refrigerator",
    brand: "Samsung",
    model: "Protton FP 343D",
    condition: "Pre-Owned - Excellent",
    price: null, // "Price on Enquiry"
    description: "Spacious multi-door refrigerator with dedicated active fresh zone and moisture retention technology. Tested compressor and cooling coils.",
    image: "assets/products/refrigerator/1.webp",
    availability: "Available"
  },
  {
    id: "sh-ref-04",
    name: "Godrej 236L Frost-Free Double Door Fridge",
    category: "refrigerator",
    brand: "Godrej",
    model: "RF EON 236B",
    condition: "Pre-Owned - Fully Working",
    price: 13000,
    description: "Standard family refrigerator with deep freezer capacity and anti-bacterial gasket. Quiet performance with energy saving features.",
    image: "assets/products/refrigerator/deep-freezer-front.webp",
    availability: "Sold" // Sample Sold item
  },

  /* ==========================================================================
     CATEGORY 3: WASHING MACHINES (category: "washing-machine")
     ========================================================================== */
  {
    id: "sh-wm-01",
    name: "Bosch 7 kg Fully Automatic Front Load",
    category: "washing-machine",
    brand: "Bosch",
    model: "WAJ2416SIN",
    condition: "Pre-Owned - Pristine Condition",
    price: 18500,
    description: "German-engineered front load washing machine with anti-vibration sidewalls and EcoSilence drive motor. Thoroughly descaled and spin-tested.",
    image: "assets/products/washing-machine/front-load-washer-front.webp",
    availability: "Available"
  },
  {
    id: "sh-wm-02",
    name: "LG 6.5 kg Smart Inverter Top Load Washer",
    category: "washing-machine",
    brand: "LG",
    model: "T65SPSF2Z",
    condition: "Pre-Owned - Fully Tested",
    price: 12500,
    description: "Popular fully-automatic top load washing machine with TurboDrum technology and stainless steel drum. Includes clean inlet and drain pipes.",
    image: "assets/products/washing-machine/front-load-washer-studio.webp",
    availability: "Available"
  },
  {
    id: "sh-wm-03",
    name: "IFB 6 kg Front Load Washing Machine",
    category: "washing-machine",
    brand: "IFB",
    model: "Diva Aqua SX",
    condition: "Pre-Owned - Good Condition",
    price: null, // "Price on Enquiry"
    description: "Heavy duty front loader with hot wash cycle and cradle wash for delicate fabrics. Heating element and drum bearing verified by our technician.",
    image: "assets/products/washing-machine/front-load-washer-detail.webp",
    availability: "Available"
  },
  {
    id: "sh-wm-04",
    name: "Samsung 7.5 kg Semi-Automatic Washer",
    category: "washing-machine",
    brand: "Samsung",
    model: "WT75M3200LL",
    condition: "Pre-Owned - Serviced",
    price: 7500,
    description: "Durable semi-automatic dual tub machine with powerful air turbo spin dryer. Lightweight rust-proof plastic body in excellent cosmetic condition.",
    image: "assets/products/washing-machine/front-load-washer-front.webp",
    availability: "Sold" // Sample Sold item
  },

  /* ==========================================================================
     CATEGORY 4: MICROWAVE OVENS (category: "microwave")
     ========================================================================== */
  {
    id: "sh-mw-01",
    name: "IFB 30L Convection Microwave Oven",
    category: "microwave",
    brand: "IFB",
    model: "30BRC2",
    condition: "Pre-Owned - Like New",
    price: 8500,
    description: "High capacity 30-litre convection oven capable of baking, grilling, reheating, and defrosting. Stainless steel cavity, turntable and grill rack included.",
    image: "assets/products/microwave/convection-microwave-front.webp",
    availability: "Available"
  },
  {
    id: "sh-mw-02",
    name: "LG 28L Charcoal Convection Microwave",
    category: "microwave",
    brand: "LG",
    model: "MJ2886BFUM",
    condition: "Pre-Owned - Excellent",
    price: 10500,
    description: "Premium convection microwave with Charcoal Lighting Heater and Diet Fry options. Magnetron and heating elements tested at peak power.",
    image: "assets/products/microwave/convection-microwave-studio.webp",
    availability: "Available"
  },
  {
    id: "sh-mw-03",
    name: "Samsung 23L Solo Microwave Oven",
    category: "microwave",
    brand: "Samsung",
    model: "MS23F301TAK",
    condition: "Pre-Owned - Clean & Tested",
    price: 4800,
    description: "Simple, durable solo microwave with ceramic enamel interior cavity. Ideal for quick reheating, cooking snacks and easy kitchen cleaning.",
    image: "assets/products/microwave/convection-microwave-detail.webp",
    availability: "Available"
  },
  {
    id: "sh-mw-04",
    name: "Panasonic 27L Convection Microwave",
    category: "microwave",
    brand: "Panasonic",
    model: "NN-CT645BFDG",
    condition: "Pre-Owned - Tested",
    price: null, // "Price on Enquiry"
    description: "Compact convection microwave oven with auto cook menus and high-speed defrost. All touch buttons responsive and turntable motor verified.",
    image: "assets/products/microwave/convection-microwave-front.webp",
    availability: "Sold" // Sample Sold item
  }
];

/**
 * Renders product cards inside the #productsGrid container
 * Supports category filtering and text search
 */
function renderSecondHandCatalogue(filterCategory = 'all', searchQuery = '') {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const query = (searchQuery || '').trim().toLowerCase();

  const filtered = CAC_SECOND_HAND_PRODUCTS.filter(product => {
    // 1. Category check
    const matchesCategory = (filterCategory === 'all' || product.category === filterCategory);
    
    // 2. Search query check
    const matchesSearch = !query || 
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.model.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Empty state check
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">&#128269;</div>
        <h3>No appliances found matching your criteria</h3>
        <p>Try selecting a different category or clearing your search keywords. Alternatively, contact us on WhatsApp to ask about incoming stock!</p>
        <button type="button" class="btn btn-outline" onclick="resetCatalogueFilters()" style="margin-top: 16px;">
          Show All Appliances
        </button>
      </div>
    `;
    return;
  }

  // Render cards
  container.innerHTML = filtered.map(product => {
    const isSold = (product.availability === 'Sold');
    const priceText = (product.price && !isNaN(product.price))
      ? `₹${Number(product.price).toLocaleString('en-IN')}`
      : 'Price on Enquiry';
    
    const priceClass = (product.price && !isNaN(product.price)) ? '' : 'on-enquiry';

    // Format human-friendly category name
    let catDisplayName = 'Appliance';
    if (product.category === 'ac') catDisplayName = 'Air Conditioner';
    else if (product.category === 'refrigerator') catDisplayName = 'Refrigerator';
    else if (product.category === 'washing-machine') catDisplayName = 'Washing Machine';
    else if (product.category === 'microwave') catDisplayName = 'Microwave Oven';

    return `
      <article class="product-card ${isSold ? 'is-sold' : ''}" id="prod-${product.id}">
        <div class="product-media">
          <img 
            src="${product.image}" 
            alt="${product.name} - ${product.brand}"
            class="product-img"
            loading="lazy"
            onerror="this.onerror=null; this.src='${CAC_FALLBACK_IMAGE}';"
          >
          <div class="product-badges">
            <span class="badge-brand">${product.brand}</span>
          </div>
          ${isSold ? `<div class="badge-sold"><span>SOLD</span></div>` : ''}
        </div>

        <div class="product-body">
          <span class="product-category-tag">${catDisplayName}</span>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-model">Model: ${product.model}</div>
          <div class="product-condition">&#10003; ${product.condition}</div>
          <p class="product-desc">${product.description}</p>
          
          <div class="product-footer">
            <div>
              <small style="color: var(--muted); font-size: 0.78rem; display: block;">PRICE</small>
              <div class="product-price ${priceClass}">${priceText}</div>
            </div>
            ${isSold ? `
              <button type="button" class="btn btn-sm btn-whatsapp" disabled title="This appliance has already been sold">
                Sold Out
              </button>
            ` : `
              <button 
                type="button" 
                class="btn btn-sm btn-whatsapp" 
                onclick="handleProductEnquiry('${product.id}')"
                aria-label="Enquire about ${product.name} on WhatsApp"
              >
                Enquire &nearr;
              </button>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Triggers product enquiry on WhatsApp
 */
function handleProductEnquiry(productId) {
  const prod = CAC_SECOND_HAND_PRODUCTS.find(p => p.id === productId);
  if (prod && typeof sendSecondHandProductEnquiry === 'function') {
    sendSecondHandProductEnquiry(prod);
  }
}

/**
 * Resets filters and search
 */
function resetCatalogueFilters() {
  const searchInput = document.getElementById('catalogueSearchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  renderSecondHandCatalogue('all', '');
}

// Initialise catalogue if container exists on page
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('productsGrid');
  if (container) {
    let currentCategory = 'all';
    let currentSearch = '';

    renderSecondHandCatalogue(currentCategory, currentSearch);

    // Filter pill buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category || 'all';
        renderSecondHandCatalogue(currentCategory, currentSearch);
      });
    });

    // Search bar input
    const searchInput = document.getElementById('catalogueSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderSecondHandCatalogue(currentCategory, currentSearch);
      });
    }
  }
});
