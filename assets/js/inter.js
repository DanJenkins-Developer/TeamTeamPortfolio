const login_button_element = document.getElementById("loginBtn");
const register_button_element = document.getElementById("registerBtn");

login_button_element.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/login.html";
});

register_button_element.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/register.html";
});