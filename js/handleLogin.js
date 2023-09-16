
console.log("hello")

let loginForm = document.getElementById("loginForm")


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let usernameElement = document.getElementById("username")
    let passwordElement = document.getElementById("password")

    console.log(usernameElement.value)
    console.log(passwordElement.value)

    localStorage.setItem('pw', passwordElement.value)

    window.localStorage.setItem('uname', usernameElement.value);


    console.log("Inside handle login ::")
    console.log(window.localStorage.getItem("uname"))

    window.location.href = 'profile.html'
})