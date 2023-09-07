$(document).ready(function(){
       // Add smooth scrolling to all links
       $("a").on('click', function(event) {
     
         // Make sure this.hash has a value before overriding default behavior
         if (this.hash !== "") {
           // Prevent default anchor click behavior
           event.preventDefault();
     
           // Store hash
           var hash = this.hash;
     
           // Using jQuery's animate() method to add smooth page scroll
           // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
           $('html, body').animate({
             scrollTop: $(hash).offset().top
           }, 800, function(){
     
             // Add hash (#) to URL when done scrolling (default click behavior)
             window.location.hash = hash;
           });
         } // End if
       });
     });

     // Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

