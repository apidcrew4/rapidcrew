document.addEventListener("DOMContentLoaded", function () {
  // 1. Auto Year Updater
  const yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () { nav.classList.toggle("show"); });
  }

  // 3. The Power Form Handler (AJAX)
  const applyForm = document.getElementById("applyForm");
  if (applyForm) {
    applyForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop the old way of submitting

      const submitBtn = applyForm.querySelector('button[type="submit"]');
      const honeypot = applyForm.querySelector('input[name="sp_check"]');

      // Bot Check
      if (honeypot && honeypot.value !== "") {
        console.log("Bot blocked");
        return;
      }

      // Visual Feedback
      submitBtn.disabled = true;
      submitBtn.innerText = "Uploading Documents...";

      // Build the Data Package
      const formData = new FormData(applyForm);

      // Send to Getform via AJAX Fetch
      fetch("https://getform.io/f/77ws6km4dcv", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
      })
      .then(response => {
        if (response.ok) {
          // SUCCESS: Go to thank you page
          window.location.href = "thank-you.html";
        } else {
          // ERROR
          alert("Submission error. Please check your file sizes (Max 5MB) and try again.");
          submitBtn.disabled = false;
          submitBtn.innerText = "Submit Application";
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Network error. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Application";
      });
    });
  }
});
