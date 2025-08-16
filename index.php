<?php

include "Controllers/Router.php";
include "config.php";

/*
$host = $_SERVER['HTTP_HOST'];


if ($host === 'localhost:8080') {
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: https://google.com" . $_SERVER['REQUEST_URI']);
    exit();
}
    */
$router = Router::getRouter();

$router->serve("Views/Pages/*.php");
$router->serve("public/*.*",true);
$router->set("sendMail.php","./Scripts/sendMail.php");

$router->work();

//s
?>