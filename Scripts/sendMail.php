<?php

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../Controllers/Router.php';

    function debug_to_console($data) {
        $output = $data;
        if (is_array($output))
            $output = implode(',', $output);

        echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
    }

    $env = [];
    if(file_exists(__DIR__ . "/../.env"))
        $env = parse_ini_file(__DIR__ . "/../.env");

    if(!(
        !empty($_POST["Email"]) &&
        !empty($_POST["Objet"]) && 
        !empty($_POST["Message"])
        )
    )
    {
        echo "exit mail";
        exit;
    }

    try
    {
        $Email = $_POST["Email"];
        $Objet = "Portfolio mail - " . $_POST["Objet"];
        $Message = $_POST["Message"];
        $name = $_POST["name"];

        $resend = Resend::client($env["RESEND_KEY"] ?? $_ENV["RESEND_KEY"]);

        $resend->emails->send([
            "from" => "$name - $Email <contact@contact.sylvio-pelagemaxime.fr>",
            "to" => ["contact@sylvio-pelagemaxime.fr"],
            "subject" => $Objet,
            "html" => $Message,
        ]);

        header("Location: /");
    }
    catch(Exception $e)
    {
//        echo $e;
        Router::render("error/error", [
            "title" => "Une erreur est survenue lors de l'envoi du mail",
            "message" => ""
        ]);
    }
