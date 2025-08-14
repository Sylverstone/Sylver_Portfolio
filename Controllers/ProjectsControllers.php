<?php

class ProjectsControllers 
{
    //Tableau provenant d'un fichier json avec toutes les données des projets ranger par id
    private array $Projects;

    public function __construct(string $filePath)
    {
        $content = file_get_contents($filePath,true);
        $this->Projects = json_decode($content,true);
    }

    public function isInProjects(string $key)
    {
        return array_key_exists($key,$this->Projects);
    }
    public function show(string $slug)
    {
        if(!array_key_exists($slug,$this->Projects)) return $this->nothing("/Projets/$slug");
        $projet = $this->Projects[$slug];
        include "./Views/Projects/project.php";
    }

    public function home()
    {
        include "./Views/Pages/index.php";
    }

    public function nothing($path)
    {
        $url = $path;
        include "./Views/404/notFound.php";
    }
}
?>