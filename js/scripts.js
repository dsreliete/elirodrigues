$().ready(function (){

    $('#header').height($(window).height());

    $('#btn-english').click(function (){
        console.log("ta funfando english");
        window.location.href="../index.html";
    });

    $('#btn-portuguese').click(function (){
        console.log("ta funfando br");
        window.location.href="../index2.html";
    });
})