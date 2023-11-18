/*
section = document.querySelector(".projet_apercu");
section.style.opacity = "0";
section.style.transition = "all 1s ease-in";
paragrah = document.querySelector(".fin_apercu");
paragrah.style.opacity = "0";
paragrah.style.transition = "all 1s ease";
*/

//c'est mon code de depart en js, que j'ai finialement fini par abandonner pour passer en typescript pour essayer
body = document.querySelector("body");
all = body.querySelectorAll("*");
all = Array.from(all);
all = all.filter(function(element) {
    console.log(element.tagName)
    console.log(element.parentElement.parentElement.tagName)
    /*retirer les elements du footer*/
    return element.tagName !== 'FOOTER' && element.tagName !== "BUTTON" && element.parentElement.tagName !== 'FOOTER' && element.parentElement.parentElement.tagName !== 'FOOTER' ;
  });

for (let elt of all){
    console.log(elt)
    elt.style.transition = "all 1s ease";
}

window.onscroll = () => {
    let element = document.documentElement;
    let max_scrool = element.scrollHeight - element.clientHeight; //scroolheight : taille total de la page; clientheight : taille visible de la page
    let pourcent_scrool = Math.floor((element.scrollTop / max_scrool) *100);
    console.log(pourcent_scrool);
    if (pourcent_scrool > 50){
        document.querySelector(".retour").style.display = "block";
        
    } else{
        document.querySelector(".retour").style.display = "none";
    }
    for (let elt of all){
        let rect = elt.getBoundingClientRect();
        console.log(rect);
        console.log(window.innerHeight);
        let inViewport = rect.top <= window.innerHeight - 100;
        // Si l'élément est dans le viewport, affichez-le. Sinon, cachez-le.
        elt.style.opacity = inViewport ? '1' : '0';
    }
    /*
    let rect = section.getBoundingClientRect();
    console.log(rect);
    console.log(window.innerHeight);
    let inViewport = rect.top <= window.innerHeight - 50;

    // Si l'élément est dans le viewport, affichez-le. Sinon, cachez-le.
    section.style.opacity = inViewport ? '1' : '0';
    let rect2 = paragrah.getBoundingClientRect();
    let inViewport2 = rect2.top <= window.innerHeight -50;

    paragrah.style.opacity = inViewport2 ? '1' : '0';
    */
}


    // Obtenez la position de l'élément par rapport au viewport.
    
  
    // Vérifiez si l'élément est dans le viewport.
 
function click_sub_menu(){
    console.log("js")
    let element = document.querySelector(".sub_menu");
    let img = document.querySelector(".img_ligne");
    let img_width = img?.offsetWidth;
    let img_x = img?.offsetLeft;
    let contener = document.querySelector("nav");
    let contener_ul = contener?.querySelector("ul");
    let width_ul = contener_ul?.offsetWidth;
    element?.style.display = element?.style.display === "" ? "none" : element?.style.display;
    console.log(element.style.display)
    contener_ul.style.transition = "all 1s ease";
    if (element.style.display != "none"){
        console.log("a");
        element.style.display = "none";
        contener_ul.style.border = "none";
        let add = -img_x + width_ul/2 - img_width/2;
        img.style.transform = "translateX("  + add.toString() +"px)";
    }else{
        console.log("b");
        element.style.display = "flex";
        element.style.border = "1px solid";
        img.style.transform = "none";
        img.style.transform = "rotate(180deg)";
        contener_ul.style.justifyContent = "left";
    }
}

/*Si je fais pas ça l'animation de l'icon avec 3 lignes ne serait pas fait au premier click et j'arrive pas a regler*/

for (let i =0; i < 2; i++){
    click_sub_menu()
}

function adjust_size(){
    let ul = document.querySelector("ul");
    console.log("adjust");
    let width_ul = ul?.offsetWidth;
    this.style.minWidth = width_ul + "px";
}



function affiche(){
    window.open(this.src,'_blank');
}

function check_taille(w){
    const width = this.naturalWidth;
    const height = this.naturalHeight;
    console.log(`Donnés de l'image : \n Longueur : ${width}\n Largeur : ${height}`);
    this.style.height = w * height / width + 'px';
    this.style.width = w +'px ';
}


function retour_en_haut(){
    window.scrollTo({top : 0, behavior : "smooth"})
}
    
