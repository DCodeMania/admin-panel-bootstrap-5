const showSidebarBtn = document.querySelector('#show_sidebar_phone');
const showSidebarBtnPc = document.querySelector('#show_sidebar_pc');
const closeSidebarBtn = document.querySelector('#close_sidebar');
const overlay = document.querySelector('#overlay');

showSidebarBtn.onclick = function () {
  const sidebar = document.querySelector('.wrapper');
  sidebar.classList.toggle('show');
}

closeSidebarBtn.onclick = function () {
  const sidebar = document.querySelector('.wrapper');
  sidebar.classList.remove('show');
}

overlay.onclick = function () {
  const sidebar = document.querySelector('.wrapper');
  sidebar.classList.remove('show');
}

showSidebarBtnPc.onclick = function () {
  const sidebar = document.querySelector('.wrapper');
  sidebar.classList.toggle('show_pc');
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}


