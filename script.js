// Get the current year and update the footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Add any other interactive elements here later (e.g., smooth scrolling, form validation)