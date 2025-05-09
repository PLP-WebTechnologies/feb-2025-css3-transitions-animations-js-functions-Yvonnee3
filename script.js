 // Function to toggle theme and store user preference in localStorage
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

    // Toggle theme
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Save the new theme preference in localStorage
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);

    // Trigger animation
    const themeToggleButton = document.querySelector('.theme-toggle-btn');
    themeToggleButton.classList.add('animate');
    setTimeout(() => themeToggleButton.classList.remove('animate'), 500); // Remove animation after 500ms
}

// Function to load the user's theme preference from localStorage
function loadUserPreference() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
    document.body.classList.add(savedTheme + '-theme');
}

// Add event listener to the theme toggle button
document.addEventListener('DOMContentLoaded', () => {
    loadUserPreference();

    const themeToggleButton = document.querySelector('.theme-toggle-btn');
    themeToggleButton.addEventListener('click', toggleTheme);
});