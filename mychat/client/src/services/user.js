function getUser(username, secret) {
    var response = get('users', { key: 'name', value: username }, { key: 'secret', value: secret });
    return handleResponse(response);
}
function login(username, secret) {
    var user = getUser(username, secret);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    return !!user;
}
function logout() {
    localStorage.removeItem('user');
}
function register(username, secret, age, profileImageUrl) {
    var success = false;
    var user = {
        name: username,
        secret: secret,
        age: age,
        profileImageUrl: profileImageUrl
    };
    var response = post('users', user);
    if (handleResponse(response)) {
        localStorage.setItem('user', JSON.stringify(user));
        success = true;
    }
    return success;
}
function check() {
    var currentUser = localStorage.getItem('user');
    if (!currentUser) {
        logout();
    }
}
function getLoggedUser() {
    var user;
    var storageUser = localStorage.getItem('user');
    if (storageUser) {
        user = JSON.parse(storageUser);
    }
    return user;
}
//# sourceMappingURL=user.js.map