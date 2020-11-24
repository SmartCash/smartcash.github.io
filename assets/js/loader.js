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
        page_scroll JS
    -----------------------------------*/
    $("a.page_scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            //console.log($(hash).offset().top - topOffset);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $("header").outerHeight() + "px"
            }, 1200, function () {

                //window.location.hash = hash;
            });
        } // End if
    });
     /*---------------------------------
        page_scroll JS
    -----------------------------------*/
    /*---------------------------------
        sticky JS
    -----------------------------------*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
         if (scroll < 100) {
          $(".index_header").removeClass("sticky");
         }else{
          $(".index_header").addClass("sticky");
         }
    }); 
    /*---------------------------------
        sticky JS
    -----------------------------------*/
    // slider js
    $('.inner_slide').slick({
      dots: false,
      infinite: false,
      autoplay: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
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
    /*---------------------- 
        wow js
    ------------------------*/
      new WOW().init();
    /*---------------------- 
        wow js
    ------------------------*/

})(window.jQuery);   