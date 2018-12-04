function onRegister() {
    var username = document.getElementById('username').value;
    var secret = document.getElementById('secret').value;
    var age = Number(document.getElementById('age').value);
    var profileImageUrl = document.getElementById('profileImageUrl').value;
    if (register(username, secret, age, profileImageUrl)) {
        back();
    }
}
//# sourceMappingURL=registration.js.map