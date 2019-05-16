function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("arrow").style.display = "block";
    } else {
      document.getElementById("arrow").style.display = "none";
    }
    var nav=document.getElementByClass("navbar");
    if(document.body.scrollTop() < window.innerHeight-100) {
    nav.classList.add('trans');
    } else {
      nav.classList.remove('trans');
     }


  };
  
  $(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();
$(window).scroll(function(){
if($(this).scrollTop() < window.innerHeight-100) { 
      $('.navbar').addClass('trans');
  } else {
      $('.navbar').removeClass('trans');
  }

});
});
