<?php

include "Controllers/ProjectsControllers.php";
//singleton. Il ne peut y avoir qu'un seul router
class Router
{
    private array $routes;
    private static Router $router;
    private static ProjectsControllers $ProjectControllers;

    private static Twig\Environment $twig;

    private function __construct()
    {
    }

    public function set(string $route,string $action)
    {
        $this->routes[$route]= $action;
    }

    public function setMany(array $routeAndAction)
    {
        foreach($routeAndAction as $route => $action)
        {
            if(!str_starts_with($route,"/")) continue;
            $this->set($route,$action);
        }
    }

    public static function InitTwig()
    {
        $loader = new Twig\Loader\FilesystemLoader(__DIR__ . "/../views");
        self::$twig = new \Twig\Environment($loader);
    }

    public static function getRouter() : Router 
    {
        self::$ProjectControllers = new ProjectsControllers("./Config/project.json");

        if(!isset(self::$twig))
        {
            self::InitTwig();
        }

        if(!isset(self::$router))
        {
            return new Router();
        }
        return self::$router;
    }

    /**
     * @param string $file Correspond à la view qu'il faut rendre. Ne doit pas contenir d'extension !
     * @param array $params Les paramètres a ajouter à la fonction render
     * @return void
     */
    public static function render(string $file, array $params = [], string $ext = ".html.twig")
    {
        if(!isset(self::$twig))
        {
            self::InitTwig();
        }
        echo self::$twig->render($file . $ext, $params);
    }

    public function work()
    {
        $url = $_SERVER['REQUEST_URI'] ?? "";
        if(str_starts_with($url,"/RemakePortfolio/"))
        {
            $url = substr($url,offset: 16);
        }

        $slug = substr($url,9);

        if(array_key_exists($url,$this->routes))
        {
            $result = $this->routes[$url];
            if(str_starts_with($result,"public") && !str_ends_with($result,".html"))
            {
                echo $result;
                if(str_ends_with($result, "txt"))
                    header("Content-Type: text/plain");
                else if(str_ends_with($result, "ico"))
                    header("Content-Type: image/vnd.microsoft.icon");

                readfile(__DIR__ . "/../" . $result);
                exit;
            }
            include $result;
        }
        elseif(str_starts_with($url,"/Projets/") && self::$ProjectControllers->isInProjects($slug))
        {
            if($url == "/Projets/")
            {
                header("Location: SylverService");
                exit();
            }
            self::$ProjectControllers->show($slug);
        }
        else
        {
//            http_response_code(404);
//            self::$ProjectControllers->nothing($url);
            self::render("error/error", [
                "message" => "l'URL $url n'existe pas",
                "title" => "On dirait que vous vous êtes perdu xD"
            ]);
        }

    }

    public function serve(string $pattern, bool $preserveExt = false)
    {
        $files = [];

        foreach(glob($pattern) as $fichier)
        {
            $name = basename($fichier);
            //sans extension
            if(!$preserveExt)
                $nameFinal = substr($name,0,-4);
            else
                $nameFinal = $name;

            if($nameFinal == "index")
            {
                $nameFinal = "";
            }
            $t = '/' . $nameFinal;
            $files[$t] = $fichier;
        }

        $this->setMany($files);
    }
}
?>