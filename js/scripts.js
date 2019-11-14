$().ready(function (){

    $("#header").height($(window).height());

    $(".navbar-nav").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    })

    $(".navbar > .navbar-brand").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    })

    $("#btnEnglish").on("click", function () {
        window.location="https://dsreliete.github.io/elirodrigues/index.html";
    });

    $("#btnPortuguese").on("click", function (){
        window.location.href="https://dsreliete.github.io/elirodrigues/index2.html";
    });

    $("#childMilesApp").on("click", function() {
        window.open("https://github.com/dsreliete/MilhasInfantis");
    })

    $("#weatherApp").on("click", function() {
        window.open("https://github.com/dsreliete/WeatherApp");
    })

    $("#fiveThingsApp").on("click", function() {
        window.open("https://github.com/dsreliete/Five-Things-Android-App");
    })

    $("#pollsApp").on("click", function(){
        window.open("https://github.com/dsreliete/Polls");
    })

    $("#heroesApi").on("click", function(){
        window.open("https://github.com/dsreliete/heroes-api");
    })

    $("#blogApp").on("click", function(){
        window.open("https://github.com/dsreliete/Blog");
    })
})