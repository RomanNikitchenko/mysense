
$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	responsive: [
		{
			breakpoint: 1170,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});