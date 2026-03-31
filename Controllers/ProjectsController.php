<?php

namespace Controllers;

use Class\Route;
use FilesystemIterator;
use Twig\Environment;

class ProjectsController
{
    private Environment $twig;
    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    #[Route("/Projets/:name", alias: "app_projects" )]
    public function detail(string $name) : void
    {
        try {

            $content = file_get_contents("./Config/projects.json",true);
            $Projects = json_decode($content,true);

            $path = "/../Images/" . $name . "/";
            $fi = new FilesystemIterator(__DIR__ . $path);
            $nbImage = iterator_count($fi);

            $projet = $Projects[$name];
            $projet["slug"] = $name;


            echo $this->twig->render("pages/projects/project.html.twig", [
                "projet" => $projet,
                "nb_image" => $nbImage]);
        }
        catch (\Exception $e)
        {
            echo $this->twig->render("pages/404/notFound.html.twig", [
                "message" => "Le projet " . $name . " n'existe pas."
            ]);
        }
    }
}