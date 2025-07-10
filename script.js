// Registration validation
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const appointmentForm = document.getElementById("appointmentForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      const email = document.getElementById("email").value;
      const contact = document.getElementById("contact").value;
      const password = document.getElementById("password").value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        e.preventDefault();
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        e.preventDefault();
      }

      if (!/^\d{10}$/.test(contact)) {
        alert("Contact number must be 10 digits.");
        e.preventDefault();
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const msg = document.getElementById("loginMsg");

      if (email === "user@example.com" && password === "123456") {
        msg.textContent = "Login successful!";
        msg.style.color = "green";
      } else {
        msg.textContent = "Invalid credentials!";
        msg.style.color = "red";
        e.preventDefault();
      }
    });
  }

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", (e) => {
      alert("Appointment booked successfully!");
      e.preventDefault();
    });
  }
});
