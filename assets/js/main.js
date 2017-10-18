$(document).ready(function() {
    $('.gallery-item').magnificPopup({
  type: 'image',
        gallery: {
  enabled: true, // set to true to enable gallery

  preload: [0,2], // read about this option in next Lazy-loading section

  navigateByImgClick: true,

  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
}
  
});
    
     $('.menu-item').magnificPopup({
  type: 'image',
        gallery: {
  enabled: true, // set to true to enable gallery

  preload: [0,2], // read about this option in next Lazy-loading section

  navigateByImgClick: true,

  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
}
  
});
    
 
      
 var heroslider = $('.owl-carousel');
    heroslider.owlCarousel({
      animateIn: 'flipInX',
        animateOut: 'slideOutDown',
     loop:true,
    items:1,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        navText:['<i class="fa fa-chevron-left  fa-2x" aria-hidden="true"></i>','<i class="fa fa-2x fa-chevron-right  fa-2x" aria-hidden="true"></i>']
 
});
  
  heroslider.on('changed.owl.carousel', function(event) {
      var item = event.item.index - 2;     // Position of the current item
      $('h1').removeClass('animated bounce');
 $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated bounceInUp');
  });

 
});