
$(document).ready(function() {
	$('.menu a').each(function(index, elemento){
		$(this).css({
			top : '200px'
		})

		$(this).animate({
			top : '0'
		}, 3000 + (index * 500))
	})
	// var win = $(window).widht();
 	 if ($(window).width() > 500) {
 		$('header .textos').css({
 			opacity : 0.2,
 			marginTop : 0
 		});

 	
 	$('header .textos').animate({
 		opacity : 1,
 		marginTop : '-30px'
 	}, 4000)
 	$('header .textos').animate({
 		opacity : 0.5,
 		marginTop: '40px'
 	}, 3000);
 	$('header .textos').animate({
 		opacity: 1,
 		marginTop : '-40px'
 	}, 4000);
 	$('.main .menu .contenedor-menu').animate({
 		opacity : 0.2,
 		marginTop : '-60px'
 	}, 10000);
 	$('.main .menu .contenedor-menu').animate({
 		opacity: 1,
 		marginTop: '0'
 	}, 2000)
 }
});

//Efecto menu
	//$('.menu a').each(function(index, elemento){
	//	$(this).css({
	//		'top': '-200px'
	//	});
	//	$(this).animate({
	//		top: '0'
	//	}, 2000 + (index * 500));
	//});

//if ($(window).width() > 100) {
		// $('header .textos').css({
			// opacity: 0.3,
			// marginTop: 0
		// });
	// }
	// $('header .textos').animate({
		// opacity: 1,
		// marginTop: '-52px'
	// }, 5500);
