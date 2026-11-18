/**
 * Classic Air Conditioners - Service Repair Booking Form Handler
 * File: js/booking.js
 *
 * Validates repair request fields and opens official WhatsApp with
 * formatted details. No data is stored on server or database.
 */

// Category-specific brand placeholders for service booking
const BOOK_BRAND_PLACEHOLDERS = {
  'Air Conditioner': "e.g. LG, Daikin, Voltas, Hitachi, O'General",
  'Refrigerator': 'e.g. Samsung, LG, Whirlpool, Godrej, Haier',
  'Washing Machine': 'e.g. LG, Samsung, IFB, Whirlpool, Bosch',
  'Microwave Oven': 'e.g. LG, Samsung, IFB, Panasonic, Bajaj'
};

function updateBookBrandPlaceholder(category) {
  const brandInput = document.getElementById('bookBrand');
  if (!brandInput) return;
  brandInput.placeholder = BOOK_BRAND_PLACEHOLDERS[category] || 'e.g. LG, Daikin, Samsung, Whirlpool';
}

document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('serviceBookingForm');
  if (!bookingForm) return;

  // Dynamically update brand placeholder based on selected category
  const categorySelect = document.getElementById('bookCategory');
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      updateBookBrandPlaceholder(e.target.value);
    });
    if (categorySelect.value) {
      updateBookBrandPlaceholder(categorySelect.value);
    }
  }

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Extract values
    const nameInput = document.getElementById('bookName');
    const phoneInput = document.getElementById('bookPhone');
    const addressInput = document.getElementById('bookAddress');
    const categoryInput = document.getElementById('bookCategory');
    const brandInput = document.getElementById('bookBrand');
    const problemInput = document.getElementById('bookProblem');
    const dateInput = document.getElementById('bookDate');

    let isValid = true;

    // Reset error states
    bookingForm.querySelectorAll('.form-control').forEach(input => input.classList.remove('is-invalid'));
    bookingForm.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('visible'));

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

    // Validation rules
    const nameVal = nameInput ? nameInput.value.trim() : '';
    if (!nameVal || nameVal.length < 2) {
      markError(nameInput, 'bookNameError', 'Please enter your full name.');
    }

    const phoneVal = phoneInput ? phoneInput.value.trim().replace(/[^0-9]/g, '') : '';
    // Indian mobile numbers typically 10 digits
    if (!phoneVal || phoneVal.length < 10) {
      markError(phoneInput, 'bookPhoneError', 'Please enter a valid 10-digit mobile number.');
    }

    const addressVal = addressInput ? addressInput.value.trim() : '';
    if (!addressVal || addressVal.length < 5) {
      markError(addressInput, 'bookAddressError', 'Please enter your complete address/location in Mumbai.');
    }

    const categoryVal = categoryInput ? categoryInput.value : '';
    if (!categoryVal) {
      markError(categoryInput, 'bookCategoryError', 'Please select an appliance category.');
    }

    const brandVal = brandInput ? brandInput.value.trim() : '';
    if (!brandVal) {
      markError(brandInput, 'bookBrandError', 'Please specify the brand (e.g. LG, Daikin, Samsung, etc.).');
    }

    const problemVal = problemInput ? problemInput.value.trim() : '';
    if (!problemVal || problemVal.length < 5) {
      markError(problemInput, 'bookProblemError', 'Please describe the problem or service needed.');
    }

    const dateVal = dateInput && dateInput.value ? dateInput.value : 'As soon as possible / Flexible';

    if (!isValid) {
      // Focus first error field
      const firstInvalid = bookingForm.querySelector('.form-control.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Format WhatsApp message
    const formattedMessage = 
`Hello Classic Air Conditioners,

I would like to book an appliance repair / service visit:

📋 SERVICE BOOKING DETAILS:
• Customer Name: ${nameVal}
• Contact Number: ${phoneVal}
• Service Address: ${addressVal}
• Appliance: ${categoryVal}
• Brand Name: ${brandVal}
• Problem / Details: ${problemVal}
• Preferred Date: ${dateVal}

Please confirm technician availability and visit schedule.`;

    if (typeof openWhatsAppChat === 'function') {
      openWhatsAppChat(formattedMessage);
    } else {
      const cleanNum = '919819116478';
      window.open(`https://wa.me/${cleanNum}?text=${encodeURIComponent(formattedMessage)}`, '_blank');
    }
  });
});
