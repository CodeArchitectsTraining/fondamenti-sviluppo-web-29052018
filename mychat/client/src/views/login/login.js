function onLogin() {
    var username = document.getElementById('username').value;
    var secret = document.getElementById('secret').value;
    if (login(username, secret)) {
        window.location.href = '../home/home.html';
    }
}
function onRegistration() {
    window.location.href = '../registration/registration.html';
}
//# sourceMappingURL=login.js.map