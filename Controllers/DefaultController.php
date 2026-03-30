<?php

namespace Controllers;

use Class\Route;
require_once 'vendor/autoload.php';
require_once "func/sort.php";

use Twig\Environment;
class DefaultController
{
    private Environment $twig;

    public string $name = "salut";

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    #[Route(path: "/")]
    public function index() : void
    {
        $content = file_get_contents("./Config/competences.json",true);
        $competences = json_decode($content,true);



        $content = file_get_contents("./Config/project.json",true);
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

    #[Route(path: "/test/:id")]
    public function test() : void
    {
        echo "la rue ";
    }


    #[Route(path: "/test/:id/ok/:paid")]
    public function test2(string $id, string $paid) : void
    {
        echo "C'EST NOUS LA TEAM <br />";
        echo $id . " " . $paid . "<br />";
    }
    #[Route(path: "/mail", methods: ["POST"])]
    public function sendMail()
    {

    }
}