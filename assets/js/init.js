(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.slider').slider();
});

var user = 'NuevoLeon';
var password = '1234';

$( "#submit" ).click(function() {
  if($("#user").val() === user && $('#password').val() === password){
    window.location = '../examples/opcion.html'; //url de archivo
  } else{
    Materialize.toast('Usuario o contraseña incorrecto', 4000);
  }
});
