// Password show and hide
const password = document.getElementById("password");
const passwordIcon = document.getElementById("passwordIcon");

passwordIcon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    passwordIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.type = "password";
    passwordIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
});

const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordIcon = document.getElementById("confirmPasswordIcon");
confirmPasswordIcon.addEventListener("click", () => {
  if (confirmPassword.type == "text") {
    confirmPassword.type = "password";
    confirmPasswordIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    confirmPassword.type = "text";
    confirmPasswordIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
});