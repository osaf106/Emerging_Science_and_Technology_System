// var LinkGet = document.getElementById("navLink");
// function hideMenu()
// {
//     LinkGet.style.right="-250px";

// }
// function showMenu()
// {
//     LinkGet.style.right="0";
    
// }

$(document).ready(function(){

    $("#cross").click(function(){
        $("#navLink").css("right","-250px");
    })    
    $("#menu").click(function(){
        $("#navLink").css("right","0");
    })   
})
