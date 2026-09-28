<?php

namespace Services;

use Class\Router;

require __DIR__ . '/../vendor/autoload.php';

class MailService
{

    public static function send_mail(): void
    {
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

            $resend = \Resend::client($_ENV["RESEND_KEY"]);

            $sender = $_ENV["SENDER_MAIL"];
            $receiver = $_ENV["RECEIVER_MAIL"];

            $resend->emails->send([
                "from" => "$name - $Email <$sender>",
                "to" => [$receiver],
                "subject" => $Objet,
                "html" => $Message,
            ]);

            header("Location: /");
            exit;
        }
        catch(\Exception $e)
        {
        echo $e;
            Router::render("pages/error/error", [
                "title" => "Une erreur est survenue lors de l'envoi du mail",
                "message" => ""
            ]);
        }
    }
}