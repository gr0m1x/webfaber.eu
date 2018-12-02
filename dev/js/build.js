$(document).ready(function(){
  $('.project-slider').slick({
      dots: true,
  })


  $("#site-nav").on("click","a", function (event) {

    event.preventDefault();

    var id  = $(this).attr('href'),

    top = $(id).offset().top;

    toggleMenu();
    
    $('body,html').animate({scrollTop: top}, 1000);
   
  });
  

  var $hamburgerButton = $('.hamburger');
  var $siteNav = $('.site-nav_list');

  $hamburgerButton.click(toggleMenu);

  function toggleMenu() {
    $hamburgerButton.toggleClass('is-active');
    $siteNav.toggleClass('site-nav_list__visible');
  }
    
});

var siteHeader = document.querySelector('.site-header')
var headerOffsetTop = document.querySelector('.site-nav_cont').offsetTop;

window.addEventListener('scroll', function(event) {
    if (window.scrollY > headerOffsetTop) {
        siteHeader.classList.add('navigation-fixed');
    } else {
        siteHeader.classList.remove('navigation-fixed');
    }
})

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//   var technologiesSlider = document.querySelector('.tabccontainer');
//   var windowsWight = document.documentElement.clientWidth;
//   var mediaMiddle = 767;
  
//   function techSlide() {
//       if (windowsWight < mediaMiddle) {
//           technologiesSlider.classList.add('.technologies_slider');
//       } else {
//           siteHeader.classList.remove('.technologies_slider');
//       }
//   }
//   techSlide();