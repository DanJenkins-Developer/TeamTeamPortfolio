function isAuthenticated() {
    //localStorage.clear()
    return Boolean(window.localStorage.getItem('uname'))
}

function redirectToLogin() {
    window.location.href = 'login.html'
}

document.addEventListener('DOMContentLoaded', function () {

    if (!isAuthenticated()) {
        redirectToLogin();
    }


    // console.log("Inside handle profile ::")
    // console.log(window.localStorage.getItem("uname"))

    let welcomHeaderElement = document.getElementById('welcomeHeader')
    let username = localStorage.getItem('uname')
    welcomHeaderElement.innerHTML = `Welcome ${username}`

})