

let section =  document.querySelector(".projet_apercu");
if (section instanceof HTMLElement) {
    let Div_a_changer = section.querySelectorAll('div')[2];
    Div_a_changer.style.border = "none";
    let footer = document.querySelector("footer");
    if (footer instanceof HTMLElement){
        Div_a_changer = footer.querySelectorAll("div")[2];
        Div_a_changer.style.border = "none";
    }
}

let theme_mod_ligh = false; //variable global pour le theme
let all = [] as Array<HTMLElement>; /*tableau qui servira a contenir quasiment tout les elements de la page*/
try{
    let body  = document.querySelector("body");
    if (body instanceof HTMLBodyElement){
        let al : NodeListOf<HTMLElement>  = body.querySelectorAll("*"); /*selectionne tout les elements*/
        all = Array.from(al);
        all = all.filter(function(element : HTMLElement) { /*fonction assez bizarre qui filtre selon le return, toute la liste al est parcouru */
            if (element){
                let parentElement_ = element.parentElement;
                let grandParentElement = parentElement_?.parentElement;
                /*retirer les elements du footer*/
                return element.tagName !== 'FOOTER' && element.tagName !== "BUTTON" && parentElement_?.tagName !== 'FOOTER' && grandParentElement?.tagName !== 'FOOTER' && element.className !== "home";
            }
        });
        for (let elt of all){ /* va mettre a tout les elements de all une transition en opacité*/
            elt.style.transition = "opacity 1s ease";
            elt.style.opacity = "0";
        }
    }    
} catch(err){
    console.log(err);
}


let scrool_amount : number = 0;
const slider = document.querySelector(".projet_apercu") as HTMLElement;
slider.style.transition = "all 1s ease";
let souris_down = false;
let first_time : boolean = false;
let startX : number = 0;
let scrool_actu : number = 0;
let scroll_time :number = 0;
let count_child : number = slider.querySelectorAll('div').length;
let was_max : boolean = false;
let max_scrool = count_child;


const event_scrool = (e : MouseEvent | TouchEvent) => {
    e.preventDefault();    
    
    if (souris_down) return;
        // Calcul de la largeur de défilement    
    const slider = document.querySelector('.projet_apercu') as HTMLElement;
    const width_slider = slider.offsetWidth;
    
    if (scroll_time >= max_scrool - 1 || was_max){
        was_max = true;
        scroll_time -= 1;
        if (scroll_time <= 1){
            scroll_time = 1;
            was_max = false;
        }            
        scrool_amount -= width_slider;
        slider.scrollTo({
            top: 0,
            left: scrool_amount,
            behavior: 'smooth' // Ajoute une transition de défilement})
        })
    } else {        
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
    startX = e.pageX - (slider.offsetLeft); //position relative au slider
    scrool_actu = slider.scrollLeft ;
});



document.addEventListener('mouseup', function(){
    souris_down = false;
});

slider.addEventListener('mouseleave', function(){
    souris_down = false;
});

document.addEventListener('mousemove', function(e : MouseEvent){
    if (!souris_down || isMobile) return;
    e.preventDefault();
    const slider = document.querySelector('.projet_apercu') as HTMLElement;
    const width_slider = slider.offsetWidth;
    const x : number = e.pageX - slider.offsetLeft;
    const deplace : number = (x- startX) * 5;
    slider.scrollLeft = scrool_actu - deplace;
    let m : number= Math.floor(slider.scrollLeft / (width_slider-10))
    scroll_time = m
    if (scroll_time >= max_scrool - 1 || was_max){
        was_max = true;
        if (scroll_time <= 0){
            scroll_time = 0;
            was_max = false;
        }            
        
    } 
    scrool_amount = width_slider * (scroll_time);   
    
    console.log(scrool_amount)
    console.log(scroll_time)
   
});

slider.addEventListener("mousedown", event_scrool);
slider.addEventListener("touchstart", event_scrool);

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
    let element = document.querySelector(".sub_menu"); 
    if (element instanceof HTMLUListElement){
        console.log("in\n", element.className)
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
            img.style.transform = 'translateX(-50%)';
        }else{
            element.style.display = "flex";
            element.style.border = "1px solid";
            img.style.transform = `translateX(${-contener_ul.offsetWidth/2}px)`;
        }    
    } 
}
/*Si je fais pas ça la première animations ne se lance pas au premier click*/


function affiche(this : HTMLImageElement) : void{
    window.open(this.src,'_blank');
}

function retour_en_haut() :void{
    window.scrollTo({top : 0, behavior : "smooth"})
}

function copyText(){
    console.log("in")
    let ref_copy = document.querySelector(".lien_email");
    if (ref_copy instanceof HTMLAnchorElement){
        let text = ref_copy.innerText;
        navigator.clipboard.writeText(text)
        .then(function(){
           console.log("copied text");
        })
        .catch(function(){alert("fail")})
    }
    let copied = document.querySelector(".copied");
    if (copied instanceof HTMLDivElement){
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
    console.log(theme_mod_ligh);
    let couleur_fond : string;
    let text_couleur : string;
    let text_src : string;
    let titre : string;
    let color_switch : string;
    if (theme_mod_ligh === false){
         text_src = "images/icon_fond_ligh.png";
         couleur_fond = getComputedStyle(document.documentElement).getPropertyValue('--couleur_fond_dark');
         text_couleur = getComputedStyle(document.documentElement).getPropertyValue("--couleur_text_dark");
         titre = getComputedStyle(document.documentElement).getPropertyValue("--couleur_titre_dark");

    } else{
         text_src = "images/icon_fond_dark.png";
         couleur_fond = getComputedStyle(document.documentElement).getPropertyValue('--couleur_fond_light');
         text_couleur = getComputedStyle(document.documentElement).getPropertyValue("--couleur_text_light");
         titre = getComputedStyle(document.documentElement).getPropertyValue("--couleur_titre_light");
    }
    document.documentElement.style.setProperty("--couleur_fond", couleur_fond);
    document.documentElement.style.setProperty("--couleur_text", text_couleur)
    document.documentElement.style.setProperty("--couleur_titre", titre);

    this.src = text_src;
}