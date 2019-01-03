$(document).ready(function(){
  // Project slider
  $('.project-slider').slick({
    dots: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
        }
    }]
  })

// About us and Services Slider
  $('.block_slider').slick({
        arrows: false,
        dots: true,
        responsive: [{
          breakpoint: 9999,
          settings: 'unslick',
      }, {
        breakpoint: 380,
        settings: 'slick',  
      }
    ]
      });

  // About us Spoiler

  var AboutUsSpoiler = $('.about-us_column');
  var AboutUsSpoilerHeight = AboutUsSpoiler.height();

  function AboutUsSpoilerBtn() {
    if (AboutUsSpoilerHeight >= '359') {
      AboutUsSpoiler.addClass('spolier_block');
    } else {
      AboutUsSpoiler.removeClass('spolier_block');
    }
  }
  AboutUsSpoilerBtn();

  // Slow scroll

  $("#site-nav").on("click","a", function (event) {

    event.preventDefault();

    var id  = $(this).attr('href'),

    top = $(id).offset().top;

    toggleMenu();
    
    $('body,html').animate({scrollTop: top}, 1000);
   
  });
  
  // hamburger
  var hamburgerButton = $('.hamburger');
  var siteNav = $('.site-nav_list');

  hamburgerButton.click(toggleMenu);

  function toggleMenu() {
    hamburgerButton.toggleClass('is-active');
    siteNav.toggleClass('site-nav_list__visible');
  }

  // site nav
  // var siteHeader = $('.site-header')
  // var headerOffsetTop = $('.site-nav_cont').offset().top;
  
  // $(window).scroll( function(){

  //   if (window.pageYOffset > headerOffsetTop) {
  //     siteHeader.addClass('navigation-fixed');
  //   } else {
  //     siteHeader.removeClass('navigation-fixed');
  //   }
  // })


});




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

