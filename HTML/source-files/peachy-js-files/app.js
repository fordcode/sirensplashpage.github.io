// ------------------------------------------------
// Project Name: Peachy - Bright Coming Soon & Landing Page Template
// Project Description: Peachy - bright and stylish coming soon & landing page template to kick-start your project. Feel summer vibes with Peachy!
// Tags: peachy, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 1.0.0
// Build Date: June 2019
// Last Update: June 2019
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: app.js (main)
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. SVG Fallback
//  2. Chrome Smooth Scroll
//  3. Images moving ban
//  4. PhotoSwipe Gallery Images Replace
//  5. Popup Behavior
//  6. Main Menu & Sections Behavior
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function() {

  // SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };

  // Images moving ban
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // PhotoSwipe Gallery Images Replace
  $('.works-link')
    // Background set up
    .each(function(){
    $(this)
    // Add a photo container
    .append('<div class="picture"></div>')
    // Set up a background image for each link based on data-image attribute
    .children('.picture').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  });

  // Popup Behavior
  // Declaring Variables
  var notifyTrigger = $('#notify-trigger'),
      notifyPopup = $('.notify'),
      notifyClose = $('#notify-close'),
      letstalkTrigger = $('#letstalk-trigger'),
      letstalkPopup = $('.letstalk'),
      letstalkClose = $('#letstalk-close');

      notifyTrigger.on('click', function(event) {
        event.preventDefault();
        $('body').addClass('overflow-hidden');

        notifyPopup.fadeIn(300, function() {

          var animateinPopup = anime({
            targets: '.notify .popup__content',
            translateY: '-1px',
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            opacity: 1,
            duration: 300
          });

        });

        setTimeout(function(){
          notifyClose.addClass('is-scaled-up');
        },1000);

      });

      notifyClose.on('click', function(event) {
        event.preventDefault();

        notifyClose.removeClass('is-scaled-up');

        var animateinPopup = anime({
          targets: '.notify .popup__content',
          translateY: '50px',
          scaleX: 1.06,
          scaleY: 1.06,
          scaleZ: 1.06,
          opacity: 0,
          duration: 300
        });

        setTimeout(function(){
          notifyPopup.fadeOut();
          $('body').removeClass('overflow-hidden');
        },500);

      });

      letstalkTrigger.on('click', function(event) {
        event.preventDefault();
        $('body').addClass('overflow-hidden');

        letstalkPopup.fadeIn(300, function() {

          var animateinPopup = anime({
            targets: '.letstalk .popup__content',
            translateY: '-1px',
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            opacity: 1,
            duration: 300
          });

        });

        setTimeout(function(){
          letstalkClose.addClass('is-scaled-up');
        },1000);

      });

      letstalkClose.on('click', function(event) {
        event.preventDefault();

        letstalkClose.removeClass('is-scaled-up');

        var animateinPopup = anime({
          targets: '.letstalk .popup__content',
          translateY: '50px',
          scaleX: 1.06,
          scaleY: 1.06,
          scaleZ: 1.06,
          opacity: 0,
          duration: 300
        });

        setTimeout(function(){
          letstalkPopup.fadeOut();
          $('body').removeClass('overflow-hidden');
        },500);

      });

  // Main Menu & Sections Behavior
  // Declaring Variables
  var menuTrigger        = $('#menu-trigger'),
      menuClose          = $('#menu-close'),
      menu               = $('#menu'),
      mainSection        = $('#main'),
      aboutSection       = $('#about'),
      portfolioSection   = $('#portfolio'),
      contactSection     = $('#contact'),
      homeTrigger        = $('#home-trigger'),
      aboutTrigger       = $('#about-trigger'),
      portfolioTrigger   = $('#portfolio-trigger'),
      contactTrigger     = $('#contact-trigger'),
      aboutClose         = $('#about-close'),
      portfolioClose     = $('#portfolio-close'),
      contactClose       = $('#contact-close');

      // Menu Open
      menuTrigger.on('click', function(event){
        event.preventDefault();

        $('body').addClass('overflow-hidden');

        var animateinMenu = anime({
          targets: '#menu',
          width: '100%',
          easing: 'easeOutElastic(1, 1.2)',
          duration: 1000
        });

        $('.menu__caption').addClass('is-visible');

        setTimeout(function(){

          var animateItems = anime({
            targets: '.menu__navigation li a',
            translateX: -40,
            opacity: 1,
            delay: function(el, i, l) {
              return i * 100;
            },
            endDelay: function(el, i, l) {
              return (l - i) * 100;
            }
          });
          menuClose.addClass('is-scaled-up');
          $('.menu-btn').removeClass('is-visible');
        },400);

      });

      // Menu Close
      menuClose.on('click', function(event){
        event.preventDefault();

        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        //mainSection.removeClass('is-hidden');

        setTimeout(function(){

          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            easing: 'easeInElastic(1, 1.2)',
            duration: 1000
          });
          $('.menu-btn').addClass('is-visible');
          $('body').removeClass('overflow-hidden');

        },100);

      });

      $('.menu__navigation li a').on('click', function(event) {
        $('body').removeClass('overflow-hidden');
      });

      // Home Trigger Behavior
      homeTrigger.on('click', function(event){
        event.preventDefault();

        $('.active').fadeOut(10, function() {
          $('.active').removeClass('active');
          $('.section-close').removeClass('is-scaled-up');
          if (mainSection.hasClass('fullheight-mobile')) {
            menuTrigger.removeClass('section-active-dark');
          };
        });

        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        //mainSection.removeClass('is-hidden');

        setTimeout(function(){

          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            easing: 'easeInElastic(1, 1.2)',
            duration: 1000
          });
          $('.menu-btn').addClass('is-visible');

        },100);

      });

      // About Section Open
      aboutTrigger.on('click', function(event) {
        event.preventDefault();

        $('.active').fadeOut(10, function() {
          $('.active').removeClass('active');
          $('.section-close').removeClass('is-scaled-up');
        });

        aboutSection.fadeIn();
        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        setTimeout(function(){
          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            duration: 50
          });
          aboutSection.addClass('active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            aboutClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          });

          if($('html').hasClass('no-csstransitions')) {
            aboutClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          };

          if (mainSection.hasClass('fullheight-mobile')) {
            menuTrigger.addClass('section-active-dark');
          };
        },400);

      });

      // Portfolio Section Open
      portfolioTrigger.on('click', function(event) {
        event.preventDefault();

        $('.active').fadeOut(10, function() {
          $('.active').removeClass('active');
          $('.section-close').removeClass('is-scaled-up');
        });

        portfolioSection.fadeIn();
        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        setTimeout(function(){
          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            duration: 50
          });
          portfolioSection.addClass('active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            portfolioClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          });

          if($('html').hasClass('no-csstransitions')) {
            portfolioClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          };
          if (mainSection.hasClass('fullheight-mobile')) {
            menuTrigger.addClass('section-active-dark');
          };
        },400);

      });

      // Contact Section Open
      contactTrigger.on('click', function(event) {
        event.preventDefault();

        $('.active').fadeOut(10, function() {
          $('.active').removeClass('active');
          $('.section-close').removeClass('is-scaled-up');
        });

        contactSection.fadeIn();
        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        setTimeout(function(){
          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            duration: 50
          });
          contactSection.addClass('active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            contactClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          });

          if($('html').hasClass('no-csstransitions')) {
            contactClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          };
          if (mainSection.hasClass('fullheight-mobile')) {
            menuTrigger.addClass('section-active-dark');
          };
        },400);

      });

      // About Section Close
      aboutClose.on('click', function(event) {
        event.preventDefault();

        $('.active').removeClass('active');
        $('.section-close').removeClass('is-scaled-up');
        if (mainSection.hasClass('fullheight-mobile')) {
          menuTrigger.removeClass('section-active-dark');
        };

        var animateoutSection = anime({
          targets: '#about',
          translateX: '100%',
          easing: 'easeInElastic(1, 1.2)',
          duration: 1000
        });

        setTimeout(function(){
          aboutSection.fadeOut( function() {
            var animateinSection = anime({
              targets: '#about',
              translateX: '0%',
              duration: 1
            });
          });
        },1000);
      });

      // Portfolio Section Close
      portfolioClose.on('click', function(event) {
        event.preventDefault();

        $('.active').removeClass('active');
        $('.section-close').removeClass('is-scaled-up');
        if (mainSection.hasClass('fullheight-mobile')) {
          menuTrigger.removeClass('section-active-dark');
        };

        var animateoutSection = anime({
          targets: '#portfolio',
          translateX: '100%',
          easing: 'easeInElastic(1, 1.2)',
          duration: 1000
        });

        setTimeout(function(){
          portfolioSection.fadeOut( function() {
            var animateinSection = anime({
              targets: '#portfolio',
              translateX: '0%',
              duration: 1
            });
          });
        },1000);
      });

      // Contact Section Close
      contactClose.on('click', function(event) {
        event.preventDefault();

        $('.active').removeClass('active');
        $('.section-close').removeClass('is-scaled-up');
        if (mainSection.hasClass('fullheight-mobile')) {
          menuTrigger.removeClass('section-active-dark');
        };

        var animateoutSection = anime({
          targets: '#contact',
          translateX: '100%',
          easing: 'easeInElastic(1, 1.2)',
          duration: 1000
        });

        setTimeout(function(){
          contactSection.fadeOut( function() {
            var animateinSection = anime({
              targets: '#contact',
              translateX: '0%',
              duration: 1
            });
          });
        },1000);
      });


});
