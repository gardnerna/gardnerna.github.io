$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});		

					//Nivo Slider
					$(document).ready(function(){
					$('.nivo-slider').nivoSlider({
						effect: 'fade',               // Specify sets like: 'fold,fade,sliceDown'
						slices: 15,                     // For slice animations
						boxCols: 8,                     // For box animations
						boxRows: 4,                     // For box animations
						animSpeed: 500,                 // Slide transition speed
						pauseTime: 4000,                // How long each slide will show
						startSlide: 0,                  // Set starting Slide (0 index)
						directionNav: false,             // Next & Prev navigation
						controlNav: false,               // 1,2,3... navigation
						controlNavThumbs: false,        // Use thumbnails for Control Nav
						pauseOnHover: false,             // Stop animation while hovering
						manualAdvance: false,           // Force manual transitions
						prevText: 'Prev',               // Prev directionNav text
						nextText: 'Next',               // Next directionNav text
						randomStart: false,             // Start on a random slide
						beforeChange: function(){},     // Triggers before a slide transition
						afterChange: function(){},      // Triggers after a slide transition
						slideshowEnd: function(){},     // Triggers after all slides have been shown
						lastSlide: function(){},        // Triggers when last slide is shown
						afterLoad: function(){}         // Triggers when slider has loaded
					});				
					});

//Facebook					
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));	


//Back to Top
		$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});
