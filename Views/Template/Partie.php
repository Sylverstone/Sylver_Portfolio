<?php
function partie(string $nom,string $id)
{
    echo "
    <aside class=\"Partie\" id=\"$id\">
        <p>$nom</p>
        <img src=\"" . BASE_URL . "/Images/PartieClose.png\" alt=\"$nom\"/>
    </aside>
    ";
}

?>
