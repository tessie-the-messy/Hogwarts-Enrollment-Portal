const logout = async () => {
  console.log("logging ouuuuut")
  const response = await fetch("/api/students/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

const logoutForm =document.querySelector(".logout-form")
if (logoutForm) {
  logoutForm.addEventListener("click", logout);
}

