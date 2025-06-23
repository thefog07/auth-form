document.getElementById('submit').addEventListener('click', () => {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const remember = document.getElementById('remember').checked;

  // Remove previous animation
  emailInput.classList.remove('shake');
  passwordInput.classList.remove('shake');

  if (email === 'admin@example.com' && password === '1234') {
    if (remember) {
      localStorage.setItem('savedEmail', email);
    } else {
      localStorage.removeItem('savedEmail');
    }
    alert('Login successful!');
  } else {
    alert('Invalid email or password');
    emailInput.classList.add('shake');
    passwordInput.classList.add('shake');
  }
});

// Autofill email if previously saved
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('savedEmail');
  if (saved) {
    document.getElementById('email').value = saved;
    document.getElementById('remember').checked = true;
  }
});
