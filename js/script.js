$(document).ready(function(){
    //hover over information
    $("#stat1").mouseover(function(){
        $("#words").children().show();
        $("#moon").attr('src','images/frame5.png');
    });

    $("#stat1").mouseout(function(){
        $("#words").children().hide();
        $("#moon").attr('src','images/moon.gif');
    });

    //click undies
    $(".svg").click(function(){
        $("#monitor").show();
        setTimeout(function() { $("#monitor").hide(); }, 3000);
    });

    //click pelvic scan
    $("button").click(function(){
        $(".svg").attr("src", "images/pelvic-scan.gif");
        setTimeout(function() { $(".svg").attr("src", "images/smile.svg"); }, 3500);
    });
});