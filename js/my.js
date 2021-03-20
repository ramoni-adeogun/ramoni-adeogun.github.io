
function home(){
   document.getElementById('bio').style.display="none";
   document.getElementById('home').style.display="inline";
   document.getElementById('publications').style.display="none";
   document.getElementById('teaching').style.display="none";
   document.getElementById('fam').style.display="none";
}
function bio(){
   document.getElementById('bio').style.display="inline";
   document.getElementById('home').style.display="none";
   document.getElementById('publications').style.display="none";
   document.getElementById('teaching').style.display="none";
   document.getElementById('fam').style.display="none";
}
function publications(){
   document.getElementById('bio').style.display="none";
   document.getElementById('home').style.display="none";
   document.getElementById('publications').style.display="inline";
   document.getElementById('teaching').style.display="none";
   document.getElementById('fam').style.display="none";
}

function teaching(){
   document.getElementById('bio').style.display="none";
   document.getElementById('home').style.display="none";
   document.getElementById('publications').style.display="none";
   document.getElementById('teaching').style.display="inline";
   document.getElementById('fam').style.display="none";
}



function vics(){
   document.getElementById('bio').style.display="none";
   document.getElementById('home').style.display="none";
   document.getElementById('publications').style.display="none";
   document.getElementById('teaching').style.display="none";
   document.getElementById('fam').style.display="inline";
}


function activate() {
   $(".nav a").on("click", function(){
      if ($(this).parent().parent().hasClass("navbar-right")) {
         $(this).blur();
         return;
      }
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
      window.scrollTo(0,0);
   });

   $(document).ready(function () {
      $(".navbar-nav li a").click(function(event) {
         $(".navbar-collapse").collapse('hide');
      });
   });
}
