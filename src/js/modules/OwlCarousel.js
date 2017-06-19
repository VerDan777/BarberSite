import $ from 'jquery';
 class OwlCarousel {
    constructor() {
        // this.carouselgallery = $('.barbers__block-wrapper');
        this.carousel();
    } 

    carousel(){

$('.barbers__block-wrapper'.OwlCarousel({

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
})     
    
)} 
 }
export default OwlCarousel;