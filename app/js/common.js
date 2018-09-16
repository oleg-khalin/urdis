$(function() {

	// Magnific-popup
	$('a[href="#callback"], a[href="#order"').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});


	// Superfish for menu
	$('.top-line .sf-menu').superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});

	$('a[href="#callback"').click(function() {
		$('#callback .formname').val($(this).data('form'));
	});

	// Owl Carousel
	var owl = $('.slider');
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: 'slide-wrap',
		nav: true,
		navText: ''
	});
	$('.next').click(function() {
		owl.trigger('next.owl.carousel');
	})
	$('.prev').click(function() {
		owl.trigger('prev.owl.carousel');
	})


	// Mobile menu
	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo('#my-menu');
	$('#my-menu').find('*').attr('style', '');
	$('#my-menu').find('ul').removeClass('sf-menu hidden-sm hidden-xs');
	$('#my-menu').mmenu({
		extensions : ['widescreen', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title : 'Меню'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('closed', function() {
		$('.toggle-mnu').removeClass('on');
	});

	$(".mobile-menu").click(function() {
		var mmAPI = $('#my-menu').data('mmenu');
		mmAPI.open();
		var thiss = $(this).find('.toggle-mnu')
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	// equalHeights
	$('.service-item h4').equalHeights();
	$('.new-item-text').equalHeights();
	$('.link-item').equalHeights();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.success').addClass('visible');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$('.success').removeClass('visible');
				$.magnificPopup.close();
			}, 5000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.preloader').fadeOut();
});
