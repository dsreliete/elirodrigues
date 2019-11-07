$().ready(function (){

    $("#header").height($(window).height());

    $(".navbar-nav").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    })

    $(".navbar > navbar-brand > img").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    })

    $("#btnEnglish").click(function () {
        window.location="https://dsreliete.github.io/elirodrigues/index.html";
    });

    $("#btnPortuguese").click(function (){
        window.location.href="https://dsreliete.github.io/elirodrigues/index2.html";
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