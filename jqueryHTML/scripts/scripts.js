$(document).ready(function(){
    $("#lightMode").click(function(){
        $("h1, h4").removeClass("secondary-headings")
        $("h1, h4").addClass("primary-headings");
        $("#primary").addClass("light")
        $("#primary").removeClass("dark");
    });
    $("#darkMode").click(function(){
        $("h1, h4").removeClass("primary-headings")
        $("h1, h4").addClass("secondary-headings");
        $("#primary").addClass("dark")
        $("#primary").removeClass("light");
    });
    $("#toggleMode").click(function(){
        $("h1, h4").toggleClass("primary-headings")
        $("h1, h4").toggleClass("secondary-headings");
        $("#primary").toggleClass("dark")
        $("#primary").toggleClass("light");
    });
    
    $("#textDec").click(function(){
        let textSize = parseInt($("#primary").css("font-size"));
        textSize -= 2;
        let setText = textSize + "px";
        $("#primary").css({"font-size": setText});
    });
    $("#textInc").click(function(){
        let textSize = parseInt($("#primary").css("font-size"));
        textSize += 2;
        let setText = textSize + "px";
        $("#primary").css({"font-size": setText});
    });

    $("#submit").click(function(){
        let fname = $("#fname").val();
        $("#fname").val("");
        let lname = $("#lname").val();
        $("#lname").val("");
        let dish = $("#dish").val();
        $("#dish").val("");
        let pet = $("#pet").val();
        $("#pet").val("");
        let species = $("#species").val();
        $("#species").val("");

        let strings = fname + " " + lname + " is bringing " + dish + " with their " + species + ", " + pet + "</br>"
        $("#display").append(strings);
    });
});
