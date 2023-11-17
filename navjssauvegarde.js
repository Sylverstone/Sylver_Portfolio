document.write(`
<nav>
    <div>
        <img class="image_cv" src = "../images/Sylvio_pelage_maxime.jpg" alt="Photo de Moi durant mes vacances en France"  onclick="affiche.call(this)">
        <p>Sylvio PELAGE--MAXIME</p>
    </div>
    <ul>
        <li><a rel = "noopener"href="https://1drv.ms/w/s!AhjW9V5CcBPW6WMUBLCR_gPiLAsJ?e=KikJdK", target="_blank" >Curriculum Vitae</a></li>
        <li><a href="projet.html">projets</a></li>
        <li><a href = "#">Mes experiences</a></li>
        <li class = "tête_menu_compresser"> 
            <a href="#"><img class= "img_ligne" src="../images/icon_menu.jpeg" alt="Menu" onclick="click_sub_menu()"></a>
            <ul class="sub_menu">
                <li><a rel = "noopener"href="https://1drv.ms/w/s!AhjW9V5CcBPW6WMUBLCR_gPiLAsJ?e=KikJdK", target="_blank">Curriculum Vitae</a></li>
                <li><a href="#">projets</a></li>
                <li><a href="#">Mes experiences</a></li>
            </ul>
        </li>
    </ul>
</nav>
`
);
const isMobile = window.matchMedia("only screen and (max-width:600px)").matches;
let w = isMobile ? 70 : 50;
let img_cv = document.querySelector(".image_cv");

img_cv.onload = function() {
    console.log(img_cv)
    console.log(img_cv.style.height, img_cv.style.width)
    const width = img_cv.naturalWidth;
    const height = img_cv.naturalHeight;
    img_cv.style.transition = "none";
    let add = w * height / width;
    add = Math.floor(add);
    img_cv.style.height = add.toString()+ 'px';
    img_cv.style.width = w.toString() + 'px';
    console.log(img_cv.style.height,img_cv.style.width,"f");
    console.log("finish resize");
}



