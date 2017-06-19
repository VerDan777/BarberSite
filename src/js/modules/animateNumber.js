import $ from 'jquery';


class AnimateNumber {
    constructor() {

        this.count = $('.count');
        this.animateNumber();
    }
    animateNumber() {
        $('.count').each(function() {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration:4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            }
            );
        });
    }
}

export default AnimateNumber;