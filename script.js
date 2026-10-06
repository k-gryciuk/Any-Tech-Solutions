// ---------- mobile menu ----------
var menuBtn = document.getElementById("menu-btn");
var nav = document.getElementById("nav");

// these only exist if the page has a menu, so check first
if (menuBtn && nav) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  // close the menu after a link is tapped
  var navLinks = nav.getElementsByTagName("a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      nav.classList.remove("open");
    });
  }
}

// ---------- appointment form ----------
var form = document.getElementById("appointment-form");

// only the contact page has this form
if (form) {
  var nameInput = document.getElementById("name");
  var phoneInput = document.getElementById("phone");
  var serviceInput = document.getElementById("service");

  var nameError = document.getElementById("name-error");
  var phoneError = document.getElementById("phone-error");
  var serviceError = document.getElementById("service-error");
  var message = document.getElementById("form-message");

  form.addEventListener("submit", function (event) {
    // stop the page from refreshing
    event.preventDefault();

    var name = nameInput.value.trim();
    var phone = phoneInput.value.trim();
    var service = serviceInput.value;
    var valid = true;

    // wipe errors from the last try
    nameError.textContent = "";
    phoneError.textContent = "";
    serviceError.textContent = "";

    // name can't be blank
    if (name === "") {
      nameError.textContent = "Please enter your name.";
      valid = false;
    }

    // count only the digits so (516) 555-1234 and 5165551234 both work
    if (phone.replace(/\D/g, "").length < 10) {
      phoneError.textContent = "Please enter a phone number with at least 10 digits.";
      valid = false;
    }

    // they have to pick a service
    if (service === "") {
      serviceError.textContent = "Please choose a service.";
      valid = false;
    }

    if (valid) {
      message.className = "success";
      message.textContent = "Thank you, " + name + ". We will call you shortly to confirm your appointment.";
      form.reset();
    } else {
      // hide the success box if it was showing from before
      message.className = "";
      message.textContent = "";
    }
  });
}
