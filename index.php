<?php




use Class\Route;
use Class\Router;

include "config.php";

require_once 'vendor/autoload.php';
require_once "Class/Route.php";
require_once "Class/Router.php";



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

////$router->serve("views/pages/*.php");
//$router->serve("public/*.*",true);
//$router->set("sendMail","./Scripts/sendMail.php");
//$router->set("/", DefaultController::class,"index");

if(!$router->routeReady())
{
    error_log("enabling");
    $path = __DIR__ . "/Controllers";

    $files = scandir($path);
    unset($files[0]);
    unset($files[1]);
    $Controllers = [];
    foreach ($files as $file) {
        $Controllers[] = explode(".", $file)[0];
        $last = $Controllers[count($Controllers) - 1];
        require_once "Controllers/$last.php";
    }


    foreach ($Controllers as $Controller) {

        try {
            $controller = "Controllers\\$Controller";
            $reflection = new ReflectionClass($controller);

            foreach ($reflection->getMethods() as $method) {

                $attributes = $method->getAttributes(Route::class);

                if(count($attributes) === 0)
                    continue;

                /**@var Route $Route*/
                $Route = $attributes[0]->newInstance();

                $router->set($Route->path, $controller, $method->getName(), $Route->methods);
            }
        }
        catch (Exception $e)
        {
            echo $e->getMessage();
            continue;
        }

    }
}


$router->work();
