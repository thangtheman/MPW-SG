/**
 * Created by ThangTheMan on 6/28/16.
 */
//iframe screen size
$('.onMobile').hide();
$('.onDesktop').hide();

function mobile() {
    $('.onMobile').show();
    $('.onTablet').hide();
    $('.onDesktop').hide();
    $('.frame').addClass('mobile');
    $('.frame').removeClass('tablet');
    $('.frame').removeClass('desktop');
    $('.backgroundIframe iframe').css({'top': '212px' , 'left': '103px'});
}

function tablet() {
    $('.onMobile').hide();
    $('.onDesktop').hide();
    $('.onTablet').show();
    $('.frame').addClass('tablet');
    $('.frame').removeClass('mobile');
    $('.frame').removeClass('desktop');
    $('.backgroundIframe iframe').css({'top': '149px' , 'left': '115px'});
}

function desktop() {
    $('.onDesktop').show();
    $('.onMobile').hide();
    $('.onTablet').hide();
    $('.frame').addClass('desktop');
    $('.frame').removeClass('tablet');
    $('.frame').removeClass('mobile');
    $('.backgroundIframe iframe').css({'top': '90px' , 'left': '59px'});

}
//iframe screen size End
$(document).ready(function() {
    // Add smooth scrolling to all links
    $(".menuGroup").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    // Add smooth scrolling to all links End




//Copy Code
    var button = $("clippboardCopy");
    button.on("click", function() {
        button.data("text-original", button.text());
        button.text(button.data("text-swap"));
    });

    $(".clippboardCopy").on("click", function() {
        var el = $(this);
        el.text() == el.data("text-swap")
            ? el.text(el.data("text-original"))
            : el.text(el.data("text-swap"));
    });
    //Copy Code End

    //Responsive Box
    $('#desktop').click(function () {
        $('#responsiveBox').css('width',1200+"px");
    });
    $('#tablet').click(function () {
        $('#responsiveBox').css('width',768+"px");
    });
    $('#mobile').click(function () {
        $('#responsiveBox').css('width',375+"px");
    });
    //Responsive Box

});

