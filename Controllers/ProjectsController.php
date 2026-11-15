<?php

namespace Controllers;

require_once "Class/BaseController.php";
require_once "Class/Route.php";

use Class\BaseController;
use Class\Route;
use FilesystemIterator;

class ProjectsController extends BaseController
{
    #[Route("/Projets/:name", alias: "app_projects" )]
    public function detail(string $name) : void
    {
        try {
            $Projects = DefaultController::getJson(__DIR__ . "/../Config/projects.json");
            $reseaux = DefaultController::getJson(__DIR__ . "/../Config/reseaux.json");

            if(!array_key_exists($name, $Projects)) {

                http_response_code(404);
                $this->render("pages/error/error.html.twig", [
                    "message" => "Le projet " . $name . " n'existe pas.",
                    "title" => "Projet inexistant"
                ]);
                return;
            }

            $path = "/../Images/" . $name . "/";
            $fi = new FilesystemIterator(__DIR__ . $path);
            $nbImage = iterator_count($fi);

            $projet = $Projects[$name];
            $projet["slug"] = $name;

            $this->render("pages/projects/project.html.twig", [
                "projet" => $projet,
                "nb_image" => $nbImage,
                "reseaux" => $reseaux
            ]);
            return;
        }
        catch (\Exception $e)
        {
            $this->renderError($e);
        }
    }
}