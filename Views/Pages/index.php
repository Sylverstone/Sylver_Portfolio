<?php
    include "./func/sort.php";
    $content = file_get_contents("./Config/competences.json",true);
    $competences = json_decode($content,true);

    $content = file_get_contents("./Config/project.json",true);
    $projets = json_decode($content,true);
    sortProject($projets);
    $proProjectShowed = false;
    $persoProjectShowed = false;
    $phareProjectShowed = false;
    $lastCat = null;
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php include "./Views/Template/head.php" ?>
    </head>
    <body>
        <header>
                <nav id="HomeNav">
                    <ul>
                        <li>
                            <a href="#APropos" onclick="scrollTOElement('#APropos');return false;">
                                <img src="Images/Icon/about.png" alt="Icon a propos" />
                                <figcaption>A propos</figcaption> 
                            </a>                            
                        </li>
                        <li>
                            <a href="#Projets" onclick="scrollTOElement('#Projets');return false;">
                                <img src="Images/Icon/book.png" alt="Icon a propos" />
                                <figcaption>Mes projets</figcaption> 
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onclick="scrollTOElement('#contact');return false;">
                                <img src="Images/Icon/phone.png" alt="Icon a propos" />
                                <figcaption>Me contacter</figcaption> 
                            </a>
                        </li>
                    </ul>
                </nav>
                <section id="SectionPP">
                    <div id="EnTete">
                        <img id="PP" alt="Sylvio PELAGE MAXIME" src="Images/Sylvio.webp" />
                        <p>Développeur de jeux vidéo</p>
                    </div>
                    <p>
                        Je développe des jeux vidéos et j'adore ce que je fais :)
                    </p>
                </section>
        </header>
        <main>
            <section id="APropos">
                <h1>Pelage Maxime Sylvio</h1>
                <p>
                    Je suis actuellement étudiant en <b>Informatique Graphique</b> au Puy-en-Velay (43000).<br><br>
                    Passionné par la <b>programmation</b> et les <b>jeux vidéo</b>, je souhaite me spécialiser dans le <b>développement de jeux vidéo</b>.<br><br>
                    En parallèle de mes études, je propose mes services sur <a href="https://www.fiverr.com/s/zWNELed" target="_blank"><b>Fiverr</b></a> pour développer des <a href="https://www.fiverr.com/s/yv6DblG" target="_blank"><b>bots Discord</b></a> et des <a href="https://www.fiverr.com/s/xXL37kD" target="_blank"><b>sites vitrines</b></a>, afin de me faire un complément de revenue.<br /><br />
                    <i>Je suis actuellement à la recherche d’un <b>stage</b> en <b>développement de jeux vidéo</b> ou toutes autres opportunitées intéréssantes pour <b>Avril 2026</b>.</i>

                </p>
            </section>
            <section id="Competences">
                <?php foreach($competences as $competence) : ?>
                    <div class="Competence">
                        <img class="Illustration" src="Images/Icon/<?=$competence["Illustration"]?>" alt="<?= $competence["Nom"]?>"/>
                        <p class="titre"><?= $competence["Nom"]?></p>
                        <p class="subTitle"><?=$competence["subTitle"]?></p>
                        <p class="phrase"><?= $competence["miniTitre"]?></p>
                        <aside class="ImageCompetenceContainer">
                            <?php for($i = 0; $i < count($competence["Images"]); $i++) : ?>
                                <div>
                                    <img class="compImg" src="Images/Icon/<?=$competence['Images'][$i]?>" alt="Image compétence"/>
                                    <p><?=$competence["ImagesNames"][$i]?></p>
                                </div>
                            <?php endfor;?>
                        </aside>
                    </div>
                <?php endforeach ?>
            </section>
            <article id="ProjetAnnonce">
                <h2>MES PROJETS</h2>
            </article>
            <section id="Projets">
                <?php $keys = array_keys($projets) ?>
                <?php include "./Views/Template/project.php"?>
            </section>
        </main>
        <?php include "./Views/Template/footer.php"?>
        </body>
        <?php include "./Views/Template/Scripts.php"?>
        <script type="text/JavaScript" src="Scripts/visible.js"></script>
        <script type="text/JavaScript" src="Scripts/formCompteur.js"></script>                 
</html>