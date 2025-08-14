<?php

include "Controllers/Router.php";
include "config.php";
$router = Router::getRouter();

$router->serve("Views/Pages/*.php");
$router->serve("public/*.*",true);
$router->set("sendMail.php","./Scripts/sendMail.php");

$router->work();

?>