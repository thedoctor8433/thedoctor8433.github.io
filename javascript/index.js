// Check if the user is logged in
window.onload = function() {
    const logoutButton = document.getElementById('logoutButton');
    const loginMessage = document.getElementById('loginMessage');
    const loggedInMessage = document.getElementById('loggedInMessage');

    // If user is logged in (check for user data in localStorage)
    if (localStorage.getItem('isLoggedIn')) {
        loginMessage.style.display = 'none';
        loggedInMessage.style.display = 'block';
    } else {
        loginMessage.style.display = 'block';
        loggedInMessage.style.display = 'none';
    }

    // Logout function when button is clicked
    logoutButton.addEventListener('click', function() {
        // Remove user data from localStorage to log out
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username'); // Optional: Clear username or other session data

        // Redirect to home page after logging out
        window.location.href = 'index.html';
    });
};
