const photoInput = document.getElementById("photo");
const profilePic = document.getElementById("profile-pic");

photoInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {

        // Check if the file is an image.
        if (file.size > 1024 * 1024 * 2) {
            alert("File too large, please pick a smaller file");
            return;
        }

        if (!file.type.match("image.*")) {
            alert("Please select an image file");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

const accountForm = document.getElementById("account-form");

accountForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log("Form Data:", formData);



    fetch('https://team-portfolio-backend.onrender.com/register', {

        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                // If the response is not ok, we'll handle it as an error
                return Promise.reject(response);
            }
            return response.json(); // Parse the JSON if response is ok
        })
        .then(data => {

            const current_user = data

            console.log(current_user)
            console.log(current_user.access_token)

            localStorage.setItem("token", current_user.access_token)
            localStorage.setItem("current_user", JSON.stringify(current_user))

            console.log(localStorage.getItem("current_user"))

            window.location.href = "profile.html"; // Redirect to the user's profile

            // if (data.access_token) {
            //     localStorage.setItem('token', data.access_token)
            //     window.location.href = "profile.html"; // Redirect to the desired URL
            // }
        })
        .catch(error => {
            if (error instanceof Response) {
                // Check if error is an instance of Response
                error.json().then(body => {
                    if (error.status === 422) {
                        // Handle the specific 422 error
                        console.error('Validation Error:', body);
                        // Display the validation message to the user
                        alert(body.detail[0].msg);
                    } else {
                        // Handle other HTTP errors
                        console.error('HTTP Error:', body);
                        alert("An error occurred: " + body.detail || "Something went wrong. Please try again later.");
                    }
                });
            } else {
                // Handle non-HTTP errors (network error, etc.)
                console.error('Network or other error:', error);
                alert("Something went wrong. Please try again later.");
            }
        });
});