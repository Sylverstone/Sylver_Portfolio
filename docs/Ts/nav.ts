

const saved_src = localStorage.getItem("src");
console.log("src :",saved_src);
if (saved_src){
    var src = saved_src;
}else{
    var src = "images/icon_fond_ligh.png";
}
document.write(`
<nav>
    <div>
        <div>
            <img class="image_cv" src = "images/Sylvio_pelage_maxime.jpg" alt="Photo de Moi durant mes vacances en France"  onclick="affiche.call(this)">
            <p>Sylvio PELAGE--MAXIME</p>
        </div>
        <li class="change_theme_mobile"><img class="switch_theme" src = "images/icon_fond_ligh.png" alt = "image pour changer le fond" onclick="click_on_theme.call(this)"></li>
    </div>
    <a class="lien_home" href = "index.html" ><img  class="home" src="images/image_home.jpeg",alt = "image home"></a>
    <ul>
        <li><a rel = "noopener" href="https://1drv.ms/w/s!AhjW9V5CcBPW6WMUBLCR_gPiLAsJ?e=esfaCG" target = "_blank">Curriculum Vitae</a></li>
        <li class="Can_change_li"><a href="projet.html">projets</a></li> 
        <li><a href = "#">Recommandation</a></li>
        <li>
            <img class="switch_theme" src = ${src} alt = "image pour changer le fond" onclick = "click_on_theme.call(this)">
        </li>
        <li class = "tête_menu_compresser"> 
            <img class= "img_ligne" src="images/icon_menu3.jpeg" alt="Menu" onclick="click_sub_menu()">
            <ul class="sub_menu">
                <li><a rel = "noopener" href="https://1drv.ms/w/s!AhjW9V5CcBPW6WMUBLCR_gPiLAsJ?e=esfaCG" target="_blank">Curriculum Vitae</a></li>
                <li class="Can_change_li"><a href="projet.html" >projets</a></li>
                <li><a href="#">Recommandation</a></li>
            </ul>
        </li>
        
    </ul>
</nav>
`
);
console.log(document.querySelector(".switch_theme"))
let nav_ = document.querySelector('nav') as HTMLElement;
let nav_rect = nav_.getBoundingClientRect();
let nav_mobile = document.querySelector('.tête_menu_compresser') as HTMLLIElement | null;
let nav_mobile_rect = nav_mobile?.getBoundingClientRect() as DOMRect;
let isMobile : boolean = window.matchMedia("only screen and (max-width:600px)").matches;
let navHavechange : boolean = window.matchMedia("only screen and (max-width: 1040px").matches;
window.addEventListener("resize", (e : Event) =>{
    navHavechange = window.matchMedia("only screen and (max-width: 1040px").matches;
    isMobile = window.matchMedia("only screen and (max-width:600px)").matches;
    nav_rect = nav_.getBoundingClientRect();
})
let w : number = isMobile ? 70 : 50;
let img_cv = document.querySelector(".image_cv") as HTMLImageElement;
img_cv.style.display = "none";
console.log("wesh);");
if (img_cv instanceof HTMLImageElement){
    img_cv.onload = function() {
        if (img_cv instanceof HTMLImageElement){
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
            img_cv.style.display = "block";
        }
   } 
}

let nav = document.querySelector("nav");
if (nav instanceof HTMLElement){
    let div = nav.querySelector("div") as HTMLDivElement;
    div.style.alignItems = "center";
}

let page = document.location.pathname;
if (page.includes("projet.html")){
    let a = document.querySelectorAll(".Can_change_li");
    for (let i = 0; i < a.length; i++){
        a[i].innerHTML = `<a href="index.html">Accueil</a>`;
    }
    let home = document.querySelector(".home");
    if (home instanceof HTMLImageElement){
        home.style.transition = "all 1s ease"
        home.style.display = "block";
    }
}


const handle_click = (e : Event) => {
    let targetElement = e.target as HTMLElement | null;
    if (targetElement){
        let rel = targetElement.getAttribute("rel");
        if (rel === null){
            e.preventDefault();
            const body =  document.querySelector("body");
            if (body instanceof HTMLBodyElement){
                body.classList.add("bodyonchange");
                setTimeout(()=>{
                    body.classList.remove("bodyonchange");                    
                    // Trouver l'élément parent de type 'a'
                    while (targetElement && targetElement.tagName !== 'A') {
                        targetElement = targetElement.parentNode as HTMLElement | null;
                    }
                    if (targetElement instanceof HTMLAnchorElement){
                        console.log(targetElement);
                        const href = targetElement.getAttribute("href");
                        
                        if (href) {
                            window.open(href);
                        }
                    } 
                }, 500)
            }
        }
        
    }
    
}

if (nav instanceof HTMLElement){
    let a  = nav.querySelectorAll("a");
    a.forEach( lien => {
        lien.addEventListener("click", handle_click)
    })
}

