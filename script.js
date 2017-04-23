//chek mobile phone and match paswword for index
function myfunc() {
    var myval = $("#mobile-phone").val();
    var pattern = "[0][9][0-9]{9}";
    var password = $("#password").val();
    var confirm = $("#confirm").val();
    if (myval.match(pattern) && password.match(confirm)) {
        // alert("Dosen't match")
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


//password secretery
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
/**
 * Created by n52-hp on 04/09/2017.
 */
$(document).ready(function () {
    var divHeight = $('#slider0').height;
    $("#slider1").draggable({
        axis: 'x',
        containment: 'parent',
        drag: function (event, ui) {
            var p =ui.position.left;
            $('#green-area').width(p);
            if ( ui.position.left >= 290) {
                $("#slider0").fadeOut();
                $("#mysub").removeAttr("disabled");
                $("#succes").css("display","block");
            } else {
                // Apparently Safari doesn't allow partial opacity on text with background clip? Not sure.
                // $("h2 span").css("opacity", 100 - (ui.position.left / 5))
            }
        },
        stop: function (event, ui) {
            if (ui.position.left < 290) {
                $(this).animate({
                    left: 0
                });
                $('#green-area').width(0);
            }
        }
    });

});

//chek mobile phone for bussines

function checkPhone() {
    var pattern2= "[0][9][0-9]{9}";
    var pattern3="[0][0-9]{10}";
    var tel1=$('#mobile').val();
    var tel2=$('#home-number').val();

    if(tel1.match(pattern2) && tel2.match(pattern3)){
        alert("True");
    }
    else{
        alert("تلفن همراه یا تلفن ثابت نادرست وارد شده اند .")
    }
}