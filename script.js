// ===== 1. MOBILE MENU TOGGLE =====
// Get the menu button and the navigation links from the page
var menuBtn = document.getElementById("menu-btn");
var nav = document.getElementById("nav");

// Only run if the button exists on this page
if (menuBtn) {
  // When the button is clicked, show or hide the menu
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

// ===== 2. APPOINTMENT FORM VALIDATION =====
// Get the form (it only exists on the contact page)
var form = document.getElementById("appointment-form");

// Only run if the form exists on this page
if (form) {
  // Run this code when the user clicks submit
  form.addEventListener("submit", function (event) {
    // Stop the page from reloading
    event.preventDefault();

    // Read what the user typed (trim removes extra spaces)
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var service = document.getElementById("service").value;

    // Assume the form is valid until a check fails
    var valid = true;

    // Clear any old error messages
    document.getElementById("name-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("service-error").textContent = "";

    // Check 1: name must not be empty
    if (name === "") {
      document.getElementById("name-error").textContent = "Please enter your name.";
      valid = false;
    }

    // Check 2: phone needs at least 10 digits (symbols and spaces are ignored)
    if (phone.replace(/\D/g, "").length < 10) {
      document.getElementById("phone-error").textContent = "Please enter a phone number with at least 10 digits.";
      valid = false;
    }

    // Check 3: a service must be chosen
    if (service === "") {
      document.getElementById("service-error").textContent = "Please choose a service.";
      valid = false;
    }

    // Get the area where the success message will appear
    var message = document.getElementById("form-message");

    if (valid) {
      // All checks passed: show a thank-you message and empty the form
      message.className = "success";
      message.textContent = "Thank you, " + name + ". We will call you shortly to confirm your appointment.";
      form.reset();
    } else {
      // Something was wrong: remove the success styling
      message.className = "";
    }
  });
}
