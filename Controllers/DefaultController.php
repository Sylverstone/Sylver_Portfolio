<?php

namespace Controllers;

require_once 'vendor/autoload.php';
require_once "Class/Route.php";
require_once "Class/BaseController.php";
require_once "func/sort.php";
require_once "Services/MailService.php";

use Class\BaseController;
use Class\Route;
use Class\Router;
use JetBrains\PhpStorm\FileReference;
use Services\MailService;
use function sortProject;

class DefaultController extends BaseController
{

    public string $name = "salut";

    public static function getJson(#[FileReference] string $path): array {
        $content = file_get_contents($path, true);
        if(!$content)
            return [];
        $json =json_decode($content, true);
        unset($json["\$schema"]);
        return $json;
    }

    #[Route(path: "/health")]
    public function healthcheck() : void
    {
        $host = strtolower($_SERVER['HTTP_HOST'] ?? "localhost");
        if(getenv("PHP_ENV") && $host !== "healthcheck.railway.app")
        {
            $url = $_SERVER['REQUEST_URI'] ?? '/';
            Router::render404($url);
            exit;
        }
        http_response_code(200);
        header('Content-type: application/json; charset=utf-8');
        header('X-Robots-Tag: noindex, nofollow');
        echo json_encode(["health" => "check"], JSON_UNESCAPED_UNICODE);
    }

    #[Route(path: "/", alias: "home")]
    public function index() : void
    {
        try {
            $competences = $this->getJson( __DIR__ . "/../Config/competences.json");
            $projets = $this->getJson(__DIR__ . "/../Config/projects.json");
            $reseaux = $this->getJson(__DIR__ . "/../Config/reseaux.json");

            sortProject($projets);
            $newArray = [];
            $idToString = [
                "PERSO" => "PROJET PERSO",
                "PRO" => "PROJET PRO",
                "PHARE" => "PROJET PHARE"
            ];

            foreach ($projets as $url => $projet) {
                $projet["path"] = $url;
                if(!array_key_exists($idToString[$projet["categorie"]], $newArray)){
                    $newArray[$idToString[$projet["categorie"]]] = [];
                }
                //ajout
                $newArray[$idToString[$projet["categorie"]]][] = $projet;
            }

            $this->render("pages/index.html.twig",[
                "competences" => $competences,
                "projets" => $newArray,
                "reseaux" => $reseaux
            ]);

            return;
        }
        catch (\Exception $e)
        {
            $this->renderError($e);
        }

    }

    #[Route(path: "/mail", methods: ["POST"], alias: "send_mail")]
    public function send_mail()
    {
        MailService::send_mail();
    }
}