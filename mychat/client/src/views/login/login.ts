/**
 * Performs login
 */
function onLogin() {
  const username = (document.getElementById('username') as HTMLInputElement).value;
  const secret = (document.getElementById('secret') as HTMLInputElement).value;
  if (login(username, secret)) {
    window.location.href = '../home/home.html';
  }
}

/**
 * Go to registration page
 */
function onRegistration() {
  window.location.href = '../registration/registration.html';
}
