
<footer>
    <section id="reseaux">
        <a target="_blank" href="https://github.com/Sylverstone/" title="Github">
            <img src="<?=BASE_URL?>/Images/Icon/GitHUB.png" alt="GitHub - Icon"/>
        </a>
        <a target="_blank" href="https://linkedin.com/in/sylviopelagemaxime" title="LinkedIn">
            <img src="<?=BASE_URL?>/Images/Icon/linkedIn.png" alt="LinkedIn - Icon" />
        </a>
        <a target="_blank" href="https://https://gitlab-lepuy.iut.uca.fr/sypelagema" title="GitLab">
            <img src="<?= BASE_URL ?>/Images/Icon/gitlab.svg" alt="GitLab - Icon"/>
        </a>
        <a target="_blank" href="https://www.fiverr.com/s/WErB50x" title="Fiverr">
            <img src="<?= BASE_URL ?>/Images/Icon/fiverr.png" alt="Fiverr - Icon"/>
        </a>
    </section>
    <aside id="contact" onclick="toogleForm(this)" title="Montrer le formulaire de contact">
        <p>CONTACT</p>
        <img src="<?=BASE_URL?>/Images/ContactButtonIconDown.png" alt="Icone contact" />
    </aside>
    <form id="formAccueil" action="<?=BASE_URL?>/Scripts/sendMail.php" method="POST">
        <input type="email" name="Email" placeholder="Email" id="Email" required>
        <input type="text" name="Objet" placeholder="Objet" id="Objet" required>
        <textarea name="Message" placeholder="Votre message :)" required></textarea>
        <input type="submit" value="ENVOYER"/>
    </form>
    <p id="signature">Fait main - Sylvio</p>
</footer>