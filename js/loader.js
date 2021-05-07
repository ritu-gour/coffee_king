$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.parallax').parallax(); 
    $(".slider").slider({full_Width: true})
    $('.parallax').parallax();
    $('.myreviews').carousel({
        numVisible:7,
        sift:55,
        padding:55,
    });
});





function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
    
}