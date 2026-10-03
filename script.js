let username;
let password;

document.getElementById("loginForm").addEventListener("submit", function submit() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    window.alert(username + " " + password);
});

submit();