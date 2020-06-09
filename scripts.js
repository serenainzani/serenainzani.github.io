
function notInViewport(element){
  
    // Get the elements position relative to the viewport
    var elementPositionViewport = element.getBoundingClientRect();
    
    // Check if the element is outside the viewport
    return (elementPositionViewport.top > innerHeight); // || elementPositionViewport.bottom < 0;
    
}

$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 440) { 
          $('.navbar').addClass('solidBgr');
      } else {
          $('.navbar').removeClass('solidBgr');
      }
    });
});

/*function startAnimationsImgs(){
    //recipe images
    //on scroll run code
    document.addEventListener( 'scroll', event => {
        //get number of elements in the HTML with img-fluid classs
        var numOfElement = document.querySelectorAll( ".img-fluid" ).length;
        for (i=0; i < numOfElement; i++){
            var myElement = document.querySelectorAll( ".img-fluid" )[i];
            // Check the viewport status
            if( notInViewport( myElement ) ){
                myElement.classList.add("");
            } else {  
                //adds the class for the animation
                myElement.classList.add("moveImg");
            }
        }

    });
}*/
