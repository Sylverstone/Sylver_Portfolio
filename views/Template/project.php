<?php for($i = 0; $i < count($projets); $i++) : ?>
    <?php $projet = $projets[$keys[$i]]; ?>
        <?php include "./views/Template/categorie.php" ?>
    <?php if($projet["categorie"] == 0 && !$persoProjectShowed) : ?>
        <aside id="ProjetPersoContainer">
        <?php $lastCat = 0; $persoProjectShowed = true ?>
    <?php elseif($projet["categorie"] == 1 && !$proProjectShowed) : ?>
        <aside id="ProjetProContainer">
        <?php $lastCat = 1; $proProjectShowed = true; ?>
    <?php elseif($projet["categorie"] == 2 && !$phareProjectShowed) : ?>
        <aside id="ProjetPhareContainer">
        <?php $lastCat = 2; $phareProjectShowed = true; ?>
    <?php endif ?>

    <div class="Projet">                        
        <aside class="ImgProjet">
            <a href="Projets/<?=$keys[$i]?>" alt="Lien vers le projet : <?=$keys[$i]?> ">
                <img class="Illustration" loading="lazy" src="Images/Projet/<?=$keys[$i]?>.webp" alt="$<?=$keys[$i]?> - Image" project="<?=$keys[$i]?>" />
            </a>
            <p><?=$projet['Title']?></p>
        </aside>
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
        <span class="DescriptionProjet"><?=$projet["Desc"]?></span>
        <article class="contribution">
            <p>Ma contribution :</p>
            <ul>
                <?php foreach($projet["Contributions"] as $contribution) : ?>
                    <li><?= $contribution ?></li>
                <?php endforeach?>
            </ul>
            <span class="Date"><?= $projet["Date"]?></span>
        </article>
    </div>

    <?php if($i + 1 < count($keys) && $projets[$keys[$i + 1]]["categorie"] != $lastCat) : ?>
        </aside>
    <?php endif?>
<?php endfor?>