<?php


    $env = parse_ini_file(__DIR__ . "/../.env");

    require __DIR__ . "/../vendor/autoload.php";
    
    use PHPMailer\PHPMailer\PHPMailer;

    if(!(
        isset($_POST["Email"]) && 
        isset($_POST["Objet"]) && 
        isset($_POST["Message"]) &&
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
        $to = "sylvio8.pm@gmail.com";
        $Email = $_POST["Email"];
        $Objet = "Portfolio mail - " . $_POST["Objet"];
        $Message = $_POST["Message"];

        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->SMTPAuth = true;

        $mail->Host = "smtp.gmail.com";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->Username = $env["USER"] ?? $_ENV["USER"];
        $mail->Password = $env["MDP"] ?? $_ENV["MDP"];

        $mail->setFrom($Email, "Inconnu");
        $mail->addAddress($env["USER"],"Sylvio");

        $mail->Subject = $Objet;
        $mail->Body = $Message;

        $mail->CharSet="UTF-8";
        $mail->Encoding="base64";
        $mail->send();


        header("Location: /");
    }
    catch(Exception $e)
    {
        echo "Une erreur à eu lieu";
    }

?>