$().ready(function (){

    $("#header").height($(window).height());

    $("#btn-english").click(function (){
        window.location="../index.html";
    });

    $("#btn-portuguese").click(function (){
        window.location="../index2.html";
    });

    $("#childMilesApp").click(function() {
        window.open("https://github.com/dsreliete/MilhasInfantis");
    })

    $("#weatherApp").click(function() {
        window.open("https://github.com/dsreliete/WeatherApp");
    })

    $("fiveThingsApp").click(function() {
        window.open("https://github.com/dsreliete/Five-Things-Android-App");
    })
})