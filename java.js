function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');

    // Check if the sidebar is currently hidden or shown
    const isHidden = window.getComputedStyle(sidebar).right === '-250px';

    // If the sidebar is hidden, slide it in from the right; otherwise, slide it out to the right
    sidebar.style.right = isHidden ? '0' : '-250px';
    
    document.querySelector('.menu-btn').addEventListener('click', toggleSidebar);

}