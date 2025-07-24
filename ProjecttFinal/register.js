document.addEventListener("DOMContentLoaded", function () {
    const userPass = document.getElementById("userPass");
    const toggle1 = document.getElementById("toggle1");
  
    toggle1.addEventListener("click", function () {
      if (userPass.type === "password") {
        userPass.type = "text";
        toggle1.textContent = "👁️";
      } else {
        userPass.type = "password";
        toggle1.textContent = "👁️";
      }
    });
  
    const confirmPass = document.getElementById("confirmPass");
    const toggle2 = document.getElementById("toggle2");
  
    toggle2.addEventListener("click", function () {
      if (confirmPass.type === "password") {
        confirmPass.type = "text";
        toggle2.textContent = "👁️";
      } else {
        confirmPass.type = "password";
        toggle2.textContent = "👁️";
      }
    });
  });
  