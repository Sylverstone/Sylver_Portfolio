
<?php
    require_once __DIR__ . "/../Template/Partie.php";
    $path = "/../../Images/" . $slug . "/";
    $fi = new FilesystemIterator(__DIR__ . $path);
    $nb = iterator_count($fi);
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php include "./views/Template/head.php" ?>
        <meta name="description" content="<?=$projet["Desc"]?>">
        <title>Projet - <?=$projet["Title"]?></title>
        <link href="<?= BASE_URL ?>/STYLES/CSS/Projects/projetStyles.css" rel="stylesheet" />
    </head>
    <body>
        <?php
         Router::render("Template/nav");
        ?>
        <header>

            <img class="Illustration" src="<?= BASE_URL ?>/Images/Projet/<?=$slug?>.webp" alt="Illustration - <?=$projet["Title"]?>"/>
            <aside id="info">
                <h1 id="titre"><?=$projet["Title"]?></h1>
                <p id="date"><?=$projet["Date"]?></p>
            </aside>
        </header>
        <?php
        Router::render("Template/cvSelector");
        ?>
        <main>
            <section id="section_Apropos" class="startConditionProjet">
                <div class="Link">
                    <p>A propos</p>
                    <img src="/Images/PartieClose.png" alt="ok"/>
                </div>
                <aside class="Container">
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
                    <p class="content"><?=$projet["APropos"]?></p>
                </aside>
            </section>

            <!--$slug est une variable qui proviens du controlleur-->
            <section id="AperçuProjet" class="startConditionProjet">
                <div class="Link">
                    <p>Aperçu</p>
                    <img src="/Images/PartieClose.png" alt="ok"/>
                </div>
                <aside class="Container">
                    <?php for($i = 1; $i <= $nb; $i++): ?>
                        <article class="ImageApercu">
                            <img class = "Illustration" loading="lazy" src="<?= BASE_URL ?>/Images/<?=$slug?>/<?=$slug?><?=$i?>.png" alt="<?=$slug?> - Image" />
                            <?php if(array_key_exists($i - 1, $projet["Legendes"])) :?>
                                <figcaption><?=$projet["Legendes"][$i - 1]?></figcaption>
                            <?php endif;?>
                        </article>
                    <?php endfor ?>
                </aside>
            </section>

            <section id="EtapeProjet" class="startConditionProjet">
                <div class="Link">
                    <p>Etapes</p>
                    <img src="/Images/PartieClose.png" alt="ok"/>
                </div>
                <aside class="Container">
                    <?php for($i = 0; $i < count($projet["Etapes"]) - 1; $i = $i +2) : ?>
                        <div class="Etape">
                            <h2><?=$projet["Etapes"][$i]?></h2>
                            <p><?=$projet["Etapes"][$i + 1]?></p>
                        </div>
                    <?php endfor ?>
                </aside>
            </section>

            <section id="LienProjet" class="startConditionProjet">
                <div class="Link">
                    <p>Lien.s</p>
                    <img src="/Images/PartieClose.png" alt="ok"/>
                </div>
                <aside class="Container">
                    <?php $i = 0?>
                    <?php foreach($projet["Liens"] as $link) : ?>
                        <a target = "_blank" href="<?=$link?>"><?=$projet["NomLien"][$i]?></a>
                        <?php $i++?>
                    <?php endforeach ?>
                </aside>
            </section>
        </main>
        <?php include "./views/Template/footer.php" ?>
    </body>
    <?php include "./views/Template/Scripts.php" ?>
    <script type="module" src="<?= BASE_URL ?>/Scripts/Partie.js" defer></script>
    <script type="module" src="<?= BASE_URL ?>/Scripts/projet.js" defer></script>
    <script type="text/JavaScript" src="<?= BASE_URL ?>/Scripts/formCompteur.js" defer></script>
</html>