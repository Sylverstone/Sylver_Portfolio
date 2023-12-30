let nav_is_out = false;
console.log("ldd")
const save_theme = localStorage.getItem("theme");
if (save_theme) {
    if (save_theme === "dark") {
        var theme_mod_ligh = false;
    }else{
        var theme_mod_ligh = true;
    }
}

let all = [] as Array<HTMLElement>; /*tableau qui servira a contenir quasiment tout les elements de la page*/
try{
    let body  = document.querySelector("body");
    if (body instanceof HTMLBodyElement){
        let al : NodeListOf<HTMLElement>  = body.querySelectorAll("*"); /*selectionne tout les elements*/
        all = Array.from(al);
        for (let elt of all){ /* va mettre a tout les elements de all une transition en opacité*/
            elt.style.transition = "opacity 1s ease";
            elt.style.opacity = "0";
        }
    }    
} catch(err){
    console.log(err);
}

//----------------------------------------------------------------witdh du aside

let aside = document.querySelector("aside") as HTMLElement | null;
let rect_aside : DOMRect;
if (aside){
    rect_aside = aside.getBoundingClientRect();
}
window.addEventListener("resize", () =>{
    if (aside){
        rect_aside = aside.getBoundingClientRect();
    }

});

//----------------------------------------------------------------Gère Le slider
let scrool_amount : number = 0;
const slider = document.querySelector(".projet_apercu")
let souris_down : boolean;
let first_time;
let startX;
let scrool_actu;
let scroll_time : number;
let count_child
let was_max;
let max_scrool : number;
if (slider instanceof HTMLElement){
    slider.style.transition = "all 1s ease";
    souris_down = false;
    first_time = false;
    startX  = 0;
    scrool_actu  = 0;
    scroll_time  = 0;
    count_child  = slider.querySelectorAll('div').length;
    was_max  = false;
    max_scrool = count_child - 1;
}


const event_scrool = (e : MouseEvent | TouchEvent) => {
    e.preventDefault();    
    
    if (souris_down) return;
        // Calcul de la largeur de défilement    
    const slider = document.querySelector('.projet_apercu') as HTMLElement;
    const width_slider = slider.offsetWidth;
    let mouseXrel : number = 0;
    if (e instanceof TouchEvent) {
        let touch = e.touches[0];
        mouseXrel = touch.clientX - slider.offsetLeft;
    } else{
        mouseXrel  = e.pageX - slider.offsetLeft;
    }
    console.log(scroll_time)
    
    if (mouseXrel <= width_slider/2 && scroll_time > 1){
        
        scroll_time -= 1;
        
        scrool_amount -= width_slider;
        slider.scrollTo({
            top: 0,
            left: scrool_amount,
            behavior: 'smooth' // Ajoute une transition de défilement})
        })
    } 
    if (!(mouseXrel <= width_slider/2) && scroll_time <= max_scrool-1){        
        //slider.scrollLeft += slider.offsetWidth + 1; // Défilement en avant d'une largeur d'élément
        //slider.style.scrollPaddingLeft = slider.offsetWidth.toString()+ 'px';
        scrool_amount += width_slider;
        slider.scrollTo({
            top: 0,
            left: scrool_amount,
            behavior: 'smooth' // Ajoute une transition de défilement})
        })
        scroll_time += 1;
        //slider.scrollLeft += slider.offsetWidth; // Dé
    }
    
    console.log(scrool_amount)
    console.log(scroll_time)
}



/*fonction pour mettre a jour la position de la barre horizontale*/
document.addEventListener('mousedown', (e : MouseEvent) =>{
    souris_down = true;
    if (slider instanceof HTMLElement){
        startX = e.pageX - (slider.offsetLeft); //position relative au slider
        scrool_actu = slider.scrollLeft ;
    }
});

if (slider instanceof HTMLElement){
    slider.onmousemove = (e : MouseEvent) => {
        const mouseXrel  = e.pageX - slider.offsetLeft;
        const width_slider = slider.offsetWidth;
        if (mouseXrel <= width_slider/2){
            console.log("ins")
            slider.style.cursor = "url('images/icon_cursor_droit.png'), auto";
        }else{
            slider.style.cursor = "url('images/icon_cursor_droit.png')";
            console.log("here")
        }
    }
}
document.addEventListener('mouseup', function(){
    souris_down = false;
});
slider && slider.addEventListener('mouseleave', function(){
    souris_down = false;
});

