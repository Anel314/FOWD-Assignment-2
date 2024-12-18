document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const date = document.getElementById("date");
    const location = document.getElementById("location");
    const password = document.getElementById("password");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const dateError = document.getElementById("dateError");
    const locationError = document.getElementById("locationError");
    const passwordStrength = document.getElementById("passwordStrength");
    // const successMessage = document.getElementById("successMessage");

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    if (dateError) dateError.textContent = "";
    if (locationError) locationError.textContent = "";
    passwordStrength.textContent = "";

    if (!name.value.trim()) {
      nameError.textContent = "Please enter your full name.";
      name.focus();
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = "Please enter a valid email address.";
      email.focus();
      isValid = false;
    }

    if (!date.value) {
      let dateError = document.getElementById("dateError");
      if (!dateError) {
        dateError = document.createElement("span");
        dateError.id = "dateError";
        dateError.className = "error-message";
        date.parentNode.insertBefore(dateError, date.nextSibling);
      }
      dateError.textContent = "Please select a preferred date.";
      date.focus();
      isValid = false;
    }

    if (!location.value) {
      let locationError = document.getElementById("locationError");
      if (!locationError) {
        locationError = document.createElement("span");
        locationError.id = "locationError";
        locationError.className = "error-message";
        location.parentNode.insertBefore(locationError, location.nextSibling);
      }
      locationError.textContent = "Please select a location.";
      location.focus();
      isValid = false;
    }

    const passwordValue = password.value;
    const passwordCriteria = {
      length: passwordValue.length >= 8,
      lowercase: /[a-z]/.test(passwordValue),
      uppercase: /[A-Z]/.test(passwordValue),
      digit: /\d/.test(passwordValue),
      special: /[@$!%*?&#]/.test(passwordValue),
    };

    if (!Object.values(passwordCriteria).every(Boolean)) {
      passwordStrength.innerHTML = `
      <p>Password must contain:</p>
      <ul>
        <li>${passwordCriteria.length ? "✔️" : "❌"} At least 8 characters</li>
        <li>${passwordCriteria.lowercase ? "✔️" : "❌"} A lowercase letter</li>
        <li>${passwordCriteria.uppercase ? "✔️" : "❌"} An uppercase letter</li>
        <li>${passwordCriteria.digit ? "✔️" : "❌"} A number</li>
        <li>${passwordCriteria.special ? "✔️" : "❌"} A special character</li>
      </ul>`;
      password.focus();
      isValid = false;
    }

    if (isValid) {
      // successMessage.style.display = "block";

      const formData = {
        name: name.value.trim(),
        email: email.value.trim(),
        date: date.value,
        location: location.value,
        password: password.value,
      };

      const sortedEntries = Object.entries(formData).sort(([keyA], [keyB]) =>
        keyA.localeCompare(keyB)
      );
      const sortedData = Object.fromEntries(sortedEntries);

      localStorage.setItem("bookingFormData", JSON.stringify(sortedData));
      console.log("Form data saved to LocalStorage:", sortedData);

      name.value = "";
      email.value = "";
      date.value = "";
      location.value = "";
      password.value = "";
      passwordStrength.innerHTML = "";

      var toast = document.getElementById("toast");
      toast.className = "show";
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 3000);
    }
    // else {
    //   successMessage.style.display = "none";

    // }
  });
