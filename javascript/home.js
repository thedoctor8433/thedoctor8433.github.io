// Check if user is already logged in
if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "resources.html"; // Redirect to resources page
}

// Sign-up Logic
const form = document.getElementById("signup-form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form refresh
    const username = document.getElementById("username").value;

    // Save user session and mark as logged in
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");

    message.textContent = `Welcome, ${username}! Redirecting...`;

    setTimeout(() => {
        window.location.href = "resources.html";
    }, 2000);
});
