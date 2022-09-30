// Form validation
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const genderM = document.getElementById("male");
const genderF = document.getElementById("female");
const paymentMethod = document.getElementById("payment");
const agreement = document.getElementById("agreement");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

let validateInputs = () => {
  const usernameValue = username.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  let successCount = 0;

  // Username
  if (usernameValue === "") {
    setError(username, "Username cannot be empty");
  } else if (usernameValue.length < 3) {
    setError(username, "Username must contain 3 or more characters");
  } else {
    setSuccess(username);
    successCount += 1;
  }

  // Email
  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (emailValue.startsWith(".") || emailValue.startsWith("@")) {
    setError(email, "Email must not start with '.' or '@'");
  } else if (emailValue.indexOf(".") === emailValue.length - 1) {
    setError(email, "Email must not end with '.'");
  } else if (!emailValue.endsWith("@gmail.com")) {
    setError(email, "Email must end with '@gmail.com'");
  } else {
    setSuccess(email);
    successCount += 1;
  }

  // Phone
  if (phoneValue === "") {
    setError(phone, "Phone Number required");
  } else if (phoneValue.length != 11) {
    setError(phone, "Phone Number Incorrect, ex:08xxxxxxxxx");
  } else {
    setSuccess(phone);
    successCount += 1;
  }

  // Gender
  if (!genderM.checked && !genderF.checked) {
    setError(gender, "You haven't checked the Gender button");
  } else {
    removeError(gender);
    successCount += 1;
  }

  // Payment Method
  if (paymentMethod.value === "") {
    setError(paymentMethod, "Select your payment");
  } else {
    removeError(paymentMethod);
    successCount += 1;
  }

  // Agreement
  if (!agreement.checked) {
    setError(agreement, "You haven't checked the Agree button");
  } else {
    removeError(agreement);
    successCount += 1;
  }

  // Pre-Registration Success
  if (successCount === 6) {
    alert(
      "You've successfully registered for McDoland Delivery! You'll be able to order via app on your phone."
    );
  }
};

let removeError = (input) => {
  input.parentElement.className = "input-section";
};

let setError = (input, message) => {
  const inpSection = input.parentElement;
  const errorMsg = inpSection.querySelector(".error-msg");

  inpSection.className = "input-section error";
  errorMsg.innerText = message;
};

let setSuccess = (input) => {
  const inpSection = input.parentElement;
  inpSection.className = "input-section success";
};
