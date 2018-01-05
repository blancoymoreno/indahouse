<?php  include("header.php"); ?><!DOCTYPE html>
<body>
    <div class="container">
        <?php
            include("menu.php");
        ?>
        <section class="row buscador">
            <div class="col-xs-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="pestana-buscador active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">¿Quieres ofrecer un servicio? <br> Descubre trabajos independientes para ti</a></li>
                    <li role="presentation" class="pestana-buscador"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">¿Buscar pagar por algún servicio a domicilio? <br>Encuentra independientes que te ayudarán</a></li>
                </ul>
            </div>       
            <!-- Tab panes -->
            <div class="col-xs-12">
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">
                        <div class="col-md-4 col-md-offset-4">
                            <input type="text" class="form-control" placeholder="Ingresa">
                            <a href="#" class="pull-right">O busca por categorías ></a>  
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile">
                        <div class="col-md-4 col-md-offset-4">
                            <input type="text" class="form-control" placeholder="Ingresa">
                            <a href="#" class="pull-right">O busca por categorías ></a>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
        <section class="row galeria">
            <div class="col-xs-12">
                <h2>Servicios más populares</h2>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-3">
                <a href="detalle-servicio.php" class="capsula-servicio">
                    <div class="imagen"></div>
                    <h4 class="titulo-capsula-servicio">este es un titulo</h4>
                </a>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-3">
                <a href="detalle-servicio.php" class="capsula-servicio">
                    <div class="imagen"></div>
                    <h4 class="titulo-capsula-servicio">este es un titulo</h4>
                </a>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-3">
                <a href="detalle-servicio.php" class="capsula-servicio">
                    <div class="imagen"></div>
                    <h4 class="titulo-capsula-servicio">este es un titulo</h4>
                </a>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-3">
                <a href="detalle-servicio.php" class="capsula-servicio">
                    <div class="imagen"></div>
                    <h4 class="titulo-capsula-servicio">este es un titulo</h4>
                </a>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-3">
                <a href="detalle-servicio.php" class="capsula-servicio">
                    <div class="imagen"></div>
                    <h4 class="titulo-capsula-servicio">este es un titulo</h4>
                </a>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-3">
                <a href="detalle-servicio.php" class="capsula-servicio">
                    <div class="imagen"></div>
                    <h4 class="titulo-capsula-servicio">este es un titulo</h4>
                </a>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-3">
                <a href="detalle-servicio.php" class="capsula-servicio">
                    <div class="imagen"></div>
                    <h4 class="titulo-capsula-servicio">este es un titulo</h4>
                </a>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-3">
                <a href="detalle-servicio.php" class="capsula-servicio">
                    <div class="imagen"></div>
                    <h4 class="titulo-capsula-servicio">este es un titulo</h4>
                </a>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <a href="detalle-servicio.php" class="pull-right">Ver todos ></a>
                </div>
            </div>
        </section>
        <section class="row prefooter">
            <div class="col-md-4">
                <h4>¿Por qué usar Indahouse?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniea commodo consequat. Duis aute irure dolor eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
            <div class="col-md-4">
                <h4>Acuerdos basados en la confianza</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniea commodo consequat. Duis aute irure dolor eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
            <div class="col-md-4">
                <h4>¿Necesitas ayuda?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniea commodo consequat. Duis aute irure dolor eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
        </section>
    </div>
    <?php
        include("footer.php");
    ?>
</body>
</html>