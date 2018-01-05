<?php  include("header.php"); ?>
<body>
    <div class="container">
        <?php
            include("menu.php");
        ?>
        <h1>Tus mensajes</h1>
        <div class="row">
            <div class="col-md-4">
                <div class="solicitudes-box">
                    <p><strong>Fecha:</strong> 24/11/2017</p>
                    <p><strong>Nombre cliente:</strong> Rodrigo Antonio Campos Robles</p> 
                    <div class="footer">
                        <button data-toggle="modal" data-target="#mensajes" class="btn btn-primary pull-right">Ver conversación</button>
                        <button class="btn btn-secondary pull-right">Borrar</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="solicitudes-box">
                    <p><strong>Fecha:</strong> 24/11/2017</p>
                    <p><strong>Nombre cliente:</strong> Rodrigo Antonio Campos Robles</p> 
                    <div class="footer">
                        <button data-toggle="modal" data-target="#mensajes" class="btn btn-primary pull-right">Ver conversación</button>
                        <button class="btn btn-secondary pull-right">Borrar</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="solicitudes-box">
                    <p><strong>Fecha:</strong> 24/11/2017</p>
                    <p><strong>Nombre cliente:</strong> Rodrigo Antonio Campos Robles</p> 
                    <div class="footer">
                        <button data-toggle="modal" data-target="#mensajes" class="btn btn-primary pull-right">Ver conversación</button>
                        <button class="btn btn-secondary pull-right">Borrar</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="solicitudes-box">
                    <p><strong>Fecha:</strong> 24/11/2017</p>
                    <p><strong>Nombre cliente:</strong> Rodrigo Antonio Campos Robles</p> 
                    <div class="footer">
                        <button data-toggle="modal" data-target="#mensajes" class="btn btn-primary pull-right">Ver conversación</button>
                        <button class="btn btn-secondary pull-right">Borrar</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="solicitudes-box">
                    <p><strong>Fecha:</strong> 24/11/2017</p>
                    <p><strong>Nombre cliente:</strong> Rodrigo Antonio Campos Robles</p> 
                    <div class="footer">
                        <button data-toggle="modal" data-target="#mensajes" class="btn btn-primary pull-right">Ver conversación</button>
                        <button class="btn btn-secondary pull-right">Borrar</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="solicitudes-box">
                    <p><strong>Fecha:</strong> 24/11/2017</p>
                    <p><strong>Nombre cliente:</strong> Rodrigo Antonio Campos Robles</p> 
                    <div class="footer">
                        <button data-toggle="modal" data-target="#mensajes" class="btn btn-primary pull-right">Ver conversación</button>
                        <button class="btn btn-secondary pull-right">Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
        include("footer.php");
    ?>
    <!-- Modal -->
<div class="modal fade" id="mensajes" tabindex="-1" role="dialog" aria-labelledby="mensajesLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="mensajesLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="mensaje pull-right">
                <p class="pull-right nombre-cliente">Oscar Rodrigo Fuentes Urzúa</p>
                <div class="mensaje-contenido well">
                    Este es un texto ejemplo de mensaje
                </div>
                <p class="pull-left fecha-mensaje">12/10/2017 17:30 hr</p>
            </div>
        </div>
        <div class="row">
            <div class="mensaje pull-left">
                <p class="pull-right nombre-usuario">Yo</p>
                <div class="mensaje-contenido well">
                    Este es un texto ejemplo de mensaje
                </div>
                <p class="pull-right fecha-mensaje">12/10/2017 17:30 hr</p>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Responder</button>
      </div>
    </div>
  </div>
</div>
</body>
</html>