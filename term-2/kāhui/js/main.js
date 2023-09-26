document.getElementById('menu-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
  document.getElementById('mobMenu').classList.toggle('mob-menu-hide');
});