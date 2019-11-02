$().ready(function (){

    $('#header').height($(window).height());

    $('#english').change(function (){
        console.log("ta funfando english"); 
    });

    $('#portuguese').change(function (){
        console.log("ta funfando br");  
    });
})