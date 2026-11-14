/**
 * Classic Air Conditioners - Official WhatsApp Dispatcher
 * Official Business Number: +91 98191 16478
 *
 * NOTE: All enquiries on this website open WhatsApp directly.
 * No personal details are stored in any database.
 */

const CAC_CONFIG = {
  businessName: 'Classic Air Conditioners',
  whatsappNumber: '919819116478', // Official WhatsApp number
  phoneDisplay: '+91 98191 16478',
  phoneHref: 'tel:+919819116478',
  address: 'Shop No. 3, No. 10, Kishore Avenue CHS Ltd, Amrut Nagar, Jogeshwari West, Mumbai, Maharashtra 400102'
};

/**
 * Builds the official WhatsApp link with properly encoded message
 * @param {string} messageText 
 * @returns {string} URL to open WhatsApp
 */
function getWhatsAppUrl(messageText) {
  const cleanNumber = CAC_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(messageText.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Opens WhatsApp in a new tab/app window
 * @param {string} messageText 
 */
function openWhatsAppChat(messageText) {
  const url = getWhatsAppUrl(messageText);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Generates message for New Appliance purchase enquiry
 * @param {string} category 
 */
function sendNewApplianceEnquiry(category) {
  const msg = `Hello Classic Air Conditioners, I am interested in purchasing a new ${category}. Please share available brands, models and prices.`;
  openWhatsAppChat(msg);
}

/**
 * Generates message for Second-Hand product enquiry
 * @param {object} product 
 */
function sendSecondHandProductEnquiry(product) {
  const priceDisplay = (product.price && !isNaN(product.price)) 
    ? `₹${Number(product.price).toLocaleString('en-IN')}` 
    : 'Price on Enquiry';

  const msg = 
`Hello Classic Air Conditioners,

I am interested in this second-hand appliance from your website catalogue:

• Appliance: ${product.name}
• Category: ${product.category.toUpperCase()}
• Brand: ${product.brand}
• Model: ${product.model}
• Condition: ${product.condition}
• Listed Price: ${priceDisplay}
• Status: ${product.availability}

Please let me know if this unit is still available for purchase or inspection.`;

  openWhatsAppChat(msg);
}
