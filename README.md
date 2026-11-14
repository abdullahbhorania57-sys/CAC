# Classic Air Conditioners - Website Documentation & Beginner Guide

Welcome to your upgraded business website for **Classic Air Conditioners**!

This website has been built purely with clean **HTML5, CSS3, and Vanilla JavaScript**. It is fast, fully responsive, and ready to be hosted on **GitHub Pages**.

---

## 1. Project Directory Structure

```text
NEW-WEBSITE/
├── index.html                 # Homepage (One-stop home appliance solution)
├── about.html                 # About Us & Company overview
├── services.html              # Repair & Services + Repair Booking Form
├── new-appliances.html        # New on-order appliances (WhatsApp enquiry only)
├── second-hand.html           # Second-hand appliances catalogue
├── we-buy-used-appliances.html# Customer buyback form (Sell used appliance)
├── contact.html               # Contact details, enquiry form & Google Maps
│
├── css/
│   ├── style.css              # Main design, typography & brand palette
│   ├── responsive.css         # Mobile & tablet responsiveness (zero overflow)
│   └── animations.css         # Smooth transitions & scroll animations
│
├── js/
│   ├── products.js            # Centralized second-hand product inventory & renderer
│   ├── whatsapp.js            # Official WhatsApp links & message dispatchers
│   ├── booking.js             # Service booking validation & WhatsApp generator
│   ├── sell-used-appliance.js # "We Buy Used Appliances" form handler
│   └── main.js                # Navigation, mobile menu & scroll reveal
│
└── assets/
    ├── branding/
    │   ├── classic-full-logo.png  # Header logo (Symbol + Cursive Classic + AIR CONDITIONERS)
    │   └── classic-monogram.png   # Favicon & standalone icon (Black monogram on cyan)
    ├── icons/
    │   └── brands/                # Real SVG logos (LG, Daikin, Hitachi, Panasonic, etc.)
    └── products/
        ├── fallback-appliance.svg # Fallback image for missing photos
        ├── ac/                    # AC demo images
        ├── refrigerator/          # Refrigerator demo images
        ├── washing-machine/       # Washing machine demo images
        └── microwave/             # Microwave demo images
```

---

## 2. Strict Business Information Verified

- **Official Phone**: `+91 98191 16478`
- **Official WhatsApp**: `https://wa.me/919819116478`
- **Confirmed Shop Address**: `Shop No. 3, No. 10, Kishore Avenue CHS Ltd, Amrut Nagar, Jogeshwari West, Mumbai, Maharashtra 400102`
- **Email Address**: None displayed anywhere on the website (per instructions).
- **Owner's Personal Name**: None displayed anywhere on the website.
- **Alternate Phone Numbers**: None displayed anywhere on the website.

---

## 3. How to Test the Website Locally

1. Go to the `NEW-WEBSITE` folder in Windows File Explorer:
   `c:\Users\abdul\OneDrive\Documents\CAC\NEW-WEBSITE`
2. Double-click `index.html`. It will immediately open in Google Chrome, Microsoft Edge, or any modern browser.
3. Click across all 7 pages:
   - **Home**: Verify the headline, 4 categories, reviews, call button, and WhatsApp button.
   - **About Us**: View our expertise and core values.
   - **Repair & Services**: Check all 4 categories and test the Repair Booking Form.
   - **New Appliances**: Test the "Enquire on WhatsApp" buttons for AC, Refrigerator, Washer, and Microwave.
   - **Second-Hand Appliances**: Test the category filter pills (AC, Refrigerator, Washing Machine, Microwave), search bar, and "Enquire" buttons. Notice the "SOLD" items!
   - **We Buy Used Appliances**: Fill in the valuation form and click Submit to see the formatted WhatsApp message.
   - **Contact Us**: Check Shop No. 3 address, phone link, and Google Maps embed.

---

## 4. Beginner Guide: Editing Second-Hand Products (`js/products.js`)

All second-hand products are controlled in one single file: `js/products.js`. You never need to touch any HTML!

### A. How to Change a Price
1. Open `NEW-WEBSITE/js/products.js` in Notepad or VS Code.
2. Find the product you want to change.
3. Change the number:
   ```javascript
   price: 24500, // Change this number to your new price in Rupees
   ```
4. If you want the website to show **"Price on Enquiry"**, simply write:
   ```javascript
   price: null,
   ```

### B. How to Mark a Product as "Sold"
1. In `js/products.js`, find the product.
2. Change:
   ```javascript
   availability: "Available"
   ```
   to:
   ```javascript
   availability: "Sold"
   ```
3. Save the file. The website will automatically place a red **"SOLD"** banner on the card and disable the enquiry button.

### C. How to Replace a Product Photo
1. Save your new photo inside the corresponding category folder:
   - AC: `assets/products/ac/my-new-ac.jpg`
   - Refrigerator: `assets/products/refrigerator/my-fridge.jpg`
   - Washing Machine: `assets/products/washing-machine/my-washer.jpg`
   - Microwave: `assets/products/microwave/my-microwave.jpg`
2. Update the `image` path in `js/products.js`:
   ```javascript
   image: "assets/products/ac/my-new-ac.jpg",
   ```
3. *Note: If an image file is ever missing or broken, the website automatically displays the clean fallback appliance illustration!*

### D. How to Add a New Product
Copy any existing product block and paste it inside the list:
```javascript
{
  id: "sh-ac-05",
  name: "Carrier 1.5 Ton Inverter AC",
  category: "ac", // "ac", "refrigerator", "washing-machine", or "microwave"
  brand: "Carrier",
  model: "ESTER-PLUS-18K",
  condition: "Pre-Owned - Excellent Condition",
  price: 21000,
  description: "Copper condenser coil with fresh gas charging and tested cooling.",
  image: "assets/products/ac/split-inverter-ac-front.webp",
  availability: "Available"
},
```

### E. How to Remove a Product
Either delete the block from `{` to `},`, or set `availability: "Sold"`.

---

## 5. How to Edit WhatsApp Messages

Open `NEW-WEBSITE/js/whatsapp.js`:
- To adjust the category message for New Appliances, look at `sendNewApplianceEnquiry()`.
- To adjust the Second-Hand product message, look at `sendSecondHandProductEnquiry()`.
- To adjust the Service Booking message, open `NEW-WEBSITE/js/booking.js`.
- To adjust the "Sell Used Appliance" message, open `NEW-WEBSITE/js/sell-used-appliance.js`.

---

## 6. How to Publish to GitHub Pages

1. **Option A: Replace root files with NEW-WEBSITE content**
   - Copy all contents inside `NEW-WEBSITE/` directly to your repository root or your GitHub Pages branch.
   - Since `index.html` is at the root of `NEW-WEBSITE`, GitHub Pages will immediately serve it at `https://abdullahbhorania57-sys.github.io/CAC/`.
2. **Option B: Push the `CAC` repository**
   - Commit your changes:
     ```bash
     git add NEW-WEBSITE
     git commit -m "Add complete upgraded website in NEW-WEBSITE"
     git push origin main
     ```
   - In GitHub Settings > Pages, select the folder or branch you wish to publish.
