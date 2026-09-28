<?php

namespace Controllers;

require_once "Class/Route.php";
require_once 'vendor/autoload.php';
require_once "func/sort.php";
require_once "Services/MailService.php";

use \Class\Route;
use Services\MailService;

use Twig\Environment;

class DefaultController
{
    private Environment $twig;

    public string $name = "salut";

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    #[Route(path: "/", alias: "home")]
    public function index() : void
    {
        $content = file_get_contents("./Config/competences.json",true);
        $competences = json_decode($content,true);

        $content = file_get_contents("./Config/projects.json",true);
        $projets = json_decode($content,true);

        \sortProject($projets);
        $newArray = [];
        $idToString = [
            0 => "PROJET PERSO",
            1 => "PROJET PRO",
            2 => "PROJET PHARE"
        ];
        foreach ($projets as $url => $projet) {
            $projet["path"] = $url;
            if(!array_key_exists($idToString[$projet["categorie"]], $newArray)){
                $newArray[$idToString[$projet["categorie"]]] = [];
            }
            //ajout

            $newArray[$idToString[$projet["categorie"]]][] = $projet;
        }

        echo $this->twig->render("pages/index.html.twig", [
            "competences" => $competences,
            "projets" => $newArray
        ]);
    }

    #[Route(path: "/mail", methods: ["POST"], alias: "send_mail")]
    public function send_mail()
    {
        MailService::send_mail();
    }
}