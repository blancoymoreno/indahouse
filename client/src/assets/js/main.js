$('.fa-times').hide();

$( ".menu-icono" ).click(function() {
  $( "#menu-items" ).animate({width:'toggle'},200);
  $( "nav.navbar" ).toggleClass('menu-padre-abierto');
  if($('nav.navbar').hasClass('menu-padre-abierto')){
    $('.fa-bars').hide();
    $('.navbar .fa-times').show();
  } else{
    $('.fa-bars').show();
    $('.navbar .fa-times').hide();
  }
  $( "nav.navbar" ).closest('.cuerpo-inicio ').toggleClass('body-hidden');
});


$('#tabs-principal a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})
