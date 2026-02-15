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
        <meta name="description" content="C'est mon portfolio, j'y parle de moi, de mes projets, et possiblement de mon actualité">
        <title>Sylvio - Portfolio</title>
        <?php include "./views/Template/head.php" ?>
    </head>
    <body>
        <header>
                <nav id="HomeNav">
                    <ul>
                        <li>
                            <a href="/#APropos" onclick="scrollTOElement('#APropos');return false;">
                                <img src="Images/Icon/about.png" alt="Icon a propos" />
                                <figcaption>A propos</figcaption> 
                            </a>                            
                        </li>
                        <li>
                            <a href="/#Projets" onclick="scrollTOElement('#Projets');return false;">
                                <img src="Images/Icon/book.png" alt="Icon a propos" />
                                <figcaption>Mes projets</figcaption> 
                            </a>
                        </li>
                        <li>
                            <a href="/#contact" onclick="scrollTOElement('#contact');return false;">
                                <img src="Images/Icon/phone.png" alt="Icon a propos" />
                                <figcaption>Me contacter</figcaption> 
                            </a>
                        </li>
                    </ul>
                </nav>
                <section id="SectionPP">
                    <div id="EnTete">
                        <aside id="Info">
                            <p class="lightText" id="intro">Salut ! Je suis</p>
                            <p id="nom">Pelage Maxime<br/>Sylvio</p>
                            <p id="metier">Développeur de jeux vidéo</p>
                            <a href="/#contact" class="NiceButton" onclick="scrollTOElement('#contact'); return false;">Contactez-moi </a>
                        </aside>
                        <aside id="Image">
                            <img id="PP" alt="Icon - header" src="Images/Isagi.webp">
                        </aside>
<!--                        <p>Développeur de jeux vidéo</p>-->
<!--                        <p class="lightText text-centered">-->
<!--                            Je développe des jeux vidéo et j'adore ce que je fais :)-->
<!--                        </p>-->
<!--                        <img id="PP" alt="Sylvio PELAGE MAXIME" src="Images/isagi.jpg" />-->
                    </div>
                </section>
                <aside id="link">
                    <a target="_blank" href="https://github.com/Sylverstone/" title="Github">
                        <img src="<?=BASE_URL?>/Images/Icon/github.svg" alt="GitHub - Icon"/>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/sylviopelagemaxime" title="LinkedIn">
                        <img src="<?=BASE_URL?>/Images/Icon/linkedin.svg" alt="LinkedIn - Icon" />
                    </a>
                    <a target="_blank" href="https://gitlab-lepuy.iut.uca.fr/sypelagema" title="GitLab">
                        <img src="<?= BASE_URL ?>/Images/Icon/gitlab.svg" alt="GitLab - Icon"/>
                    </a>
                    <a target="_blank" href="https://www.fiverr.com/s/WErB50x" title="Fiverr">
                        <img src="<?= BASE_URL ?>/Images/Icon/fiverr.svg" alt="Fiverr - Icon"/>
                    </a>
                    <a target="_blank" title="Gamejolt" href="https://gamejolt.com/@scylverstone/games">
                        <img src="<?= BASE_URL ?>/Images/Icon/Gamejolt.svg" alt="Gamejolt - Icon">
                    </a>
                </aside>
        </header>
        <main>
            <section id="APropos"> 
                <h1>A propos de moi</h1>
<!--                <p>-->
<!--                    Je suis actuellement étudiant en <b>Informatique Graphique</b> au Puy-en-Velay (43000).<br><br>-->
<!--                    Passionné par la <b>programmation</b> et les <b>jeux vidéo</b>, je souhaite me spécialiser dans le <b>développement de jeux vidéo</b>.<br><br>-->
<!--                    En parallèle de mes études, je propose mes services sur <a href="https://www.fiverr.com/s/zWNELed" target="_blank"><b>Fiverr</b></a> pour développer des <a href="https://www.fiverr.com/s/yv6DblG" target="_blank"><b>bots Discord</b></a> et des <a href="https://www.fiverr.com/s/xXL37kD" target="_blank"><b>sites vitrines</b></a>, afin de me faire un complément de revenue.<br /><br />-->
<!--                    <i>Je suis actuellement à la recherche d’un <b>stage</b> en <b>développement de jeux vidéo</b> ou toutes autres opportunitées intéréssantes pour <b>Avril 2026</b>.</i>-->
<!--                </p>-->
                <p>
                    Je suis actuellement étudiant en <b>Informatique Graphique</b> au Puy-en-Velay et j'aspire à devenir <b>développeur de jeux vidéo</b>.<br/><br/>
                    Généralement, je développe mes projets avec <b>Unreal Engine 5</b>, en combinant <b>Blueprint</b> et <b>C++</b>, mais j'ai également une expérience sur <b>Unity</b>, notamment en réalité virtuelle.<br/><br/>
                    En plus du jeu vidéo, j'ai également une appétence pour le <b>domaine du web</b>, plus particulièrement <b>le back-end</b>.<br/>C'est pourquoi j'ai développé mon portfolio moi-même.<br/><br/>
                    Si vous voulez en <b>savoir plus</b> sur les <b>jeux vidéo</b> que j'ai pu créer, rendez-vous sur mon <a target="_blank" href="https://gamejolt.com/@scylverstone/games"><b>Gamejolt</b></a>.<br/>
                    Rendez-vous sur mon <a href="https://github.com/Sylverstone/" target="_blank"><b>GitHub</b></a> afin d'en savoir plus sur mes projets :)
                </p>
            </section>
            <section id="Competences">
                <?php foreach($competences as $competence) : ?>
                    <div class="Competence" fade>
                        <article class="SimpleContainer">
                            <img class="Illustration" src="Images/Icon/<?=$competence["Illustration"]?>" alt="<?= $competence["Nom"]?>"/>
                            <p class="titre"><?= $competence["Nom"]?></p>
                            <p class="subTitle"><?=$competence["subTitle"]?></p>
                            <p class="phrase"><?= $competence["miniTitre"]?></p>
                            <aside class="CompetenceContainer">
                                <p>
                                    <?php for($i = 0; $i < count($competence["ImagesNames"]) - 1; $i++) : ?>
                                        <?=$competence["ImagesNames"][$i]?>,
                                    <?php endfor;?>
                                    <?=$competence["ImagesNames"][count($competence["ImagesNames"]) - 1]?>
                                </p>
                            </aside>
                            <?php if(array_key_exists("miniTitre2", $competence)) : ?>
                                <p class="phrase"><?=$competence["miniTitre2"]?></p>
                                <?php for($i = 0; $i < count($competence["content2"]); $i++) : ?>
                                    <p class="text-column"><?=$competence["content2"][$i]?> </p>
                                <?php endfor;?>
                            <?php endif; ?>
                        </article>
                    </div>
                <?php endforeach ?>
            </section>
            <section id="Projets">
                <?php $keys = array_keys($projets) ?>
                <?php include "./views/Template/project.php" ?>
            </section>
        </main>
        <?php include "./views/Template/footer.php" ?>
        </body>
        <?php include "./views/Template/Scripts.php" ?>
        <script type="text/JavaScript" src="Scripts/visible.js" defer></script>
        <script type="text/JavaScript" src="Scripts/formCompteur.js" defer></script>                 
</html>