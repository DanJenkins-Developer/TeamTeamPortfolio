
console.log("hello")

let loginForm = document.getElementById("loginForm")


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let usernameElement = document.getElementById("username")
    let passwordElement = document.getElementById("password")

    console.log(usernameElement.value)
    console.log(passwordElement.value)



    //localStorage.setItem('uname', usernameElement.value)
    localStorage.setItem('pw', passwordElement.value)

    window.localStorage.setItem('uname', usernameElement.value);

    // let authToken = localStorage.getItem('authToken')
    // console.log("Auth token:: " + authToken)
    // console.log("hello again")
    // console.log(localStorage.getItem('authToken'))

    console.log("Inside handle login ::")
    console.log(window.localStorage.getItem("uname"))

    window.location.href = 'profile.html'
})


// function handleLogin() {


//     console.log("Loggin in")
//     console.log("Username :: " + usernameElement.value)
//     console.log("Password :: " + passwordElement.value)

// }