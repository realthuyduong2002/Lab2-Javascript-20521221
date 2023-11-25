var user = document.getElementById("user");
var password = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
var login = document.getElementById("login");
var hello = document.getElementById("hello");

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eye.style.display = "block";
        eyeSlash.style.display = "none";
    } else {
        password.type = "password";
        eye.style.display = "none";
        eyeSlash.style.display = "block";
    }
}

function loginClick() {
    var name = document.querySelector("#user-name");
    var usernameValue = user.value.trim(); // Get the username and remove leading and trailing spaces
    var passwordValue = password.value.trim(); // Get the password and remove leading and trailing spaces
    // Check username and password condition
    var usernameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(usernameValue); // Check if Username contains spaces and letters
    var passwordValid = /^[^\s@]+$/.test(passwordValue); // Check Password does not contain spaces and does not contain the @ character
    if (!usernameValid || !passwordValid) {
        alert("Invalid Name or Password.");
    } else {
        // Login success
        login.style.display = 'none';
        hello.style.display = 'block';
        if (usernameValue !== '') {
            name.innerHTML = usernameValue;
        } else {
            name.innerHTML = 'Tên Đăng Nhập Rỗng';
        }
    }
}


function logoutClick() {
    login.style.display = 'block';
    hello.style.display = 'none';
}