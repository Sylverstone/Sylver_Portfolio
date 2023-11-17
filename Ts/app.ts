/*
section = document.querySelector(".projet_apercu");
section.style.opacity = "0";
section.style.transition = "all 1s ease-in";
paragrah = document.querySelector(".fin_apercu");
paragrah.style.opacity = "0";
paragrah.style.transition = "all 1s ease";
*/

//j'utilise typescript car j'ai voulu regarder ce que c'etait, je l'utilise donc comme js

/*pour retirer toute les barres inutiles des elements*/
let section = document.querySelector(".projet_apercu") as HTMLUnknownElement;
let Div_a_changer = section.querySelectorAll('div')[2] as HTMLDivElement;
Div_a_changer.style.border = "none";
let footer = document.querySelector("footer") as HTMLUnknownElement;
Div_a_changer = footer.querySelectorAll("div")[2];
Div_a_changer.style.border = "none";

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
            let add = -img_x + width_ul/2 - img_width/2;
            img.style.transform = "translateX("  + add.toString() +"px)";
        }else{
            element.style.display = "flex";
            element.style.border = "1px solid";
            img.style.transform = "none";
            img.style.transform = "rotate(180deg)";
            contener_ul.style.justifyContent = "left";
        }    
           
    } 
}
/*Si je fais pas ça la première animations ne se lance pas au premier click*/
for (let i =0; i < 2; i++){
    click_sub_menu()
}

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
            alert("Texte copié")
        })
        .catch(function(){alert("fail")})
}
}