$(document).ready(function(){
    $('.header__slider-box').slick({
    
    });
});
const body = document.querySelector("body");
const checkBox = document.getElementById('menu__burger_check')
const headerMenu = document.querySelector('.header__menu')

if(body && checkBox) {
  body.addEventListener('click', function() {
    if(checkBox.checked){
      console.log('123')
      checkBox.checked = false;
    }
  })
  headerMenu.addEventListener('click', function(e) {
    e.stopPropagation()
  })
}