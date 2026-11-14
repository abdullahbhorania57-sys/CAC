/**
 * Classic Air Conditioners - Main Site Controller
 * File: js/main.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('siteNavMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '&#9776;';
        document.body.classList.remove('menu-open');
      } else {
        navMenu.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.innerHTML = '&#10005;';
        document.body.classList.add('menu-open');
      }
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '&#9776;';
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(e.target) && 
          !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '&#9776;';
        document.body.classList.remove('menu-open');
      }
    });
  }

  // 3. Highlight Active Navigation Link
  const currentPath = window.location.pathname;
  const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 4. Header Shadow on Scroll
  const header = document.getElementById('mainSiteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 5. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is unsupported
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 6. Contact Form Dispatcher (contact.html)
  const contactForm = document.getElementById('generalContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const phoneInput = document.getElementById('contactPhone');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');

      let isValid = true;

      // Reset errors
      contactForm.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));
      contactForm.querySelectorAll('.error-message').forEach(el => el.classList.remove('visible'));

      function markError(input, errId, msg) {
        isValid = false;
        input.classList.add('is-invalid');
        const errEl = document.getElementById(errId);
        if (errEl) {
          errEl.textContent = msg;
          errEl.classList.add('visible');
        }
      }

      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal || nameVal.length < 2) {
        markError(nameInput, 'contactNameError', 'Please enter your name.');
      }

      const phoneVal = phoneInput ? phoneInput.value.trim().replace(/[^0-9]/g, '') : '';
      if (!phoneVal || phoneVal.length < 10) {
        markError(phoneInput, 'contactPhoneError', 'Please enter a valid 10-digit mobile number.');
      }

      const subjectVal = subjectInput ? subjectInput.value : 'General Enquiry';
      const msgVal = messageInput ? messageInput.value.trim() : '';
      if (!msgVal || msgVal.length < 4) {
        markError(messageInput, 'contactMessageError', 'Please tell us how we can help you.');
      }

      if (!isValid) {
        const firstInvalid = contactForm.querySelector('.form-control.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const text = 
`Hello Classic Air Conditioners,

I have a query from your website contact page:

• Name: ${nameVal}
• Contact Number: ${phoneVal}
• Subject / Appliance: ${subjectVal}
• Message: ${msgVal}`;

      if (typeof openWhatsAppChat === 'function') {
        openWhatsAppChat(text);
      } else {
        const cleanNum = '919819116478';
        window.open(`https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`, '_blank');
      }
    });
  }
});
