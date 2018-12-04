/**
 * Registers new user
 */
function onRegister() {
  const username = (document.getElementById('username') as HTMLInputElement).value;
  const secret = (document.getElementById('secret') as HTMLInputElement).value;
  const age = Number((document.getElementById('age') as HTMLInputElement).value);
  const profileImageUrl = (document.getElementById('profileImageUrl') as HTMLInputElement).value;
  if (register(username, secret, age, profileImageUrl)) {
    back();
  }
}
