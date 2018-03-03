<?php  include("header.php"); ?><!DOCTYPE html>
<body>
    <div class="container">
        <?php
            include("menu.php");
        ?>
        <section class="row imagen-central">
            <div class="col-xs-12">
                <img src="" alt="">
            </div>
        </section>
        <section class="row galeria">
            <div class="col-xs-12">
                <ul class="breadcrumb">
                    <li><a href="#">¿Buscas un servicio?</a><a href="#">/ Servicios </a><span>/ Masajes descontracturantes</span></li>

                </ul>
                <h2>Perfil</h2>
            </div>
            <div class="col-md-2">
                <aside class="foto-detalle-usuario">
                    <div class="foto-evaluacion">
                        <img src="" class="rounded" alt="">
                    </div>
                    <div class="row">
                            <div class="col-md-12">                    
                                <p>29 años</p>
                            </div>
                            <div class="col-md-12">
                                <p> Chileno / Soltero</p>
                            </div>
                            <div class="col-md-12">
                                <p>Vive en Santiago de Chile</p>
                            </div>
                            <div class="col-md-12">
                                <p>Idiomas: Español, Inglés</p>
                            </div>
                        </div>
                </aside>
            </div>
            <div class="col-md-10">
                <article class="evaluacion-box row no-row">
                    <div class="col-md-9">
                        <h5><span class="nombre-evaluacion">Rodrigo Antonio Campos Robles</span></h5>
                        <em>Masajes descontracturantes</em>
                        <p>5.000 pesos chilenos / hora</p>
                        
                        <p class="contenido-evaluacion">
                        Me encanta  la vida sana, el comer rico y dormir como niño, hago masajes desde los 15 años y ha sido un gran aprendizaje, conozco muchas formas de relajación mediante el uso de mis manos
                        </p>
                    </div>
                    <div class="col-md-3">
                        <h3>Valoración Indahouser</h3>
                        <p>6.8</p>
                        <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span>
                        <em>10 evaluaciones</em>
                    </div>
                    <div class="pull-right">
                        <!--<button class="btn btn-primary">Solicitar</button>-->
                        <button class="btn btn-secondary" data-toggle="modal" data-target="#mensaje">Enviar mensaje</button>
                    </div>
                </article>
            </div>
        </section>
    </div>

    <?php
        include("footer.php");
    ?>
    <!-- Modal -->
    <div class="modal fade" id="mensaje" tabindex="-1" role="dialog" aria-labelledby="mensajeLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="mensajeLabel">Modal title</h4>
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
                <div class="row">
                    <div class="col-xs-12">
                        <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Enviar</button>
            </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="evaluacion" tabindex="-1" role="dialog" aria-labelledby="evaluacionLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="evaluacionLabel">Modal title</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <label for="textoevaluacion">Comentarios de evaluación</label>
                        <textarea name="" id="textoevaluacion" cols="30" rows="5" class="form-control"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Enviar</button>
            </div>
            </div>
        </div>
    </div>
</body>
</html>