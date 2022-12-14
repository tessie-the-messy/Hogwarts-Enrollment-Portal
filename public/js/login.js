// add a logoutbutton the the nav bar

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/students/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("trying to go to landing page");
      document.location.replace("/landingpage");
    } else {
      alert("Failed to log in.");
      console.log("Failed to log in");
    }
  }
};

const enrollFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email-enroll").value.trim();
  const password = document.querySelector("#password-enroll").value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch("/api/students", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/landingpage");
    } else {
      alert("Failed to sign up.");
    }
  }
};

// const loginForm = document.querySelector(".login-form");
// if (loginForm) {
//   loginForm.addEventListener("submit", loginFormHandler);
// }

// const enrollForm = document.querySelector(".enroll-form");
// if (enrollForm) {
//   enrollForm.addEventListener("submit", enrollFormHandler);
// }
