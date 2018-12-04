let loggedUser = getLoggedUser();
/**
 * Performs logout
 */
function onLogout() {
  logout();
  loggedUser = undefined;
  window.location.href = '../login/login.html';
}

function send() {
  const message = (document.getElementById('text') as HTMLTextAreaElement);
  const success = sendMessage(loggedUser.name, loggedUser.secret, message.value);
  if (success) {
    message.value = '';
  }
  setupMessages();
}

function setupMessages() {
  const messages = getMessages();
  const messagesElement = document.getElementById('messages');
  messagesElement.innerHTML = '';
  messages.forEach(m => {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    if (m.userName === loggedUser.name) {
      messageElement.className += ' my-message';
    }
    const textElement = document.createElement('span');
    textElement.innerText = m.text;
    const profileElement = document.createElement('img');
    profileElement.src = m.profileImageUrl;
    messageElement.appendChild(profileElement);
    messageElement.appendChild(textElement);
    messagesElement.appendChild(messageElement);
  });
}

setTimeout(() => {
  setupMessages();
}, 1);

setInterval(() => {
  setupMessages();
}, 2000)
