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
// File name: app-demo.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. SVG Fallback
//  3. Chrome Smooth Scroll
//  4. Images Moving Ban
//  5. Mailchimp Subscribition Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    $(".loader-logo").removeClass('slideInDown').addClass('fadeOutUp');
    $(".loader-caption").removeClass('slideInUp').addClass('fadeOutDown');
  },500);

  setTimeout(function(){
    var animateLeft = anime({
      targets: '.loader-slide-left',
      width: '0%',
      easing: 'easeOutElastic(1, 1.2)',
      duration: 800
    });

    var animateRight = anime({
      targets: '.loader-slide-right',
      width: '0%',
      easing: 'easeOutElastic(1, 1.2)',
      duration: 800
    });
    $('body').removeClass('overflow-hidden');

  },1000);

  setTimeout(function(){
    $(".loader").addClass('fade loaded');
  },1500);
  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //

});

$(document).ready(function() {

  // --------------------------------------------- //
  // SVG Fallback Start
  // --------------------------------------------- //
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  // --------------------------------------------- //
  // SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Images Moving Ban Start
  // --------------------------------------------- //
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  // --------------------------------------------- //
  // Images Moving Ban End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Subscribition Form Start
  // --------------------------------------------- //
  $('.subscribe-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=b382fff780'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.subscribe-container').find('.form').addClass('is-hidden');
      $('.subscribe-container').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.subscribe-container').find('.subscription-ok').removeClass('is-visible');
        $('.subscribe-container').find('.form').delay(300).removeClass('is-hidden');
        $('.subscribe-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.subscribe-container').find('.form').addClass('is-hidden');
      $('.subscribe-container').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.subscribe-container').find('.subscription-error').removeClass('is-visible');
        $('.subscribe-container').find('.form').delay(300).removeClass('is-hidden');
        $('.subscribe-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Subscribition Form End
  // --------------------------------------------- //

});
