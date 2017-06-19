import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints.min.js';

class Waypoint {
    constructor() {
        this.point = $('.stats');
        this.waypoint();
    }

    waypoint() {

    this.point('.stats').waypoint(function() {
              $('.count').each(function() {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration:6000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            }
            );
        });
    }), 
   { offset:'10%'}
}
}
    
export default Waypoint;