// un if rapide if slider => addeventlister...
if (slider instanceof HTMLElement){
    slider.addEventListener("mousedown", event_scrool);
    slider.addEventListener("touchstart", event_scrool);
}

//----------------------------------------------------------------Gère les click de li dans le nav de projet pour scroll
const liste_list : NodeListOf<HTMLLIElement>= document.querySelectorAll(".li_projet");
const projet_div1 = document.querySelector(".projet_div1");
let amount_of_li : number = 0;
console.log(projet_div1)
if (projet_div1 instanceof HTMLElement){
    amount_of_li = projet_div1.querySelectorAll(".li_projet").length;
}

let nav_changed : boolean = false;
liste_list.forEach((li,index) => {
    li.addEventListener("click", (e) => {
        console.log(index,amount_of_li, index % amount_of_li)
        if (index >= amount_of_li){
            index = index % amount_of_li;
            nav_changed = true;
        } else{
            nav_changed = false
        }
        click_on_nav_projet(e,index,nav_changed)
    });
})

const list_of_element_projet : NodeListOf<HTMLElement>= document.querySelectorAll(".div-container-projet")

/**
 * 
 * @param e {Event} : L'evenement de click
 * @param id {Number} : l'id de L'element où l'on doit scroll
 */
function click_on_nav_projet(e : Event,id : number,nav_changed : boolean){
    console.log(id)
    const marge_de_depassement = navHavechange || nav_changed ? nav_rect.height + rect_aside.height + 20 : nav_rect.height + 10; 
    const element = list_of_element_projet[id];
    console.log(element)
    const offsetTop = element.getBoundingClientRect().top + window.scrollY - marge_de_depassement
    //window.scrollY donne l'etat actuel du scroll donc on l'ajoute au rect.top car rect.top est relatif
    window.scrollTo({ top: offsetTop, behavior: 'smooth'});
    
}

//----------------------------------------------------------------Gère le sticky du nav
window.addEventListener('scroll', () =>{
    const navProjet = document.querySelector('.nav_projet');
    if (navProjet instanceof HTMLElement){
        const vu_client = document.documentElement.scrollTop;
        const rect = navProjet.getBoundingClientRect(); // Récupère les coordonnées de l'élément par rapport à la fenêtre
        navProjet.style.position = 'sticky';
        let ajout = 0;
        if (nav_is_out){
            ajout = nav_rect.top;
        }     
        if (rect.top + window.scrollY >= vu_client){
            navProjet.style.top = `${rect.top + ajout}px`; // Utilise la position initiale pour le 'top'
        }else{
            navProjet.style.top = `${rect.top + window.scrollY + ajout}px`       
        }
    }
})

//----------------------------------------------------------------Gère le scroll pour l'apparition des elements
function have_scroll(): void{
    let element = document.documentElement;
    let max_scrool = element.scrollHeight - element.clientHeight; //scroolheight : taille total de la page; clientheight : taille visible de la page
    let pourcent_scrool = Math.floor((element.scrollTop / max_scrool) *100); //prendre le pourcentage de scroll effectuer
    if (pourcent_scrool > 50){
        let retour = document.querySelector(".retour");
        if (retour instanceof HTMLButtonElement){
            retour.style.display = "block";
        }
        
    } else{
        let retour = document.querySelector(".retour");
        if (retour instanceof HTMLButtonElement){
            retour.style.display = "none";
        }
    }
    for (let elt of all){
        let rect = elt.getBoundingClientRect();
        let inViewport = rect.top <= window.innerHeight - 100  ; //comparaison de cordonné du haut de l'element par rapport a la visions window.innerheight qui est fixe 
        // Si l'élément est dans le viewport, affichez-le. Sinon, cachez-le.
        elt.style.opacity = inViewport ? '1' : elt.style.opacity;
    }
    
   
}

have_scroll(); //simuler un scroll pour charger la page blanche
window.addEventListener('scroll',have_scroll)

