$(document).ready(function(){

    $("#up").click(function(){
        $("#moveDiv").animate({marginTop:"-=10px"});
    });
    $("#down").click(function(){
        $("#moveDiv").animate({marginTop:"+=10px"});
    });
    $("#left").click(function(){
        $("#moveDiv").animate({marginLeft:"-=10px"});
    });
    $("#right").click(function(){
        $("#moveDiv").animate({marginLeft:"+=10px"});
    });

    $("#start").click(function(){
        $("#moveDiv").slideToggle("slow",function(){
            alert("Slide!");
        });
    });
    $("#stop").click(function(){
        $("#moveDiv").stop();
    });
    $("#chain").click(function(){
        $("#moveDiv").css("background","lightgreen").slideDown(5000).slideUp(7500);
    });
});