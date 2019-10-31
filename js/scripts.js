$().ready(function (){

    $('#header').height($(window).height());

    $('#btnEnglish').click(function (){
        console.log("ta funfando eng");
        window.location.href = '/index.html'
        return false;
    });

    $('#btnPortuguese').click(function (){
        console.log("ta funfando br");  
    });
})