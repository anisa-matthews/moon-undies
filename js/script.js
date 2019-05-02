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
});