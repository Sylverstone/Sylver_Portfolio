
<footer>
    <section id="reseaux">
        <a target="_blank" href="https://github.com/Sylverstone/" title="Github">
            <img src="<?=BASE_URL?>/Images/Icon/GitHUB.png" alt="GitHub - Icon"/>
        </a>
        <a target="_blank" href="https://linkedin.com/in/sylviopelagemaxime" title="LinkedIn">
            <img src="<?=BASE_URL?>/Images/Icon/linkedIn.png" alt="LinkedIn - Icon" />
        </a>
        <a target="_blank" href="https://gitlab-lepuy.iut.uca.fr/sypelagema" title="GitLab">
            <img src="<?= BASE_URL ?>/Images/Icon/gitlab.svg" alt="GitLab - Icon"/>
        </a>
        <a target="_blank" href="https://www.fiverr.com/s/WErB50x" title="Fiverr">
            <img src="<?= BASE_URL ?>/Images/Icon/fiverr.png" alt="Fiverr - Icon"/>
        </a>
        <a target="_blank" title="Gamejolt" href="https://gamejolt.com/@scylverstone/games">
            <img src="<?= BASE_URL ?>/Images/Icon/Gamejolt.svg" alt="Gamejolt - Icon">
        </a>
    </section>
    <aside id="contact" onclick="toogleForm(this)" title="Montrer le formulaire de contact">
        <p>CONTACT</p>
        <img src="<?=BASE_URL?>/Images/ContactButtonIconDown.png" alt="Icone contact" />
    </aside>
    <form id="formAccueil" action="<?=BASE_URL?>/Scripts/sendMail.php" method="POST">
        <article class="name-email">
            <div class="input-container">
                <input type="text" name="name" id="name" required placeholder=" " autocapitalize="characters" autocomplete="additional-name">
                <label for="name">Nom</label>
            </div>
            <div class="input-container">
                <input type="email" name="Email" id="Email" autocomplete="email" required placeholder=" ">
                <label for="Email">Email</label>
            </div>
        </article>
        <div class="input-container">
            <input type="text" name="Objet" id="Objet" placeholder=" " required>
            <label for="Objet">Objet</label>            
        </div>
        <div class="textarea-container">
            <textarea name="Message" placeholder=" " id="Message" required maxlength="500" ></textarea>
            <label for="Message">Message</label>
            <span id="compteur">0/500</span>
        </div>
        <input type="submit" value="ENVOYER"/>
    </form>
    <p id="signature">Fait main - Sylvio</p>
</footer>