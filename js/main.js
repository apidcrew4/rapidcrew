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
      
      // Check our new honeypot name 'sp_check'
      const honeypot = applyForm.querySelector('input[name="sp_check"]');
      
      if (honeypot && honeypot.value !== "") {
        console.log("Bot detected - submission blocked");
        e.preventDefault();
        return;
      }

      // Visual feedback for the user
      const submitBtn = applyForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        // We use a tiny delay before disabling the button
        // so the browser has time to capture the files (CV/ID)
        setTimeout(() => {
          submitBtn.disabled = true;
          submitBtn.innerText = "Sending Application...";
        }, 100);
      }
      
      // We do NOT use e.preventDefault() here.
      // We let the browser perform the natural POST to Getform.
    });
  }
}); // End of DOMContentLoaded
