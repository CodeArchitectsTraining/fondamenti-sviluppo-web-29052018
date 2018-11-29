var user = localStorage.getItem('user');
if (user) {
    window.location.href = './src/views/home/home.html';
}
else {
    window.location.href = './src/views/login/login.html';
}
//# sourceMappingURL=index.js.map