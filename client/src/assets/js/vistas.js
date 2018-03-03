$('.registrate-seccion').find('a').click(function() {
     $('.inicio-sesion').hide("fast", function() {
        $('.seccion-registro').show('fast');
    });
});
$('.mensaje-ingresa').find('a').click(function() {
    $('.seccion-registro').hide('fast', function() {
        $('.inicio-sesion').show("fast");
    });
});