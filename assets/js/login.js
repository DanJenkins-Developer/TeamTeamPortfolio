const accountForm = document.getElementById("account-form");

accountForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log("Form Data:", formData);
    postFormData(formData)
        .then(data => {
            console.log("Received token:", data.access_token);
            handleSuccessfulLogin(data);
        })
        .catch(handleFormError);
});

async function postFormData(formData) {
    const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        body: formData
    });
    const data = await handleResponse(response);
    return data.json();
}

function handleResponse(response) {
    if (!response.ok) {
        return response.json().catch(() => {
            throw new Error("Non-JSON error response");
        }).then(json => {
            throw new Error(json.detail || "An error occurred");
        });
    }
    return response;
}

function handleSuccessfulLogin(data) {
    const current_user = data
    localStorage.setItem("token", current_user.access_token)
    localStorage.setItem("current_user", JSON.stringify(current_user))
    window.location.href = "profile.html";
}

function handleFormError(error) {
    console.error('Error:', error);
    displayErrorToUser(error.message);
}

function displayErrorToUser(message) {
    // Implement user-friendly error display, maybe next to the form fields
    alert(message);
}