function click_sub_menu() :void{
    console.log("js")
    nav_is_out = !nav_is_out;
    const navProjet = document.querySelector('.nav_projet') as HTMLElement | null;

    
    let element = document.querySelector(".sub_menu"); 
    if (element instanceof HTMLUListElement){
        let img = document.querySelector(".img_ligne") as HTMLImageElement;
        img.style.transition = "transform 0.5s ease";
        let img_width = img.offsetWidth;
        let img_x = img.offsetLeft;
        let contener = document.querySelector("nav") as HTMLUnknownElement;
        let contener_ul = contener.querySelector("ul") as HTMLUListElement;
        let width_ul = contener_ul.offsetWidth;
        element.style.display = element.style.display === "" ? "none" : element.style.display;        
        if (element.style.display != "none"){
            element.style.display = "none";
            contener_ul.style.border = "none";     
            element.style.opacity = "0";
            img.style.transform = 'rotate(-360deg)';
            if (navProjet){
                let ajout : number = parseInt(navProjet.style.top) - nav_mobile_rect.height - 40;
                console.log(navProjet.style.top)
                console.log(ajout);
                navProjet.style.top = `${ajout}px`
            }
        }else{
            if (navProjet){
                let ajout : number = parseInt(navProjet.style.top) + nav_mobile_rect.height + 40;
                console.log(navProjet.style.top)
                console.log(ajout);
                navProjet.style.top = `${ajout}px`
            }
            element.style.display = "flex";
            element.style.border = "1px solid";
            element.style.opacity = "1";
            img.style.transform = `rotate(180deg)`;

        }    
    } 
}


document.querySelectorAll("img")
    .forEach(img => {
        img.onclick = () => {
            window.open(img.src,"_blank");
        }
        img.style.cursor = "url(cursor/cursor_batman.cur), auto"
    })

function retour_en_haut() :void{
    window.scrollTo({top : 0, behavior : "smooth"})
}

function copyText(){
    console.log("in")
    let ref_copy = document.querySelector(".lien_email");
    if (ref_copy instanceof HTMLAnchorElement){
        let text = ref_copy.innerText;
        navigator.clipboard.writeText(text)
        .then(() => {
           console.log("copied text");
        })
        .catch(() => {alert("La copie a échoué")})
    }
    let copied = document.querySelector(".copied");
    if (copied instanceof HTMLDivElement){
        copied.style.display =" flex";
        copied.style.opacity = "1";
    }
    setTimeout(function(){
        let copied = document.querySelector(".copied");
        if (copied instanceof HTMLDivElement){
            copied.style.opacity = "0";
        }
    }, 1500);

}

function click_on_theme(this : HTMLImageElement){
    console.log("click")    
    theme_mod_ligh = !theme_mod_ligh;
    console.log("click_on_theme, theme mod ligh : ",theme_mod_ligh);
    let couleur_fond : string;
    let text_couleur : string;
    let text_src : string;
    let titre : string;
    let color_switch : string;
    let couleur_fond_nav_projet:string;
    if (theme_mod_ligh === false){
         localStorage.setItem("theme","dark")
         text_src = "images/icon_fond_ligh.png";
         localStorage.setItem("src",text_src);
         couleur_fond = getComputedStyle(document.documentElement).getPropertyValue('--couleur_fond_dark');
         text_couleur = getComputedStyle(document.documentElement).getPropertyValue("--couleur_text_dark");
         titre = getComputedStyle(document.documentElement).getPropertyValue("--couleur_titre_dark");
         couleur_fond_nav_projet = getComputedStyle(document.documentElement).getPropertyValue("--couleur_fond_nav_projet_dark")
    } else{
         localStorage.setItem("theme","light")
         
         text_src = "images/icon_fond_dark.png";
         localStorage.setItem("src",text_src);
         couleur_fond = getComputedStyle(document.documentElement).getPropertyValue('--couleur_fond_light');
         text_couleur = getComputedStyle(document.documentElement).getPropertyValue("--couleur_text_light");
         titre = getComputedStyle(document.documentElement).getPropertyValue("--couleur_titre_light");
         couleur_fond_nav_projet = getComputedStyle(document.documentElement).getPropertyValue("--couleur_fond_nav_projet_light")
    }
    document.documentElement.style.setProperty("--couleur_fond", couleur_fond);
    document.documentElement.style.setProperty("--couleur_text", text_couleur)
    document.documentElement.style.setProperty("--couleur_titre", titre);
    document.documentElement.style.setProperty("--couleur_fond_nav_projet",couleur_fond_nav_projet)
    this.src = text_src;
    console.log(this)
}