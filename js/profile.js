let welcomHeaderElement = document.getElementById('profile-header')
let profilePic = document.getElementById("profile-pic")



current_user = JSON.parse(localStorage.getItem('current_user'))
token = localStorage.getItem('token')

console.log(current_user)
console.log(current_user.first_name)
console.log(current_user.last_name)
console.log(current_user.phone_number)


welcomHeaderElement.innerHTML = `Welcome ${current_user.first_name + " " + current_user.last_name}`
profilePic.src = "http://dnfuqgbuy8ebx.cloudfront.net/" + current_user.profile_picture_link


function logout() {
    localStorage.removeItem('current_user')
    localStorage.removeItem('token')
    window.location.href = "index.html"
}