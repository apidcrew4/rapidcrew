// --- General site scripts ---
document.addEventListener("DOMContentLoaded", function () {
  // --- Auto year updater ---
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Form validation ---
  const form = document.getElementById("applyForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      // Honeypot check (bot detection)
      if (form.website && form.website.value) {
        e.preventDefault();
        return;
      }

      // Show user feedback
      const msg = document.getElementById("formMessage");
      if (msg) {
        msg.textContent = "Submitting application...";
      }

      // If you want AJAX submission, uncomment below
      // e.preventDefault();
      // let data = new FormData(form);
      // fetch(form.action, { method: "POST", body: data })
      //   .then(res => res.text())
      //   .then(txt => { msg.textContent = "Submitted successfully!"; })
      //   .catch(err => { msg.textContent = "Error, please try again."; });
    });
  }

  // --- Mobile nav toggle ---
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }
});
