
$('.carousel-1').owlCarousel({
   loop: true,
   margin: 20,
   nav: true,
   dots: false,
   autoplay: true,
   autoplayTimeout: 3000,
   autoplaySpeed: 1000,
   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 2
      }
   }
})



$('.carousel-2').owlCarousel({
   loop: true,
   margin: 20,
   nav: true,
   dots: false,
   autoplay: true,
   autoplayTimeout: 3000,
   autoplaySpeed: 1000,
   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 4
      },
      1000: {
         items: 5
      }
   }
})