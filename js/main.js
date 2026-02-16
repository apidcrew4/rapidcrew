// --- RapidCrew General Site Scripts ---
document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Auto Year Updater
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }

  // 3. Form Submission Handling
  const applyForm = document.getElementById("applyForm");
  if (applyForm) {
    applyForm.addEventListener("submit", function (e) {
      
      // Honeypot check (We renamed it to first_name in the HTML)
      const honeypot = applyForm.querySelector('input[name="first_name"]');
      if (honeypot && honeypot.value !== "") {
        console.log("Bot detected");
        e.preventDefault();
        return;
      }

      // Visual feedback: Change button text so user doesn't click twice
      const submitBtn = applyForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending Application...";
        submitBtn.style.opacity = "0.7";
        submitBtn.style.cursor = "not-allowed";
      }
      
      // We let the browser handle the actual POST to Getform 
      // This ensures Files (CV/ID) are packaged correctly.
    });
  }
});
