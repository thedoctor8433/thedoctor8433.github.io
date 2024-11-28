// Accessing the canvas and context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Initial pen settings
let isDrawing = false;
let penColor = '#000'; // Default color is black
let penSize = 5; // Default pen size

// Function to start drawing
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
});

// Function to continue drawing
canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.strokeStyle = penColor;
        ctx.lineWidth = penSize;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
});

// Function to stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Function to change the pen color
function changeColor(color) {
    penColor = color;
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
