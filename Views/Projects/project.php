
<?php
    require_once __DIR__ . "/../Template/Partie.php";
    $path = "/../../Images/" . $slug . "/";
    $fi = new FilesystemIterator(__DIR__ . $path);
    $nb = iterator_count($fi);
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php include "./Views/Template/head.php"?>
        <link href="<?= BASE_URL ?>/STYLES/CSS/Projects/projetStyles.css" rel="stylesheet" />
    </head>
    <body>
        <header>
            <nav id="HomeNav">
                <ul>
                    <li>
                        <a href="#AProposProjet" onclick="scrollTOElement('#AProposProjet');return false;">
                            <img src="<?= BASE_URL ?>/Images/Icon/about.png" alt="Icon a propos" />
                            <figcaption>A propos</figcaption> 
                        </a>                            
                    </li>
                    <li>
                        <a href="#Aperçu" onclick="scrollTOElement('#Aperçu');return false;">
                            <img src="<?= BASE_URL ?>/Images/Icon/ImageIcon.png" alt="Icon a propos" />
                            <figcaption>Aperçu</figcaption> 
                        </a>
                    </li>
                    <li>
                        <a href="#Etapes" onclick="scrollTOElement('#Etapes');return false;">
                            <img src="<?= BASE_URL ?>/Images/Icon/EtapesIcon.png" alt="Icon a propos" />
                            <figcaption>Etapes</figcaption> 
                        </a>
                    </li>
                    <li>
                        <a href="#Lien" onclick="scrollTOElement('#Lien');return false;">
                            <img src="<?= BASE_URL ?>/Images/Icon/lienIcon.png" alt="Icon a propos" />
                            <figcaption>Liens</figcaption> 
                        </a>
                    </li>
                </ul>
            </nav>            
            <img src="<?= BASE_URL ?>/Images/Projet/<?=$slug?>.png" />      
            <aside id="info">
                <h1 id="titre"><?=$projet["Title"]?></h1>
                <p id="date"><?=$projet["Date"]?></p>
            </aside>
        </header>

        <a id="backHome" href="/">
            <img src="<?= BASE_URL ?>/Images/Icon/home.svg" alt="Accueil - Icon"/>
        </a>
        <main>
            <?php partie("A propos","AProposProjet"); ?>            
            <section id="section_Apropos">
                <div class="CompContainer">
                    <?php foreach($projet["Comp"] as $key => $comp) : ?>
                        <?php if($projet["Helps"][$key] != "") : ?>
                            <span class="Comp-<?=$comp?>" onclick="help(this,10)">
                                <?=$comp?>
                                &#9432;
                                <div class="tips">
                                    <?=$projet['Helps'][$key]?>
                                </div>
                            </span>
                        <?php else : ?>
                            <span class="Comp-<?=$comp?>">
                                <?=$comp?>
                            </span>
                        <?php endif; ?>
                    <?php endforeach?>
                </div>
                <p><?=$projet["APropos"]?></p>
            </section>

            <!--$slug est une variable qui proviens du controlleur-->
            <?php partie("Aperçu","Aperçu"); ?>
            <section id="AperçuProjet">
                <?php for($i = 1; $i <= $nb; $i++): ?>
                    <article class="ImageApercu">
                        <img class = "Illustration" src="<?= BASE_URL ?>/Images/<?=$slug?>/<?=$slug?><?=$i?>.png" alt="<?=$slug?> - Image" />
                        <figcaption><?=$projet["Legendes"][$i - 1]?></figcaption>
                    </article>
                <?php endfor ?>
            </section>

            <?php partie("Etapes","Etapes"); ?>
            <section id="EtapeProjet">
                <?php for($i = 0; $i < count($projet["Etapes"]) - 1; $i = $i +2) : ?>
                    <div class="Etape">
                        <h2><?=$projet["Etapes"][$i]?></h2>
                        <p><?=$projet["Etapes"][$i + 1]?></p>
                    </div>
                <?php endfor ?>
            </section>
            <?php partie("Lien.s","Lien"); ?>
            <section id="LienProjet">
                <?php $i = 0?>
                <?php foreach($projet["Liens"] as $link) : ?>
                    <a target = "_blank" href="<?=$link?>"><?=$projet["NomLien"][$i]?></a>
                    <?php $i++?>
                <?php endforeach ?>
            </section>
        </main>
        <?php include "./Views/Template/footer.php" ?>
    </body>
    <?php include "./Views/Template/Scripts.php"?>
    <script type="module" src="<?= BASE_URL ?>/Scripts/Partie.js" defer></script>
    <script type="module" src="<?= BASE_URL ?>/Scripts/projet.js" defer></script>
    <script type="text/JavaScript" src="<?= BASE_URL ?>/Scripts/formCompteur.js"></script>
</html>