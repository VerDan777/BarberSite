$(document).ready(function () {
  $(".barbers__block-wrapper,.gallery__image-wrapper,.clients__block-wrapper").owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        nav:true,
        navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
		loop:true,
		margin:20,
        lazyLoad:true,
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
			
	}
});
	$('.clients__block-wrapper').owlCarousel({
		autoplay:true,
        autoplayTimeout:2000,
        nav:true,
        navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
		loop:true,
		margin:0,
		items:1,
		center:true,
		merge:true,
		// responsiveClass:true,
        // lazyLoad:true,
		 responsive:{
				0:{
					  items:1,
                      nav:true,
                      autoHeight:true
					},
		520:{
				items:1,
				 
                            nav:true,
                            autoHeight:true
						},
			560:{
					items:1,
					  
                            nav:true,
                            autoHeight:true
					},
		 
			768:{
							items:1,
                            nav:true,
                            autoHeight:true
						},
		992:{
		    				items:0,
                            nav:false,
                            loop:true,
                            autoplay:true,
                            autoplayTimeout:2000,
                            autoplayHoverPause:false,
                          autoHeight:true
	},
			
	}

	})
})


