
$(document).ready(function() {
        $('.gallery__image-wrapper,.barbers__block-wrapper').magnificPopup({
            type: 'image',
            delegate:'a' ,
            removalDelay: 300,
            mainClass: 'mfp-fade',
              zoom: {
    enabled: true,
    duration: 300, 
    easing: 'ease-in-out', 

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  },
            gallery : {
                enabled:true,
                navigateByImgClick: true,
                preload:[0,1]
            },
            // image: {
            //     tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'

            // }
        })
})



