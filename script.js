const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const toggleBtn = document.getElementById('sidebar-toggle');
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. Sidebar Toggle Logic
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    mainContent.classList.toggle('expanded');
    
    // Change button icon
    if (sidebar.classList.contains('closed')) {
        toggleBtn.textContent = '☰';
    } else {
        toggleBtn.textContent = '✕';
    }
});

// 2. Theme Toggle Logic
// Check saved preference
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
}

themeBtn.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});