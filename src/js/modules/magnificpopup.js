import $ from 'jquery';
import magnificpopup from '../../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js';

class MagnificPopup {
    constructor() {

        this.magnific();
    }

    magnific() {

        $('.gallery__image-wrapper').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery : {
                enabled:true,
                navigateByImgClick: true,
                preload:[0,1]
            },
            image: {
                tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',

            }
        })
    }
}