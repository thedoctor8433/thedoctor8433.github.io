// Function to create and animate bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Randomize size, position, and animation duration
    const size = Math.random() * 50 + 10; // Bubble size between 10px and 60px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
    bubble.style.animationDuration = `${Math.random() * 5 + 3}s`; // Random float duration between 3-8 seconds
    bubble.style.animationDelay = `${Math.random() * 2}s`; // Random start delay

    // Append bubble to the body
    document.body.appendChild(bubble);

    // Remove bubble after animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Generate bubbles at random intervals
setInterval(createBubble, 500); // Create a bubble every 500ms
