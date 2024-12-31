async function fetchUserData() {
  try {
    const response = await fetch("assets/data/users.json");
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!email) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = "Please enter a valid email.";
      isValid = false;
    }

    if (!password) {
      passwordError.textContent = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (isValid) {
      const users = await fetchUserData();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("bookingFormData", JSON.stringify(user));
        window.location.hash = "#home";
      } else {
        emailError.textContent = "Invalid email or password.";
      }
    }
  });
