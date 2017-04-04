function myfunc() {
    var myval = $("#mobile-phone").val();
    var pattern = "[0][9][0-9]{9}";
    var password = $("#password").val();
    var confirm = $("#confirm").val();
    if (myval.match(pattern) && password.match(confirm)) {
        $("#mysub").removeAttr("disabled");
    }
    else {
        $("#mysub").attr('disabled', 'disabled');
        if(password!=confirm){
            alert("password and confirm are not same");
        }
        else {
            alert("your phone number is not correct");
        }
    }
}


$(document).ready(function () {

//minimum 8 characters
    var bad = /(?=.{8,}).*/;
//Alpha Numeric plus minimum 8
    var good = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{8,}$/;
//Must contain at least one upper case letter, one lower case letter and (one number OR one special char).
    var better = /^(?=\S*?[A-Z])(?=\S*?[a-z])((?=\S*?[0-9])|(?=\S*?[^\w\*]))\S{8,}$/;
//Must contain at least one upper case letter, one lower case letter and (one number AND one special char).
    var best = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{8,}$/;

    $('#password').on('keyup', function () {
        var password = $(this);
        var pass = password.val();
        var passLabel = $('[for="password"]');
        var stength = 'Weak';
        var pclass = 'danger';
        if (best.test(pass) == true) {
            stength = 'Very Strong';
            pclass = 'success';
        } else if (better.test(pass) == true) {
            stength = 'Strong';
            pclass = 'warning';
        } else if (good.test(pass) == true) {
            stength = 'Almost Strong';
            pclass = 'warning';
        } else if (bad.test(pass) == true) {
            stength = 'Weak';
        } else {
            stength = 'Very Weak';
        }

        var popover = password.attr('data-content', stength).data('bs.popover');
        popover.setContent();
        popover.$tip.addClass(popover.options.placement).removeClass('danger success info warning primary').addClass(pclass);

    });

    $('input[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'focus'
    });

});



//slider

$(function() {

    $("#slider").draggable({
        axis: 'x',
        containment: 'parent',
        drag: function(event, ui) {
            if (ui.position.left > 550) {
                $("#well").fadeOut();
            } else {
                // Apparently Safari isn't allowing partial opacity on text with background clip? Not sure.
                // $("h2 span").css("opacity", 100 - (ui.position.left / 5))
            }
        },
        stop: function(event, ui) {
            if (ui.position.left < 551) {
                $(this).animate({
                    left: 0
                })
            }
        }
    });

    // The following credit: http://www.evanblack.com/blog/touch-slide-to-unlock/

    $('#slider')[0].addEventListener('touchmove', function(event) {
        event.preventDefault();
        var el = event.target;
        var touch = event.touches[0];
        curX = touch.pageX - this.offsetLeft - 73;
        if(curX <= 0) return;
        if(curX > 550){
            $('#well').fadeOut();
        }
        el.style.webkitTransform = 'translateX(' + curX + 'px)';
    }, false);

    $('#slider')[0].addEventListener('touchend', function(event) {
        this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
        this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
        this.style.webkitTransform = 'translateX(0px)';
    }, false);

});