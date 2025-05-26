const sidebar = document.querySelector('aside');
const sidebarToggle = document.querySelector('#sidebar-toggle')

sidebarToggle.onclick = toggleSidebar;

function toggleSidebar() {
	sidebar.classList.toggle('open')
}