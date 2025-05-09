document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
  
    // Validation
    const mobileValid = /^[0-9]{10}$/.test(mobile);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    if (!mobileValid) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }
  
    if (!emailValid) {
      alert("Enter a valid email address.");
      return;
    }
  
    const newUser = { firstName, lastName, dob, gender, mobile, email };
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("User registered successfully!");
    document.getElementById("registrationForm").reset();
  });
  