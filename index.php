<?php

include "Controllers/Router.php";
include "config.php";
require_once 'vendor/autoload.php';

$loader = new Twig\Loader\FilesystemLoader('views');
$twig = new \Twig\Environment($loader);

$host = $_SERVER['HTTP_HOST'];


if ($host === 'sylver-pelagemaxime.up.railway.app') {
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: https://www.sylvio-pelagemaxime.fr" . $_SERVER['REQUEST_URI']);
    exit();
}

if($host === "sylvio-pelagemaxime.fr")
{
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: https://www.sylvio-pelagemaxime.fr" . $_SERVER['REQUEST_URI']);
    exit();    
}
    
$router = Router::getRouter();

$router->serve("views/pages/*.php");
$router->serve("public/*.*",true);
$router->set("sendMail.php","./Scripts/sendMail.php");

$router->work();
