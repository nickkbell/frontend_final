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
    // Инициализация после загрузки документа
    $(document).ready(function() {
        
        // Функция для добавления анимации при открытии/закрытии меню Bootstrap
        $('.navbar-toggler').on('click', function() {
            // Добавляем/удаляем класс для анимации или дополнительных стилей
            $('body').toggleClass('nav-active');
            
            // Если нужны дополнительные эффекты при открытии/закрытии меню
            if ($('body').hasClass('nav-active')) {
                // Действия при открытии меню
                console.log('Меню открыто');
                
                // Пример: затемнение фона при открытом меню
                $('.hero-section').addClass('dimmed');
            } else {
                // Действия при закрытии меню
                console.log('Меню закрыто');
                
                // Удаляем затемнение
                $('.hero-section').removeClass('dimmed');
            }
        });
        
        // Закрытие меню при клике по пункту меню (опционально)
        $('.navbar-collapse .nav-link').on('click', function() {
            if ($(window).width() < 992) { // Только на мобильных
                $('.navbar-toggler').click(); // Эмулируем клик по кнопке закрытия
            }
        });
        
        // Переключение светлой/темной темы (оставляем без изменений)
        $("#switch").on('click', function () {
            if ($("body").hasClass("light")) {
                $("body").removeClass("light");
                $("#switch").removeClass("switched");
                
                // Дополнительно: меняем цвета в навигации при смене темы
                updateNavColors(false);
            }
            else {
                $("body").addClass("light");
                $("#switch").addClass("switched");
                
                // Дополнительно: меняем цвета в навигации при смене темы
                updateNavColors(true);
            }
        });
        
        // Вспомогательная функция для обновления цветов навигации при смене темы
        function updateNavColors(isLight) {
            if (isLight) {
                // Светлая тема
                $('.navbar').addClass('navbar-light').removeClass('navbar-dark');
                // Другие изменения для светлой темы...
            } else {
                // Темная тема
                $('.navbar').addClass('navbar-dark').removeClass('navbar-light');
                // Другие изменения для темной темы...
            }
        }
    });
    
})(jQuery);