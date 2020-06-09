
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 385) { 
            $('.navbar').addClass('solidBgr');
        } else {
            $('.navbar').removeClass('solidBgr');
        }
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 150) { 
            $('.aboutMe').addClass('aboutMeChange');
        } else {
            $('.aboutMe').removeClass('aboutMeChange');
        }


    });

});




