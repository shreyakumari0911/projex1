
const userData = {
    username: "SHREYA",
    email: "shreya@gmail.com",
    phone: "999-999-9999"
};

function populateProfile() {
    // Get elements by their IDs
    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");

    // Populate user details from the userData object
    usernameElement.textContent = userData.username;
    emailElement.textContent = userData.email;
    phoneElement.textContent = userData.phone;
}

// Call the function to populate the profile when the page loads
window.onload = populateProfile;
