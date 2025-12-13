// Wait for everything to load first
document.addEventListener('DOMContentLoaded', () => {

  /* -------------------- SEARCH BAR TOGGLE -------------------- */
  const button = document.querySelector('.search-btn');
  const searchBar = document.querySelector('.sea-hov');

  if (button && searchBar) {
    button.addEventListener('click', () => {
      searchBar.style.display = (searchBar.style.display === 'flex') ? 'none' : 'flex';
    });
  }

  /* -------------------- SIDEBAR (slide-in) -------------------- */
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  const sidebarCloseBtn = document.getElementById('sidebar-close');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('active');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('active');
  }

  if (menuToggle) menuToggle.addEventListener('click', (e) => { e.preventDefault(); openSidebar(); });
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', (e) => { e.preventDefault(); closeSidebar(); });

  // Close when clicking outside the sidebar
  window.addEventListener('click', (e) => {
    if (!sidebar) return;
    if (!sidebar.classList.contains('active')) return;
    const clickedInSidebar = sidebar.contains(e.target);
    const clickedMenu = menuToggle && menuToggle.contains(e.target);
    if (!clickedInSidebar && !clickedMenu) closeSidebar();
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSidebar(); });

  // Ensure sidebar is closed on load
  closeSidebar();

});
