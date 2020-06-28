
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
        if($(this).scrollTop() > 385) { 
            $('.navbar').addClass('solidBgr');
        } else {
            $('.navbar').removeClass('solidBgr');
        }
        if (document.title == "Hi! I'm Serena Inzani") {
            // checks if window is scrolled more than 385px, adds/removes solid class
            if($(this).scrollTop() > 150) { 
                $('.aboutMe').addClass('aboutMeChange');
            } else {
                $('.aboutMe').removeClass('aboutMeChange');
            }
            if($(this).scrollTop() > 560) { 
                $('.travel').addClass('travelChange');
            } else {
                $('.travel').removeClass('travelChange');
            }
            if($(this).scrollTop() > 900) { 
                $('.moreInfo').addClass('moreInfoChange');
            } else {
                $('.moreInfo').removeClass('moreInfoChange');
            }

        }
        
        else if (document.title == "Photo Gallery") {
            var numOfElement = document.querySelectorAll( "img" ).length;
                for (i=1; i < numOfElement; i++){
                    var myElement = document.querySelectorAll( "img" )[i];
                    var myElementPosition = $(myElement).position();
                    var myElementTop = myElementPosition.top-100;
                    // Check the viewport status
                    if( myElementTop > $(this).scrollTop()){
                        myElement.classList.remove("moveImg");
                    } else {  
                        //adds the class for the animation
                        myElement.classList.add("moveImg");
                    }
                }
            }



    });

    

    




});




