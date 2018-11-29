function get(route) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    var parameter = '';
    params.forEach(function (p, i) { return parameter = "" + parameter + (i > 0 ? '&' : '') + p.key + "=" + p.value; });
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://localhost:3000/" + route + "?" + parameter, false);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
    return xhr.responseText && JSON.parse(xhr.responseText);
}
function post(route, body) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/" + route, false);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(body));
    return xhr.responseText && JSON.parse(xhr.responseText);
}
function handleResponse(response) {
    if (!response) {
        alert('Internal error');
    }
    else if (response.error) {
        alert(response.error);
    }
    else {
        return response.data;
    }
}
function back() {
    window.history.back();
}
//# sourceMappingURL=request.js.map