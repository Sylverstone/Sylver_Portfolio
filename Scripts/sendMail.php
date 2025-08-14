<?php
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
        exit;
    }

    $to = "sylvio8.pm@gmail.com";
    $Email = $_POST["Email"];
    $Objet = "Portfolio mail - " . $_POST["Objet"];
    $Message = $_POST["Message"];

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    // Additional headers
    $headers[] = 'To: Boss <Sylvio.PelageMaxime@outlook.fr>';
    $headers[] = "From: Portfolio User <$Email>";

    $message = "
        <h1>Mail Automatique</h1>
        <p>Message :<br/>$Message</p>
    ";
    
    mail($to,$Objet,$message,implode("\r\n",$headers));
    header("Location: ");
?>