var cip = $(".video").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

$(document).ready(function () {
    $('.myimage').hide();

    //When the Image is hovered upon, show the hidden div using Mouseover
    $('#vid1').mouseover(function () {
        $('.myimage1').hide();
    });

    //When the Image is hovered away from, hide the div using Mouseout
    $('#vid1').mouseout(function () {
        $('.myimage1').show();
    });
});
//------------------------------------------------------------
$(document).ready(function () {
    $('.myimage').hide();
    $('#vid2').mouseover(function () {
        $('.myimage2').hide();
    });
    $('#vid2').mouseout(function () {
        $('.myimage2').show();
    });
});
//------------------------------------------------------------
$(document).ready(function () {
    $('.myimage').hide();
    $('#vid3').mouseover(function () {
        $('.myimage3').hide();
    });
    $('#vid3').mouseout(function () {
        $('.myimage3').show();
    });
});
//------------------------------------------------------------
$(document).ready(function () {
    $('.myimage').hide();
    $('#vid4').mouseover(function () {
        $('.myimage4').hide();
    });
    $('#vid4').mouseout(function () {
        $('.myimage4').show();
    });
});
//------------------------------------------------------------
$(document).ready(function () {
    $('.myimage').hide();
    $('#vid5').mouseover(function () {
        $('.myimage5').hide();
    });
    $('#vid5').mouseout(function () {
        $('.myimage5').show();
    });
});
//------------------------------------------------------------
$(document).ready(function () {
    $('.myimage').hide();
    $('#vid6').mouseover(function () {
        $('.myimage6').hide();
    });
    $('#vid6').mouseout(function () {
        $('.myimage6').show();
    });
});

