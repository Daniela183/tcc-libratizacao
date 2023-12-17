<?php 
   include_once("verurl.php");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Libratização </title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='css/meucss.css'>
    <link rel='stylesheet' type='text/css' media='screen' href='css/bootstrap.css'>
    <link rel="icon" type="image/png" sizes="32x32" href="libras.png">
    <script src='js/bootstrap.bundle.js'></script>
</head>
<body>
    
<header class="fixed-top">
    <?php include "includes/topocommenu.php"; ?>
</header>
    <section class="container">
        <?php
            $red = new verURL();
	          $red->trocarUrl(@$_GET['secao']);
        ?>
    
    </section>

    <footer class="fixed">
        <?php include "includes/rodape.php"; ?>
    </footer>
  
</body>

</html>