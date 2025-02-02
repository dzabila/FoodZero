document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const password = document.getElementById("password").value.trim();

    const fullNameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const passwordError = document.getElementById("passwordError");


    fullNameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (fullName === "") {
      fullNameError.textContent = "Full name is required.";
      isValid = false;
    }

    if (email === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = "Please enter a valid email.";
      isValid = false;
    }

    if (message === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    }
    if (password === "") {
      passwordError.textContent = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isValid = false;
    }
    if (isValid) {
      alert("Form submitted successfully!");

    }
  });
const passwordInput = document.getElementById("password");
const showHideButton = document.getElementById("showHideButton");

showHideButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showHideButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showHideButton.textContent = "Show";
  }
});
