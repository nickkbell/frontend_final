$(document).ready(function(){
    // Инициализация карусели товаров
    $('.first-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      freeDrag: false,
      // Убираем stagePadding, который мог вызвать проблемы
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1100: {
          items: 4,
          dots: false
        }
      }
    });
    
    // Инициализация карусели отзывов с более консервативными настройками
    $('.second-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      mouseDrag: true,
      touchDrag: true,
      // Специфичная отзывчивость для карусели отзывов
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1100: {
          items: 3,
          dots: false
        }
      }
    });
  });


  
  (function($) { "use strict";
    $(document).ready(function() {
        $('.navbar-toggler').on('click', function() {
            $('body').toggleClass('nav-active');

            if ($('body').hasClass('nav-active')) {
                $('.hero-section').addClass('dimmed');
            } else {
                $('.hero-section').removeClass('dimmed');
            }
        });
        
        $('.navbar-collapse .nav-link').on('click', function() {
            if ($(window).width() < 992) { 
                $('.navbar-toggler').click();
            }
        });
        
        $("#switch").on('click', function () {
            if ($("body").hasClass("light")) {
                $("body").removeClass("light");
                $("#switch").removeClass("switched");
                
                updateNavColors(false);
            }
            else {
                $("body").addClass("light");
                $("#switch").addClass("switched");

                updateNavColors(true);
            }
        });

        function updateNavColors(isLight) {
            if (isLight) {
                $('.navbar').addClass('navbar-light').removeClass('navbar-dark');
            } else {
                $('.navbar').addClass('navbar-dark').removeClass('navbar-light');
            }
        }
    });
    
})(jQuery);