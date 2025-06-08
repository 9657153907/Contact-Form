document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    // Optionally clear the form
    document.getElementById("contactForm").reset();
  }
});
