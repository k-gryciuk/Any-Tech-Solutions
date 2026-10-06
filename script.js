// 1. Mobile menu toggle
var menuBtn = document.getElementById("menu-btn");
var nav = document.getElementById("nav");
if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

// 2. Appointment form validation (only runs on the contact page)
var form = document.getElementById("appointment-form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var service = document.getElementById("service").value;
    var valid = true;

    document.getElementById("name-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("service-error").textContent = "";

    if (name === "") {
      document.getElementById("name-error").textContent = "Please enter your name.";
      valid = false;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      document.getElementById("phone-error").textContent = "Please enter a phone number with at least 10 digits.";
      valid = false;
    }
    if (service === "") {
      document.getElementById("service-error").textContent = "Please choose a service.";
      valid = false;
    }

    var message = document.getElementById("form-message");
    if (valid) {
      message.className = "success";
      message.textContent = "Thank you, " + name + ". We will call you shortly to confirm your appointment.";
      form.reset();
    } else {
      message.className = "";
    }
  });
}
