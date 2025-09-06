<?php


    function debug_to_console($data) {
        $output = $data;
        if (is_array($output))
            $output = implode(',', $output);

        echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
    }

    $env = [];
    if(file_exists(__DIR__ . "/../.env"))
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
        $Email = $_POST["Email"];
        $Objet = "Portfolio mail - " . $_POST["Objet"];
        $Message = $_POST["Message"];
        $name = $_POST["name"];

        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->SMTPAuth = true;

        $mail->Host = "smtp.gmail.com";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; 

        debug_to_console($_ENV["USER"] . " " . $_ENV["MDP"]);

        $mail->Username = $env["USER"] ?? $_ENV["USER"];
        $mail->Password = $env["MDP"] ?? $_ENV["MDP"];

        $mail->setFrom($Email, $name);
        $mail->addAddress("contact@sylvio-pelagemaxime.fr","Sylvio");

        $mail->Subject = $Objet;
        $mail->Body = $Message;

        $mail->CharSet="UTF-8";
        $mail->Encoding="base64";
        $mail->send();


        header("Location: /");
    }
    catch(Exception $e)
    {
        echo $e;
        echo "Une erreur à eu lieu";
    }

?>