$().ready(function (){

    $("#header").height($(window).height());

    $("#btnEnglish").click(function (){
        window.location="../index.html";
    });

    $("#btnPortuguese").click(function (){
        window.location.href="../index2.html";
    });

    $("#childMilesApp").click(function() {
        window.open("https://github.com/dsreliete/MilhasInfantis");
    })

    $("#weatherApp").click(function() {
        window.open("https://github.com/dsreliete/WeatherApp");
    })

    $("#fiveThingsApp").click(function() {
        window.open("https://github.com/dsreliete/Five-Things-Android-App");
    })

    $("#pollsApp").click(function(){
        window.open("https://github.com/dsreliete/Polls");
    })

    $("#heroesApi").click(function(){
        window.open("https://github.com/dsreliete/Nucamp");
    })

    $("#blogApp").click(function(){
        window.open("https://github.com/dsreliete/Blog");
    })
})