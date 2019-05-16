
function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("arrow").style.display = "block";
    } else {
      document.getElementById("arrow").style.display = "none";
    }
  };
  $(document).ready(function(){

$(window).scroll(function(){
if($(this).scrollTop() < window.innerHeight-100) { 
      $('.navbar').addClass('trans');
  } else {
      $('.navbar').removeClass('trans');
  }

});
});
