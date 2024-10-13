// ----------------------------------------
// HTML elements to save
// ----------------------------------------

// The form overall

//const form = document.querySelector("form");
const form = document.getElementById("contact-form");

// Key elements (the input elements)

//const inputs = form.querySelectorAll("input, textarea");
const inputs = Array.from(form.elements).filter((input) => input.name !== "");

// ----------------------------------------
// Error Messages
// ----------------------------------------

// Input error messages for this specific form
const errorMessages = {
  "first-name": { valueMissing: "This field is required" },
  "last-name": { valueMissing: "This field is required" },
  email: {
    valueMissing: "This field is required",
    typeMismatch: "Please enter a valid email address",
  },
  "query-type": { valueMissing: "Please select a query type" },
  message: { valueMissing: "This field is required" },
  "contact-consent": {
    valueMissing: "To submit this form, please consent to being contacted",
  },
};

// ----------------------------------------
// Rendering & Clearing Functions
// ----------------------------------------

// For the overall form

const resetForm = (form) => {
  // Call built-in reset function
  form.reset();

  // Reset error messages
  clearFormErrors(form);

  // Blur the focus?
  form.blur();
};

const clearFormErrors = (form) => {
  // Remove error states from all inputs
  Array.from(form.elements)
    .filter((input) => input.name !== "")
    .forEach((input) => {
      clearInputError(input);
    });
};

const renderFormErrors = (form, messages) => {
  // Check each input and show errors as needed
  // Loop through each of the inputs and check for validity
  Array.from(form.elements)
    .filter((input) => input.name !== "")
    .forEach((input) => {
      input.checkValidity()
        ? clearInputError(input)
        : renderInputError(input, messages[input.name]);
    });
};

const renderFormSuccess = (form) => {
  // Render the success state

  // Reset the form
  resetForm(form);

  // Show the success message (modal)
  const successModal = document.getElementById("success");
  successModal.classList.remove("hidden");
  // Hide the modal after a certain amount of time (5sec)
  setTimeout(() => {
    successModal.classList.add("hidden");
  }, 5000);

  // And/or hide the success modal once the user clicks off of it? Or makes any click or other keyboard event?
};

// For individual input elements

const renderInputError = (input, messages) => {
  // Add "error" class to the input element itself
  input.classList.add("input-error");

  // Find the appropriate error message
  var errorMessage = "Error";
  if (input.validity["valueMissing"]) {
    errorMessage = messages["valueMissing"];
  }
  if (input.validity["typeMismatch"]) {
    errorMessage = messages["typeMismatch"];
  }

  // If utilizing built-in validity methods
  //input.setCustomValidity(errorMessage);
  //input.reportValidity();

  // Find the error element associated with this input element
  const errorElement = document.getElementById(`${input.name}-error`);
  if (errorElement) {
    // Set error element's text content to be the error message
    errorElement.textContent = errorMessage;
    // Unhide the error element
    errorElement.classList.remove("hidden");
  }
};

const clearInputError = (input) => {
  // Remove error class from the input element itself
  input.classList.remove("input-error");
  // Hide the error message element
  const errorElement = document.getElementById(`${input.name}-error`);
  if (errorElement) {
    errorElement.classList.add("hidden");
    errorElement.textContent = "";
  }
};

// ----------------------------------------
// Event Listener Functions
// ----------------------------------------

const handleSubmit = (e) => {
  e.preventDefault();
  e.target.checkValidity()
    ? renderFormSuccess(e.target)
    : renderFormErrors(e.target, errorMessages);
};

const handleElementBlur = (e) => {
  e.target.checkValidity()
    ? clearInputError(e.target)
    : renderInputError(e.target, errorMessages[e.target.name]);
};

// ----------------------------------------
// Main program
// ----------------------------------------

// Add a submit event listener to the overall form
form.addEventListener("submit", handleSubmit);

// Add a blur event listener to each input element
inputs.forEach((input) => {
  input.addEventListener("blur", handleElementBlur);
});

// ----------------------------------------
// End
// ----------------------------------------
