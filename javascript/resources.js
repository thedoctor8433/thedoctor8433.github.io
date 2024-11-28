// Function to check if the user is logged in
function checkLoginStatus() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("Please log in to access resources.");
        window.location.href = "index.html"; // Redirect to the homepage
    }
}

// Function to handle user logout
function handleLogout() {
    // Clear stored data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    // Notify the user
    alert("You have been logged out.");

    // Redirect to the homepage
    window.location.href = "index.html";
}

// Attach event listeners once the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    checkLoginStatus();

    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", handleLogout);
    }
});
