document.getElementById('submit').addEventListener('click', function () {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email === 'admin@example.com' && password === '1234') {
    alert('Login successful!');
  } else {
    alert('Invalid email or password');
  }
});
