<?php

namespace Class;

use Symfony\Component\Yaml\Yaml;
use Twig;

//require_once __DIR__ . "/ProjectsControllers.php";

//singleton. Il ne peut y avoir qu'un seul router
class Router
{
    private array $routes = [];
    private static Router $router;
//    private static ProjectsControllers $ProjectControllers;


    private static Twig\Environment $twig;

    private function __construct()
    {
    }

    public function routeReady(): bool
    {
        return count($this->routes) > 0;
    }

    public function set(string $route, string $controllerName, string $funcName, array $methods): void
    {
        foreach ($methods as $method) {
            $this->routes[$method][$route] = ["controller" => $controllerName, "function" => $funcName];
        }
    }

//    public function setMany(array $routeAndAction)
//    {
//        foreach ($routeAndAction as $route => $action) {
//            if (!str_starts_with($route, "/")) continue;
//            $this->set($route, $action);
//        }
//    }

    public static function getTwig()
    {
        if (!isset(self::$twig)) {
            self::InitTwig();
        }
        return self::$twig;
    }

    public static function InitTwig(): void
    {
        $loader = new Twig\Loader\FilesystemLoader(__DIR__ . "/../views");
        self::$twig = new \Twig\Environment($loader);

        $func = new \Twig\TwigFunction('navTo', function (string $alias, array $params = null)
        {
            $yamlFile = Yaml::parseFile("./Config/alias.yml");
            if(array_key_exists($alias, $yamlFile)) {
                $target = $yamlFile[$alias];
                if($params == null)
                {
                    echo $target;
                    return;
                }
                foreach($params as $key => $value)
                {
                    error_log("key : ".$key);
                    $target = str_replace(":" . $key, $value, $target);
                }
                echo $target;
                return;
            }
            echo $alias;
        });

        self::$twig->addFunction($func);
    }

    public static function getRouter(): Router
    {
//        self::$ProjectControllers = new ProjectsControllers("./Config/projects.json");

        if (!isset(self::$twig)) {
            self::InitTwig();
        }

        if (!isset(self::$router)) {
            error_log("new router");
            self::$router = new Router();
            return self::$router;
        }
        return self::$router;
    }

    /**
     * @param string $file Correspond à la view qu'il faut rendre. Ne doit pas contenir d'extension !
     * @param array $params Les paramètres a ajouter à la fonction render
     * @return void
     */
    public static function render(string $file, array $params = [], string $ext = ".html.twig"): void
    {
        if (!isset(self::$twig)) {
            self::InitTwig();
        }
        echo self::$twig->render($file . $ext, $params);
    }

    public function work()
    {
        $url = $_SERVER['REQUEST_URI'] ?? "";

        if (str_starts_with($url, "/RemakePortfolio/")) {
            $url = substr($url, offset: 16);
        }

        $slug = substr($url, 9);

        foreach ($this->routes[$_SERVER["REQUEST_METHOD"]] as $route => $action) {
            $regex = preg_replace("#(:\w+)#", "([^/]+)", $route);

            $regex = "@^" . $regex . "$@";

//            echo "regex : " . $regex . "<br />";
//            echo "url : " . $url . "<br />";
            if (preg_match($regex, $url, $matches)) {
//                print_r($matches);
                array_shift($matches); //retirer le premier élémént
                $routesParamsValues = $matches;

                $routeParamsNames = [];
                if (preg_match_all("#(:\w+)#", $route, $matches)) {
                    $routeParamsNames = $matches[1];
                }

                $new = [];
                foreach ($routeParamsNames as $key) {
                    $newKey = ltrim($key, ":");
                    $new[] = $newKey;
                }

                $routesParams = array_combine($new, $routesParamsValues);

                $class = $action["controller"];
                $function = $action["function"];
//
//                echo " ROutes params : <br />";
//                var_dump($new);
//
//                echo "<br />";
//                var_dump($matches);

                $controller = new $class(self::$twig);
                call_user_func_array(array($controller, $function), $routesParams);
                return;
            };
        }

        self::render("pages/error/error", [
            "message" => "l'URL $url n'existe pas",
            "title" => "On dirait que vous vous êtes perdu xD"
        ]);
    }

}

