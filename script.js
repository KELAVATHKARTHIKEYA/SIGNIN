function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  const errorElements = document.getElementsByClassName("error");
  while (errorElements.length > 0) {
    errorElements[0].parentNode.removeChild(errorElements[0]);
  }

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true; // Track form validity

  // Validate full name
  if (fullName.length < 5) {
    displayError("fullName", "Name must be at least 5 characters");
    isValid = false;
  }

  // Validate email
  if (!email.includes("@")) {
    displayError("email", "Enter a valid email");
    isValid = false;
  }

// Validate phone number
if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
  displayError("phone", "Enter a valid 10-digit phone number");
  isValid = false;
}

// Validate password
if (
  password.length < 8 ||
  password.toLowerCase() === "password" ||
  password.toLowerCase() === fullName.toLowerCase()
) {
  displayError("password", "Enter a strong password");
  isValid = false;
}

// Validate confirm password
if (password !== confirmPassword) {
  displayError("confirmPassword", "Passwords do not match");
  isValid = false;
}

if (isValid) {
  // Form is valid, perform further actions (e.g., submit form)
  // Replace this with your own logic
  console.log("Form submitted successfully!");
}
}
function displayError(fieldId, errorMessage) {
  const field = document.getElementById(fieldId);
  const error = document.createElement("span");
  error.classList.add("error");
  error.textContent = errorMessage;
  field.parentNode.insertBefore(error, field.nextSibling);
}