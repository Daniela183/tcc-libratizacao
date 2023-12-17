<?php

?>

<nav class="navbar navbar-dark navbar-expand-lg fixed-top">
    <div class="container">
        <a class="navbar-brand" href=""><img  id="imglibras" src="libras.png"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                  
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-5" action="principal.php">
                    <li class="nav-item">
                        <a id="linkinicio" class="nav-link active px-3 fw-bold" aria-current="page" href="index.php">INÍCIO<span id="ini"><img id="imginicio" src="img/gif/inicio.gif"/></span></a>
                    </li>
                    <li class="nav-item">
                    <a id="linkbasico" class="nav-link active px-3 fw-bold" aria-current="page" href="?secao=nivelba">NÍVEL BÁSICO<span id="bas"><img id="imgbasic" src="img/gif/basico.gif"/></span></a>
                    </li>
                    <li class="nav-item">
                    <a id="linkintermedio" class="nav-link active px-3 fw-bold" aria-current="page" href="?secao=nivelin">NÍVEL INTERMEDIÁRIO<span id="int"><img id="imginter" src="img/gif/intermediario.gif"/></span></a>
                    </li>
                    <li class="nav-item">
                    <a id="linkavancado" class="nav-link active px-3 fw-bold" aria-current="page" href="?secao=nivelav">NÍVEL AVANÇADO<span id="ava"><img id="imgavan" src="img/gif/avancado-.gif"/></span></a>
                    </li>
                   
                </ul>

            </div>
        </div>
    </div>
</nav>