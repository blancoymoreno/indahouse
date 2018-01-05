<?php  include("header.php"); ?><!DOCTYPE html>
<body>
    <div class="container">
        <?php
            include("menu.php");
        ?>
        <aside class="col-md-3">
            <div class="gray-background">
                <ul>
                    <li><a class="submenu" id="datos-link" href="#datos-personales">Datos personales</a></li>
                    <li><a class="submenu" id="info-link" href="#informacion-de-perfil">Información de perfil</a></li>
                    <li><a class="submenu" id="foto-link" href="#foto-de-perfil">Imagen de perfil</a></li>
                    <li><a class="submenu" id="evaluaciones-link" href="#evaluaciones">Evaluaciones</a></li>
                </ul>
            </div>
        </aside>
        <div class="col-md-9 caja-form activo" id="datos-personales">
            <form action="#">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control texto" id="nombre" placeholder="Ingresa nombre">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="apaterno">Apellido Paterno</label>
                            <input type="text" class="form-control texto" id="apaterno" placeholder="Ingresa apellido paterno">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="amaterno">Apellido materno</label>
                            <input type="text" class="form-control texto" id="amaterno" placeholder="Ingresa apellido materno">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="sexo">Sexo</label>
                            <select class="form-control" id="sexo" placeholder="Ingresa">
                                <option value="masculino">masculino</option>
                                <option value="femenino">femenino</option>
                                <option value="Otro">otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                            <label for="fnacimiento">Fecha de nacimiento</label>
                            <input type="text" class="form-control fecha" id="fnacimiento" placeholder="DD/MM/AAAA">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email">Dirección de correo electrónico</label>
                            <input type="email" class="form-control" id="email" placeholder="tuemail@ejemplo.com">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ncelular">Celular de contacto</label>
                            <div class="input-group">
                                <span class="input-group-addon" id="ncelular">+569</span>
                                <input type="text" class="form-control fono" placeholder="9-00000000" aria-describedby="ncelular">
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="col-md-6">
                    <div class="form-group">
                        <label for="idioma">Idioma</label>
                        <select class="form-control" placeholder="Ingresa" aria-describedby="idioma">
                            <option value="es">Español</option>
                            <option value="in">Inglés</option>
                            <option value="cr">Creol</option>
                            <option value="fr">Francés</option>
                            <option value="it">Italiano</option>
                            <option value="ch">Chino mandarín</option>
                        </select>
                    </div>
                </div>-->
                <div class="row">
                    <div class="col-xs-12">    
                        <h4>¿Tienes estudios técnico / universitario?</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">    
                        <input type="radio" id="sin-estudio"><label for="sin-estudio">Sin estudio</label>
                    </div>
                    <div class="col-md-3">    
                        <input type="radio" id="estudiante"><label for="estudiante">Estudiante</label>
                    </div>
                    <div class="col-md-3">    
                        <input type="radio" id="egresado"><label for="egresado">Egresado</label>
                    </div>
                    <div class="col-md-3">    
                        <input type="radio" id="titulado"><label for="sin-estudio">Titulado</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">    
                        <h4>Dirección de residencia</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="region">Región</label>
                            <select class="form-control" id="region">
                                <option value="met">R.Metropolitana</option>
                                <option value="tar">Tarapacá</option>
                                <option value="ant">Antofagasta</option>
                                <option value="ata">Atacama</option>
                                <option value="coq">Coquimbo</option>
                                <option value="val">Valparaíso</option>
                                <option value="ohi">Libertador General Bernardo O'Higgins</option>
                                <option value="mau">Maule</option>
                                <option value="bio">Bío Bío</option>
                                <option value="ara">Araucanía</option>
                                <option value="lag">Los Lagos</option>
                                <option value="ais">Aisén del General Carlos Ibáñez del Campo</option>
                                <option value="mag">Magallanes y de la Antártica Chilena</option>
                                <option value="rio">Los Ríos</option>
                                <option value="ari">Arica y Parinacota</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="cuidad">Ciudad</label>
                            <select class="form-control" id="ciudad">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="calle">Avenida / pasaje</label>
                            <input type="text" class="form-control texto" placeholder="Av. Tuavenida / pje. Tupasaje" aria-describedby="calle">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="ndireccion">N°</label>
                            <input type="text" class="form-control numero" id="ndireccion" placeholder="N° avenida o pasaje">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="ndepto">Depto.</label>
                            <input type="text" class="form-control ndepto" id="ndepto" placeholder="9999-B ">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="input-group">
                            <input type="checkbox" id="ofrezcoservicio" aria-label="...">
                            <label for="ofrezcoservicio" aria-label="ofrezcoservicio">Ofrezco mis servicios</label>
                        </div><!-- /input-group -->
                    </div><!-- /.col-lg-6 -->
                    <div class="col-lg-6">
                        <div class="input-group">
                            <input type="checkbox" id="pagoporservicio" aria-label="...">
                            <label for="pagoporservicio" aria-label="pagoporservicio">Pago por servicios</label>
                        </div><!-- /input-group -->
                    </div><!-- /.col-lg-6 -->
                </div>
                <div class="row">
                    <div class="col-xs 12">
                        <button type="submit" class="pull-right btn btn-primary">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-9 caja-form oculto" id="informacion-de-perfil">
            <h4>¿Qué servicio ofreces?</h4>
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#agregar-servicio">
                Agregar
            </button>
            <span>Por seguridad y confiabilidad, puedes ofrecer como máximo 1 servicio, revisa nuestras políticas.</span>
            <h4>Selecciona categoría </h4>
            <select name="" id="categoria-servicio">
                <option value="2">Ocio</option>
                <option value="3">Educación</option>
                <option value="4">Salud y cuidado</option>
                <option value="5">Seguridad</option>
                <option value="6">Carpintería</option>
                <option value="7">Jardinería</option>
                <option value="8">Gasfitería</option>
                <option value="8">Electricidad</option>
                <option value="9">Otros</option>
            </select>
            <h4>Cobro de servicio</h4>
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Ingresa monto" aria-describedby="sizing-addon1">
                        <span class="input-group-addon" id="sizing-addon1">Pesos</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <input type="radio" class="form-control-radio" aria-describedby="sizing-addon1">
                        <label id="sizing-addon1">Por hora</label>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <input type="radio" class="form-control-radio" aria-describedby="sizing-addon1">
                        <label id="sizing-addon1">Por sesión / visita</label>
                    </div>
                </div>
            </div>
            <h4>Duración</h4>
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group select-group">
                        <input type="text" class="form-control" placeholder="Ingresa número" aria-describedby="sizing-addon1">
                        <select class="input-group-addon select" id="sizing-addon1">
                            <option value="1">Minutos</option>
                            <option value="2">Hora</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <input type="radio" class="form-control-radio" aria-describedby="sizing-addon1">
                        <label id="sizing-addon1">Aproximado</label>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <input type="radio" class="form-control-radio" aria-describedby="sizing-addon1">
                        <label id="sizing-addon1">Exacto</label>
                    </div>
                </div>
            </div>
            <h4>Haz una descripción breve sobre ti y tus servicios</h4>
            <div class="row">
                <div class="col-md-12">
                    <textarea name="" id="" placeholder="Ingresa" cols="30" rows="5" class="form-control">

                    </textarea>
                </div>
            </div>
            <button class="btn btn-primary pull-right">Guardar</button>
        </div>
        <div class="col-md-9 caja-form oculto" id="foto-de-perfil">
            <h4>Imagen de perfil</h4>
            <div class="row">
                <div class="col-md-4 imagen-perfil">
                    <img src="" alt="imagen perfil">
                </div>
                <div class="col-md-8">
                    <p>¿Dónde estudiaste tu educación media?Para que los huéspedes y anfitriones se conozcan, lo mejor es añadir fotos de la cara que sean nítidas y estén sacadas de frente. ¡Hospedar un paisaje no tiene mucha gracia! Asegúrate de utilizar una foto en la que se te vea bien la cara y que no incluya información personal o sensible que preferirías que los huéspedes o anfitriones no vieran.</p>
                    <button class="btn btn-primary">Subir un archivo desde mi pc</button>
                </div>
            </div>
        </div>
        <div class="col-md-9 caja-form oculto" id="evaluaciones">
            <div class="row">
                <div class="col-md-9">
                    <h4>Evaluaciones sobre ti</h4>
                    <p>Las evaluaciones se envían al finalizar y/o concretar un servicio. Todas las que recibas estarán disponibles tanto en esta sección como en tu perfil público.</p>
                    <article class="evaluacion-box row no-row">
                
                        <div class="col-md-3">
                           <div class="foto-evaluacion">
                                <img src="" class="rounded" alt="">
                           </div>
                        </div>
                        <div class="col-md-9">
                        <div class="fecha-evaluacion">
                                24/11/2017
                            </div>
                            <h5><span class="nombre-evaluacion">Rodrigo Antonio Campos Robles</span></h5>
                            <p class="contenido-evaluacion">
                                Muy buen servicio, se nota que sabe lo que hace, llegó muy puntual y además es muy cordial.
                            </p>
                            <div class="col-md-12 conformidad-evaluacion"><span class="estrellas-evaluacion pull-right">Nivel de conformidad:  <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span></div>
                        </div>
                    </article>
                    <article class="evaluacion-box row no-row">
                
                        <div class="col-md-3">
                           <div class="foto-evaluacion">
                                <img src="" class="rounded" alt="">
                           </div>
                        </div>
                        <div class="col-md-9">
                        <div class="fecha-evaluacion">
                                24/11/2017
                            </div>
                            <h5><span class="nombre-evaluacion">Rodrigo Antonio Campos Robles</span></h5>
                            <p class="contenido-evaluacion">
                                Muy buen servicio, se nota que sabe lo que hace, llegó muy puntual y además es muy cordial.
                            </p>
                            <div class="col-md-12 conformidad-evaluacion"><span class="estrellas-evaluacion pull-right">Nivel de conformidad:  <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span></div>
                        </div>
                    </article>
                    <article class="evaluacion-box row no-row">
                
                        <div class="col-md-3">
                           <div class="foto-evaluacion">
                                <img src="" class="rounded" alt="">
                           </div>
                        </div>
                        <div class="col-md-9">
                        <div class="fecha-evaluacion">
                                24/11/2017
                            </div>
                            <h5><span class="nombre-evaluacion">Rodrigo Antonio Campos Robles</span></h5>
                            <p class="contenido-evaluacion">
                                Muy buen servicio, se nota que sabe lo que hace, llegó muy puntual y además es muy cordial.
                            </p>
                            <div class="col-md-12 conformidad-evaluacion"><span class="estrellas-evaluacion pull-right">Nivel de conformidad:  <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span></div>
                        </div>
                    </article>
                    <article class="evaluacion-box row no-row">
                
                        <div class="col-md-3">
                           <div class="foto-evaluacion">
                                <img src="" class="rounded" alt="">
                           </div>
                        </div>
                        <div class="col-md-9">
                        <div class="fecha-evaluacion">
                                24/11/2017
                            </div>
                            <h5><span class="nombre-evaluacion">Rodrigo Antonio Campos Robles</span></h5>
                            <p class="contenido-evaluacion">
                                Muy buen servicio, se nota que sabe lo que hace, llegó muy puntual y además es muy cordial.
                            </p>
                            <div class="col-md-12 conformidad-evaluacion"><span class="estrellas-evaluacion pull-right">Nivel de conformidad:  <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span></div>
                        </div>
                    </article>
                    
                </div>
                <div class="col-md-3" id="promedio">
                    <h4>Promedio</h4>
                    <h2>6,8 / 7</h2>
                </div>
            </div>
        </div>
    </div>
   
    <?php
        include("footer.php");
    ?>
    <!-- Modal -->
    <div class="modal fade" id="agregar-servicio" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
    <script src="../js/jQuery-Mask/jquery.mask.min.js"></script>
        <script>
        $(document).ready(function(){
            $('.fecha').mask('00/00/0000');
            $('.fono').mask('0-00000000');
            $('.numero').mask('00000000');
            $('.ndepto').mask('0000-A');
            $('.texto').bind('input blur',function(){ 
                $(this).val( $(this).val().replace(/[^A-Za-z]/g,'') ); }
            );
            $('.submenu').on('click', function(){
                $(this).addClass('active');
                $(this).closest('li').siblings('li').find('a').removeClass('active');
                var id = $(this).attr('href').replace('#', '');
                if($('#datos-link').hasClass('active')){
                    $('#datos-personales').addClass('actvo').removeClass('oculto');
                    $('#datos-personales').siblings('.caja-form').addClass('oculto').removeClass('activo');
                } else if($('#info-link').hasClass('active')){
                    $('#informacion-de-perfil').addClass('actvo').removeClass('oculto');
                    $('#informacion-de-perfil').siblings('.caja-form').addClass('oculto').removeClass('activo');
                } else if($('#foto-link').hasClass('active')){
                    $('#foto-de-perfil').addClass('actvo').removeClass('oculto');
                    $('#foto-de-perfil').siblings('.caja-form').addClass('oculto').removeClass('activo');
                } else if($('#evaluaciones-link').hasClass('active')){
                    $('#evaluaciones').addClass('actvo').removeClass('oculto');
                    $('#evaluaciones').siblings('.caja-form').addClass('oculto').removeClass('activo');
                }
            })
            
        });
    </script>
</body>