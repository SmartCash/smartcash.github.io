(function($) {
  'use strict';  
    /*---------------------------------
        Preloader JS
    -----------------------------------*/ 
      var prealoaderOption = $(window);
      prealoaderOption.on("load", function () {
          var preloader = jQuery('.lodar');
          var preloaderArea = jQuery('.preloader_area');
          preloader.fadeOut();
          preloaderArea.delay(350).fadeOut('slow');
      });
    /*---------------------------------
        Preloader JS
    -----------------------------------*/

    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
         if (scroll < 100) {
          $(".onova_header").removeClass("sticky");
         }else{
          $(".onova_header").addClass("sticky");
         }
    }); 
    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    /*---------------------- 
        Scroll top js
    ------------------------*/
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
          $('#scroll_up').fadeIn();
      } else {
          $('#scroll_up').fadeOut();
      }
    });
    $('#scroll_up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*---------------------- 
        Scroll top js
    ------------------------*/
    /*---------------------- 
        Search 
    ------------------------*/
    $('.search-open').on('click', function () {
        $('.search-box').addClass('open')
    });

    $('.search-close-btn').on('click', function () {
        $('.search-box').removeClass('open')
    });
    /*---------------------- 
        Search 
    ------------------------*/
    /*----------------------
    Mobile menu 
    -------------------------*/
    $(".menu_icon").on('click', function (event) {
        $(".menu_icon").toggleClass("active");
    });
    $(".menu_icon").on('click', function (event) {
        $(".sidenav_menu").toggleClass("active");
    });
    $.sidebarMenu($('.sidebar-menu'))
    /*----------------------
    Mobile menu 
    -------------------------*/
    /*----------------------
        slick slider js
    ----------------------*/
    $('.home_slider').slick({
      dots: false,
      infinite: false,
      autoplay: false,
      arrows: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $('.case_study_slide').slick({
      dots: false,
      infinite: true,
      autoplay: false,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      variableWidth: true,
      responsive: [
      {
          breakpoint: 1000,
          settings: {
            arrows: false,
            slidesToShow:1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow:1,
            variableWidth: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow:1,
            variableWidth: false,
          }
        }
      ]
    });
    $('.testimonial_slide_1').slick({
      dots: false,
      infinite: false,
      autoplay: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
          }
        }
      ]
    });
    $('.service_slide').slick({
      dots: false,
      infinite: true,
      autoplay: false,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.choose_slide_1').slick({
      dots: false,
      infinite: true,
      autoplay: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.sponser_slide').slick({
      dots: true,
      infinite: false,
      autoplay: false,
      arrows: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.product_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: '.product_thumb_slide'
    });
    $('.product_thumb_slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product_slide',
      dots: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    /*---------------------- 
        slick slider js
    ------------------------*/  
    /*----------------------
        Counter js
    ------------------------*/
    $('.counter').counterUp({
        delay: 100,
        time: 4000
    });
    /*----------------------
        Counter js
    ------------------------*/
    /*---------------------- 
        Isotope js
    ------------------------*/
    $('#portfolio_filter').imagesLoaded( function() {
          var $grid = $('.portfolio_grid').isotope({
            itemSelector: '.portfolio_single',
            layoutMode: 'fitRows'
        })
        $('.portfolio_button').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        $('.portfolio_button').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.btn_active').removeClass('btn_active');
                $(this).addClass('btn_active');
            });
        });
      });
    /*---------------------- 
        Isotope js
    ------------------------*/
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    $('.play_btn').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    /*---------------------- 
        wow js
    ------------------------*/
      new WOW().init();
    /*---------------------- 
        wow js
    ------------------------*/

    /*----------------------
        nice_number js
    ----------------------*/
      $(document).ready(function() {
        $('.top_select').niceSelect();
      });
    /*---------------------
        nice_number js
    ---------------------*/


   lightbox.option({
      'resizeDuration': 200,
      'wrapAround': false
    });

  // jekyll search

    var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
   });   

   //  SimpleJekyllSearch({
   //  searchInput: document.getElementById('search-input-2'),
   //  resultsContainer: document.getElementById('results-container-2'),
   //  json: '/search.json'
   // });
 

// if($("#search-input-2").length >0){
//     var sjs2 = SimpleJekyllSearch({
//     searchInput: document.getElementById('search-input-2'),
//     resultsContainer: document.getElementById('results-container-2'),
//     json: '/search.json'
//    });
// }





})(window.jQuery);