var loggedUser = getLoggedUser();
function onLogout() {
    logout();
    loggedUser = undefined;
    window.location.href = '../login/login.html';
}
function send() {
    var message = document.getElementById('text');
    var success = sendMessage(loggedUser.name, loggedUser.secret, message.value);
    if (success) {
        message.value = '';
    }
    setupMessages();
}
function setupMessages() {
    var messages = getMessages();
    var messagesElement = document.getElementById('messages');
    messagesElement.innerHTML = '';
    messages.forEach(function (m) {
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        if (m.userName === loggedUser.name) {
            messageElement.className += ' my-message';
        }
        var textElement = document.createElement('span');
        textElement.innerText = m.text;
        var profileElement = document.createElement('img');
        profileElement.src = m.profileImageUrl;
        messageElement.appendChild(profileElement);
        messageElement.appendChild(textElement);
        messagesElement.appendChild(messageElement);
    });
}
setTimeout(function () {
    setupMessages();
}, 1);
setInterval(function () {
    setupMessages();
}, 2000);
//# sourceMappingURL=home.js.map
