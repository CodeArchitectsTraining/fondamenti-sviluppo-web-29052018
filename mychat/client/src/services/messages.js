function sendMessage(username, secret, text) {
    var success = false;
    var message = {
        userName: username,
        userSecret: secret,
        text: text
    };
    var response = post('messages', message);
    if (handleResponse(response)) {
        success = true;
    }
    return success;
}
function getMessages() {
    var response = get('messages');
    return handleResponse(response);
}
//# sourceMappingURL=messages.js.map