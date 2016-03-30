$(document).ready(function(){ 
    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = 1000; //where you want the animation to stop

    var beginning_color = new $.Color( 'rgb(255, 128, 0)' ); 
    var ending_color = new $.Color( 'rgb(95, 95, 95)' );
    
    var light_grad = $('#light-gradient');
    var dark_grad  = $('#dark-gradient');

    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 

            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            
            $('body').animate({ backgroundColor : newColor }, 0);
            $('#dark-gradient').animate({ opacity : percentScrolled }, 0);
            $('#light-gradient').animate({opacity : (1 - percentScrolled) }, 0);
            
        } else if ( scroll_pos > animation_end_pos ) {
             $('body').animate({ backgroundColor: ending_color }, 0);
             $('#dark-gradient').animate({ opacity : 1}, 0);
             $('#light-gradient').animate({opacity : 0}, 0);
        
        } else if ( scroll_pos < animation_begin_pos ) {
             $('body').animate({ backgroundColor: beginning_color }, 0);
             $('#light-gradient').animate({opacity : 1}, 0);
             $('#dark-gradient').animate({opacity  : 0}, 0);
        
        } else { }
    });
});