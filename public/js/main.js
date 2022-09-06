const showSidebarBtn = document.querySelector('#show_sidebar_phone');
const showSidebarBtnPc = document.querySelector('#show_sidebar_pc');
const closeSidebarBtn = document.querySelector('#close_sidebar');
const overlay = document.querySelector('#overlay');
const fullscreen = document.querySelector('#fullscreen');
const wrapper = document.querySelector('.wrapper');

showSidebarBtn.onclick = function () {
  wrapper.classList.toggle('show');
}

closeSidebarBtn.onclick = function () {
  wrapper.classList.remove('show');
}

overlay.onclick = function () {
  wrapper.classList.remove('show');
}

showSidebarBtnPc.onclick = function () {
  wrapper.classList.toggle('show_pc');
}


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltipTriggerList.forEach(function (item) {
  new bootstrap.Tooltip(item);
});

fullscreen.onclick = function () {
  const i = document.querySelector('#fullscreen i');
  if (i.classList.contains('fa-expand')) {
    i.classList.add('fa-compress');
    i.classList.remove('fa-expand');
    document.documentElement.requestFullscreen();
  } else {
    i.classList.add('fa-expand');
    i.classList.remove('fa-compress');
    document.exitFullscreen();
  }
}



