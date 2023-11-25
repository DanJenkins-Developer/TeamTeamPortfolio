const accountForm = document.getElementById("account-form");

accountForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    console.log(formData)

    fetch('http://127.0.0.1:8000/login', {

        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log("Received token:", data.access_token);
            localStorage.setItem('token', data.access_token)
            window.location.href = "profile.html"; // Redirect to the desired URL
        })
        .catch(error => {
            console.error('Error:', error);
        });
    // console.log("Form Data:", formData);
    // console.log("First Name: " )
});