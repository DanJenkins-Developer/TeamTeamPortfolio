let welcomHeaderElement = document.getElementById('profile-welcomeHeader')
let profilePic = document.getElementById("profile-profile-pic")



current_user = JSON.parse(localStorage.getItem('current_user'))
token = localStorage.getItem('token')

console.log(current_user)
console.log(current_user.first_name)
console.log(current_user.last_name)
console.log(current_user.phone_number)


welcomHeaderElement.innerHTML = `Welcome ${current_user.first_name + " " + current_user.last_name}`
profilePic.src = "http://dnfuqgbuy8ebx.cloudfront.net/" + current_user.profile_picture_link


// if (!current_user) {
//     const token = localStorage.getItem('token')

//     if (!token)
//         window.location.href = "index.html"; // Redirect to the desired URL

//     const headers = new Headers({
//         'Authorization': `Bearer ${token}`
//     });

//     fetch('http://127.0.0.1:8000/users/me', {

//         method: 'GET',
//         headers: headers // Pass headers
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log("Received data:", data);
//             welcomHeaderElement.innerHTML = `Welcome ${data.first_name + " " + data.last_name}`
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }


// document.addEventListener('DOMContentLoaded', function () {

//     // if (!isAuthenticated()) {
//     //     redirectToLogin();
//     // }
//     const token = localStorage.getItem('token')



//     // Set up the headers with the Bearer token
//     const headers = new Headers({
//         'Authorization': `Bearer ${token}`
//     });



//     fetch('http://127.0.0.1:8000/users/me', {

//         method: 'GET',
//         headers: headers // Pass headers
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log("Received data:", data);
//             welcomHeaderElement.innerHTML = `Welcome ${data.first_name + " " + data.last_name}`
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });

//     // console.log("Inside handle profile ::")
//     // console.log(window.localStorage.getItem("uname"))

//     // let welcomHeaderElement = document.getElementById('welcomeHeader')
//     // let username = localStorage.getItem('uname')
//     // welcomHeaderElement.innerHTML = `Welcome ${username}`

// })