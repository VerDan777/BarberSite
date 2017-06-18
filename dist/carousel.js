$(document).ready(function () {
  $(".barbers__block-wrapper  ").owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        nav:true,
        navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
		loop:true,
		margin:20,
		 responsive:{
				0:{
					items:1,
					},
		520:{
				items:1,
						},
			560:{
					items:2,
					},
		 
			768:{
		items:2,
						},
		992:{
			items:3,
	},
			// 1200:{
			// items:4,
			// }
	}
	});
});
