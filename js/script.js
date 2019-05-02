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
        $("#monitor").toggle();
    });

    //click pelvic scan
    $("#pelvic").click(function(){
        $(".svg").attr("src", "images/pelvic-scan.gif");
        setTimeout(function() { $(".svg").attr("src", "images/smile.svg"); }, 3500);
    });
});