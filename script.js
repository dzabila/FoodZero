var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

function scrollToTop() {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
}
