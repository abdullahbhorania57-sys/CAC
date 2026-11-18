/**
 * Classic Air Conditioners - "We Buy Used Appliances" Form Handler
 * File: js/sell-used-appliance.js
 *
 * Validates fields when a customer wants to sell their old appliance to Classic Air Conditioners.
 * Formats all inputs into a clean WhatsApp message and opens official chat.
 * Reminds customer to attach actual appliance photographs directly in WhatsApp.
 */

// Category-specific brand placeholders
const SELL_BRAND_PLACEHOLDERS = {
  'Air Conditioner': "e.g. LG, Daikin, Voltas, Hitachi, O'General",
  'Refrigerator': 'e.g. Samsung, LG, Whirlpool, Godrej, Haier',
  'Washing Machine': 'e.g. LG, Samsung, IFB, Whirlpool, Bosch',
  'Microwave Oven': 'e.g. LG, Samsung, IFB, Panasonic, Bajaj'
};

function updateSellBrandPlaceholder(category) {
  const brandInput = document.getElementById('sellBrand');
  if (!brandInput) return;
  brandInput.placeholder = SELL_BRAND_PLACEHOLDERS[category] || 'e.g. LG, Samsung, Daikin, Whirlpool';
}

document.addEventListener('DOMContentLoaded', () => {
  const sellForm = document.getElementById('sellUsedApplianceForm');
  if (!sellForm) return;

  // Dynamically update brand placeholder based on selected category
  const categorySelect = document.getElementById('sellCategory');
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      updateSellBrandPlaceholder(e.target.value);
    });
    if (categorySelect.value) {
      updateSellBrandPlaceholder(categorySelect.value);
    }
  }

  sellForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Extract inputs
    const nameInput = document.getElementById('sellName');
    const phoneInput = document.getElementById('sellPhone');
    const categoryInput = document.getElementById('sellCategory');
    const brandInput = document.getElementById('sellBrand');
    const modelInput = document.getElementById('sellModel');
    const yearInput = document.getElementById('sellYear');
    const conditionInput = document.getElementById('sellCondition');
    const priceInput = document.getElementById('sellPrice');
    const addressInput = document.getElementById('sellAddress');
    const detailsInput = document.getElementById('sellDetails');

    let isValid = true;

    // Reset error states
    sellForm.querySelectorAll('.form-control').forEach(input => input.classList.remove('is-invalid'));
    sellForm.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('visible'));

    // Helper error reporter
    function markError(input, errorId, message) {
      isValid = false;
      input.classList.add('is-invalid');
      const errEl = document.getElementById(errorId);
      if (errEl) {
        errEl.textContent = message;
        errEl.classList.add('visible');
      }
    }

    // Validations
    const nameVal = nameInput ? nameInput.value.trim() : '';
    if (!nameVal || nameVal.length < 2) {
      markError(nameInput, 'sellNameError', 'Please enter your name.');
    }

    const phoneVal = phoneInput ? phoneInput.value.trim().replace(/[^0-9]/g, '') : '';
    if (!phoneVal || phoneVal.length < 10) {
      markError(phoneInput, 'sellPhoneError', 'Please enter a valid 10-digit mobile number.');
    }

    const categoryVal = categoryInput ? categoryInput.value : '';
    if (!categoryVal) {
      markError(categoryInput, 'sellCategoryError', 'Please select an appliance category.');
    }

    const brandVal = brandInput ? brandInput.value.trim() : '';
    if (!brandVal) {
      markError(brandInput, 'sellBrandError', 'Please enter the appliance brand (e.g. LG, Voltas, etc.).');
    }

    const modelVal = modelInput && modelInput.value.trim() ? modelInput.value.trim() : 'Not sure / On sticker';
    const yearVal = yearInput && yearInput.value.trim() ? yearInput.value.trim() : 'Approximate';

    const conditionVal = conditionInput ? conditionInput.value : '';
    if (!conditionVal) {
      markError(conditionInput, 'sellConditionError', 'Please select current working condition.');
    }

    const priceVal = priceInput ? priceInput.value.trim() : '';
    if (!priceVal) {
      markError(priceInput, 'sellPriceError', 'Please enter your expected selling price (in ₹).');
    }

    const addressVal = addressInput ? addressInput.value.trim() : '';
    if (!addressVal || addressVal.length < 5) {
      markError(addressInput, 'sellAddressError', 'Please enter your pickup location / address in Mumbai.');
    }

    const detailsVal = detailsInput && detailsInput.value.trim() ? detailsInput.value.trim() : 'No additional notes provided.';

    if (!isValid) {
      const firstInvalid = sellForm.querySelector('.form-control.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Format WhatsApp message
    const formattedMessage = 
`Hello Classic Air Conditioners,

I want to sell my used appliance to your shop:

📦 USED APPLIANCE SALE OFFER:
• Seller Name: ${nameVal}
• Contact Number: ${phoneVal}
• Appliance Category: ${categoryVal}
• Brand: ${brandVal}
• Model Number: ${modelVal}
• Approx. Purchase Year: ${yearVal}
• Working Condition: ${conditionVal}
• Expected Selling Price: ₹${priceVal}
• Pickup Location / Address: ${addressVal}
• Additional Notes: ${detailsVal}

(Note: I will attach photos of the appliance right here in this WhatsApp chat).`;

    if (typeof openWhatsAppChat === 'function') {
      openWhatsAppChat(formattedMessage);
    } else {
      const cleanNum = '919819116478';
      window.open(`https://wa.me/${cleanNum}?text=${encodeURIComponent(formattedMessage)}`, '_blank');
    }
  });
});

/**
 * Pre-selects a category in the sell form and smoothly scrolls to it
 * @param {string} categoryName 
 */
function selectSellCategory(categoryName) {
  const catSelect = document.getElementById('sellCategory');
  if (catSelect) {
    catSelect.value = categoryName;
    updateSellBrandPlaceholder(categoryName);
  }
  const formSection = document.getElementById('sellFormSection');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('sellName');
    if (nameInput) setTimeout(() => nameInput.focus(), 500);
  }
}
