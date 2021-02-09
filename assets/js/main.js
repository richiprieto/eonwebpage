(function($) {
	'use strict';
		
		jQuery(document).on('ready', function(){
			
			/*PRELOADER JS*/
				$(window).on('load', function() {
					$('.status').fadeOut();
					$('.preloader').delay(350).fadeOut('slow'); 
				}); 
			/*END PRELOADER JS*/
			
			// jQuery Lightbox
				jQuery('.venobox').venobox({
					numeratio: true,
					infinigall: true
			});	
			//  POPUP VIDEO
			$('.popup-video').magnificPopup({
				type: 'iframe',
			});
			 // Tabs
			$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
			$('.tab ul.tabs li a').on('click', function (g) {
				var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');
				tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
				tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
				g.preventDefault();
			});
			
				
			/*START MENU JS*/
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	
			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/
			
		// Wrap every letter in a span
			$('.heading-content .letters').each(function(){
			  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
			});

			anime.timeline({loop: true})
			  .add({
				targets: '.heading-content .letter',
				rotateY: [-90, 0],
				duration: 1300,
				delay: function(el, i) {
				  return 45 * i;
				}
			  }).add({
				targets: '.heading-content',
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000
			  });
				
			/*START MIXITUP JS*/
		
			$('.work_all_item').mixItUp();
			
			/*END MIXITUP JS*/
			
			/*START COUNTER JS*/
			$('.counter-value').each(function(){
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				},{
					duration: 5500,
					easing: 'swing',
					step: function (now){
						$(this).text(Math.ceil(now));
					}
				});
			});
			
			/*END COUNTER JS*/
			
			
			//testimonils
			$(".testimonials-list").owlCarousel({
				margin:0,
				nav:false,
				loop:true,
				dots:true,
				items:1,
				itemsDesktop:[1199,2],
				itemsDesktopSmall:[980,2],
				itemsMobile : [600,1],
				smartSpeed: 1500,
				autoplay:true,
				autoplayTimeout:4000,
				autoplayHoverPause:true,
				responsiveClass:true
			});
			
			// BLOG SLIDER slider 
			 $("#blog-slider").owlCarousel({
				items : 3,
				itemsDesktop:[1199,2],
				itemsDesktopSmall:[980,2],
				itemsMobile : [600,1],
				pagination:false,
				navigationText:false
			});
			
			// client slider 
			$('.client_slide_area').owlCarousel({
			autoplay:true,
			margin: 50,
			loop:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
			})
			
		/*START PARTNER LOGO*/
			$('.partners').owlCarousel({
			  autoPlay: 3000, //Set AutoPlay to 3 seconds
			  items : 4,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,3]
			});
		/*END PARTNER LOGO*/

		})

		// Active  WOW
		new WOW().init();

})(jQuery);	
