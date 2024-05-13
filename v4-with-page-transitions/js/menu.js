// mobile nav
let menuToggle = document.getElementById('menu-toggle')
menuToggle.addEventListener('click', function() {
  document.body.classList.toggle('mob-nav-open');
  document.getElementById('mobMenu').classList.toggle('mob-menu-hide');
  menuToggle.classList.toggle('menu-open');
});

// get menu element
let menu = document.getElementById('menu');
let menuIndicator = document.getElementById('menu-indicator');

// check if menu is expanded by default
let defaultExpanded = menu.classList.contains('default-expanded');
// console.log(defaultExpanded);

// check if menu has been opened
let menuBeenExpanded = menu.classList.contains('menu-expanded');
// console.log(menuBeenExpanded);

// console.log(defaultExpanded || menuBeenExpanded);

// if menu is open, don't show menu indicator
function toggleMenuIndicator() {
  if (defaultExpanded || menuBeenExpanded) {
    menuIndicator.classList.add('hide-menu-indicator')
  } else {
    menuIndicator.classList.remove('hide-menu-indicator');
  }
};

toggleMenuIndicator();

// if menu isn't open by default, expands or collapses depend on mouse location
if (!defaultExpanded) {
  menu.addEventListener("mouseenter", function() {
    menu.classList.add('menu-expanded');
    menuBeenExpanded = true;
    toggleMenuIndicator();
  });
  
  menu.addEventListener("mouseleave", function() {
    menu.classList.remove('menu-expanded');
    menuBeenExpanded = false;
    toggleMenuIndicator();
  });
};
