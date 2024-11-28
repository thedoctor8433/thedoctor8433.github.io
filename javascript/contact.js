// Handle form submission
const contactForm = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const message = document.getElementById('message').value;

    if (message) {
        // Display thank you message next to the submit button
        responseMessage.textContent = "Thank you for the feedback!";
        responseMessage.style.color = 'green';
    } else {
        responseMessage.textContent = "Please write a message before submitting.";
        responseMessage.style.color = 'red';
    }

    // Clear the form
    contactForm.reset();
});
