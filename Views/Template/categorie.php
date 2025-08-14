<?php if(!$persoProjectShowed && $projet["categorie"] == 0) : ?>
    <div id="ProjetPerso">
        <p>PROJET PERSO</p>
        <p class="CTA">Cliquez sur les images pour en savoir plus..</p>
    </div>
<?php elseif(!$phareProjectShowed && $projet["categorie"] == 2) : ?>
    <div id="ProjetPhare">
        <p>PROJET PHARE</p>
        <p class="CTA">Cliquez sur les images pour en savoir plus..</p>
    </div>
<?php elseif(!$proProjectShowed && $projet["categorie"] == 1) : ?>
    <div id="ProjetPRO">
        <p>PROJET PROFESSIONNEL</p>
        <p class="CTA">Cliquez sur les images pour en savoir plus..</p>
    </div>                           
<?php endif;?>