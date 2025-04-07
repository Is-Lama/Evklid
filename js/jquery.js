$( function() {
    $( "#accordion" ).accordion({
      header: "div",
      icons: false,
      collapsible: true,
      active: false,
      heightStyle: "content",
      animate:{
      duration:400,
      easing:'easeInOutSine'
      }
    });
});

document.addEventListener('DOMContentLoaded', function() {  
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.add('is-active');
  });
  document.querySelector('#close-icon').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.remove('is-active');    
  });
});

