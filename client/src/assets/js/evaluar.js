$(document).ready(function () {

  $('.nota').mouseover(
    function () {
      var numNota = this.dataset.star;
      if (!$(this).hasClass('glyphicon-star')) {
        $.each($('.nota'), function (i, not) {
          if ((i + 1) <= numNota) {
            $(not).addClass('glyphicon-star');
            $(not).removeClass('glyphicon-star-empty');
          }
        });
      }
    }
  ).mouseenter(
    function () {
      var numNota = this.dataset.star;
      if ($(this).hasClass('glyphicon-star')) {
        $.each($('.nota'), function (i, not) {
          if (i >= numNota) {
            $(not).addClass('glyphicon-star-empty');
            $(not).removeClass('glyphicon-star');
          }
        });
      }
    }
    );
});

function notaEvaluacion() {
  var notas = $('#notas').find('.nota');
  var sumaNotas = 0;
  $.each(notas, function (i, nota) {
    var _nota = $(nota);
    if (_nota.hasClass('glyphicon-star')) {
      sumaNotas++;
    }
  });
  return sumaNotas;
}

function valorar(_this) {
  var comentario = $('#textoevaluacion').val();
  var nota = notaEvaluacion();
  var idService = "5a6d618af794da0b54c52dff";
  var idUsuario =  "5a6d1980cce13d30fcae57da";
  var valoracion = {
    "numEvaluacion": parseInt(nota),
    "comentario": comentario,
    "idService": idService,
    "idUsuario": idUsuario
  };

  debugger;
  $.ajax({
    url: "/create-valoracion",
    type: "post",
    data: JSON.stringify(valoracion),
    dataType: "json",
    contentType: "application/json",
    async: false,

    beforeSend: function () {

    },
    success: function (data) {
      alert("valoración agregada");
    },
    error: function () {

    },
    complete: function () {

    }
  });
}