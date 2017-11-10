$(function() {
    $('#logo').click(function() {
        $('html,body').animate({
            scrollTop: 0 
        }, 800);

        return false;
    });
});

$(window).scroll(function () {
    var $heightScrolled = $(window).scrollTop();
    var $defaultHeight = 115;

    if ($heightScrolled > $defaultHeight){
        $('#shadow-scroll').removeClass("small-ds")
        $('#shadow-scroll').addClass("large-ds")
    } else {
        $('#shadow-scroll').removeClass("large-ds")
        $('#shadow-scroll').addClass("small-ds")
    }
});
/* Starting Value of "$0/month"*/
function beginningReading() {
    for(var j=1; j<=6; j++) {
        $("#paymentValue" + j).val("0");
    }
}

function readValue(i) {
    var amount = $("#read" + i).val();
    $("#paymentValue" + i).val(amount);
}

function writeValue(i) {
    var string = $("#paymentValue" + i).val();
    $("#read" + i).val(string);
}

function total() {
    var totalAmount = 0;
    for (var i=1; i<=6; i++) {
        totalAmount += parseInt($('#read' + i).val());
        $("#navbarTotal").html("$"+ totalAmount + "/month");
        $("#t7").html(totalAmount);
    }
}

function openModal() {
     $("#modal").animate({left: '0'}, "fast");
}

$('#close').click(function () { 
   $("#modal").animate({left: '100vw'}, "fast");
});

function modalFill() {
    for(var i=1; i<=6; i++) {
        $("#t" + i).html($("#read" + i).val())
    }
}

function logout() {
  window.location.href = "logoutpage.html";
};