const submit = document.querySelector('#submitButton');

document
  .querySelectorAll('input')
  .forEach(input => {
    input.addEventListener('blur', touched);
    if ((input.getAttribute('type')) === 'password') {
      input.addEventListener('blur', confirmPassword);
    }
});

function touched(e) {
  this.classList.add('touched');
}

function confirmPassword(e) {
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirmPassword');

  if (confirmPassword.value) {
    if (password.value !== confirmPassword.value){
        console.log('not matching!');
        password.setCustomValidity("Password does not match.");
        confirmPassword.setCustomValidity("Password does not match.");
        document
            .querySelector('#password ~ .invalid-feedback')
            .textContent = "❌ Password does not match";
    }
    else {
        console.log('matching!');
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
        document
            .querySelector('#password ~ .invalid-feedback')
            .textContent = "❌ Must be at least 8 characters long";
    }
  }
}