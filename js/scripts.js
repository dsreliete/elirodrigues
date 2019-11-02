$().ready(function (){

    $('#header').height($(window).height());

    $('#btnEnglish').change(function (){
        console.log("ta funfando english");
        // window.location.href="../index.html";
    });

    $('#btnPortuguese').change(function (){
        console.log("ta funfando br");
        // window.location.href="../index2.html";
    });
})