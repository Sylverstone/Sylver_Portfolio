"use strict";
let section = document.querySelector(".projet_apercu");
if (section instanceof HTMLElement) {
    let Div_a_changer = section.querySelectorAll('div')[2];
    Div_a_changer.style.border = "none";
    let footer = document.querySelector("footer");
    if (footer instanceof HTMLElement) {
        Div_a_changer = footer.querySelectorAll("div")[2];
        Div_a_changer.style.border = "none";
    }
}
console.log("ldd");
let theme_mod_ligh = false; //variable global pour le theme
let all = []; /*tableau qui servira a contenir quasiment tout les elements de la page*/
try {
    let body = document.querySelector("body");
    if (body instanceof HTMLBodyElement) {
        let al = body.querySelectorAll("*"); /*selectionne tout les elements*/
        all = Array.from(al);
        for (let elt of all) { /* va mettre a tout les elements de all une transition en opacité*/
            elt.style.transition = "opacity 1s ease";
            elt.style.opacity = "0";
        }
    }
}
catch (err) {
    console.log(err);
}
//----------------------------------------------------------------witdh du aside
let aside = document.querySelector("aside");
let rect_aside;
if (aside) {
    rect_aside = aside.getBoundingClientRect();
}
window.addEventListener("resize", () => {
    if (aside) {
        rect_aside = aside.getBoundingClientRect();
    }
});
//----------------------------------------------------------------Gère Le slider
let scrool_amount = 0;
const slider = document.querySelector(".projet_apercu");
let souris_down;
let first_time;
let startX;
let scrool_actu;
let scroll_time;
let count_child;
let was_max;
let max_scrool;
if (slider instanceof HTMLElement) {
    slider.style.transition = "all 1s ease";
    souris_down = false;
    first_time = false;
    startX = 0;
    scrool_actu = 0;
    scroll_time = 0;
    count_child = slider.querySelectorAll('div').length;
    was_max = false;
    max_scrool = count_child - 1;
}
const event_scrool = (e) => {
    e.preventDefault();
    if (souris_down)
        return;
    // Calcul de la largeur de défilement    
    const slider = document.querySelector('.projet_apercu');
    const width_slider = slider.offsetWidth;
    let mouseXrel = 0;
    if (e instanceof TouchEvent) {
        let touch = e.touches[0];
        mouseXrel = touch.clientX - slider.offsetLeft;
    }
    else {
        mouseXrel = e.pageX - slider.offsetLeft;
    }
    console.log(scroll_time);
    if (mouseXrel <= width_slider / 2 && scroll_time > 1) {
        scroll_time -= 1;
        scrool_amount -= width_slider;
        slider.scrollTo({
            top: 0,
            left: scrool_amount,
            behavior: 'smooth' // Ajoute une transition de défilement})
        });
    }
    if (!(mouseXrel <= width_slider / 2) && scroll_time <= max_scrool - 1) {
        //slider.scrollLeft += slider.offsetWidth + 1; // Défilement en avant d'une largeur d'élément
        //slider.style.scrollPaddingLeft = slider.offsetWidth.toString()+ 'px';
        scrool_amount += width_slider;
        slider.scrollTo({
            top: 0,
            left: scrool_amount,
            behavior: 'smooth' // Ajoute une transition de défilement})
        });
        scroll_time += 1;
        //slider.scrollLeft += slider.offsetWidth; // Dé
    }
    console.log(scrool_amount);
    console.log(scroll_time);
};
/*fonction pour mettre a jour la position de la barre horizontale*/
document.addEventListener('mousedown', (e) => {
    souris_down = true;
    if (slider instanceof HTMLElement) {
        startX = e.pageX - (slider.offsetLeft); //position relative au slider
        scrool_actu = slider.scrollLeft;
    }
});
if (slider instanceof HTMLElement) {
    slider.onmousemove = (e) => {
        const mouseXrel = e.pageX - slider.offsetLeft;
        const width_slider = slider.offsetWidth;
        if (mouseXrel <= width_slider / 2) {
            console.log("ins");
            slider.style.cursor = "url('images/icon_cursor_droit.png'), auto";
        }
        else {
            slider.style.cursor = "url('images/icon_cursor_droit.png')";
            console.log("here");
        }
    };
}
document.addEventListener('mouseup', function () {
    souris_down = false;
});
slider && slider.addEventListener('mouseleave', function () {
    souris_down = false;
});
// un if rapide if slider => addeventlister...
if (slider instanceof HTMLElement) {
    slider.addEventListener("mousedown", event_scrool);
    slider.addEventListener("touchstart", event_scrool);
}
//----------------------------------------------------------------Gère les click de li dans le nav de projet pour scroll
const liste_list = document.querySelectorAll(".li_projet");
const projet_div1 = document.querySelector(".projet_div1");
let amount_of_li = 0;
console.log(projet_div1);
if (projet_div1 instanceof HTMLElement) {
    amount_of_li = projet_div1.querySelectorAll(".li_projet").length;
}
let nav_changed = false;
liste_list.forEach((li, index) => {
    li.addEventListener("click", (e) => {
        console.log(index, amount_of_li, index % amount_of_li);
        if (index >= amount_of_li) {
            index = index % amount_of_li;
            nav_changed = true;
        }
        else {
            nav_changed = false;
        }
        click_on_nav_projet(e, index, nav_changed);
    });
});
const list_of_element_projet = document.querySelectorAll(".div-container-projet");
/**
 *
 * @param e {Event} : L'evenement de click
 * @param id {Number} : l'id de L'element où l'on doit scroll
 */
function click_on_nav_projet(e, id, nav_changed) {
    console.log(id);
    const marge_de_depassement = navHavechange || nav_changed ? nav_rect.height + rect_aside.height + 20 : nav_rect.height + 10;
    const element = list_of_element_projet[id];
    console.log(element);
    const offsetTop = element.getBoundingClientRect().top + window.scrollY - marge_de_depassement;
    //window.scrollY donne l'etat actuel du scroll donc on l'ajoute au rect.top car rect.top est relatif
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
}
//----------------------------------------------------------------Gère le sticky du nav
window.addEventListener('scroll', () => {
    const navProjet = document.querySelector('.nav_projet');
    if (navProjet instanceof HTMLElement) {
        const vu_client = document.documentElement.scrollTop;
        const rect = navProjet.getBoundingClientRect(); // Récupère les coordonnées de l'élément par rapport à la fenêtre
        navProjet.style.position = 'sticky';
        if (rect.top + window.scrollY >= vu_client) {
            navProjet.style.top = `${rect.top}px`; // Utilise la position initiale pour le 'top'
        }
        else {
            navProjet.style.top = `${rect.top + window.scrollY}px`;
        }
    }
});
//----------------------------------------------------------------Gère le scroll pour l'apparition des elements
function have_scroll() {
    let element = document.documentElement;
    let max_scrool = element.scrollHeight - element.clientHeight; //scroolheight : taille total de la page; clientheight : taille visible de la page
    let pourcent_scrool = Math.floor((element.scrollTop / max_scrool) * 100); //prendre le pourcentage de scroll effectuer
    if (pourcent_scrool > 50) {
        let retour = document.querySelector(".retour");
        if (retour instanceof HTMLButtonElement) {
            retour.style.display = "block";
        }
    }
    else {
        let retour = document.querySelector(".retour");
        if (retour instanceof HTMLButtonElement) {
            retour.style.display = "none";
        }
    }
    for (let elt of all) {
        let rect = elt.getBoundingClientRect();
        let inViewport = rect.top <= window.innerHeight - 100; //comparaison de cordonné du haut de l'element par rapport a la visions window.innerheight qui est fixe 
        // Si l'élément est dans le viewport, affichez-le. Sinon, cachez-le.
        elt.style.opacity = inViewport ? '1' : elt.style.opacity;
    }
}
have_scroll(); //simuler un scroll pour charger la page blanche
window.addEventListener('scroll', have_scroll);
function click_sub_menu() {
    console.log("js");
    let element = document.querySelector(".sub_menu");
    if (element instanceof HTMLUListElement) {
        console.log("in\n", element.className);
        let img = document.querySelector(".img_ligne");
        img.style.transition = "transform 0.5s ease";
        let img_width = img.offsetWidth;
        let img_x = img.offsetLeft;
        let contener = document.querySelector("nav");
        let contener_ul = contener.querySelector("ul");
        let width_ul = contener_ul.offsetWidth;
        element.style.display = element.style.display === "" ? "none" : element.style.display;
        if (element.style.display != "none") {
            element.style.display = "none";
            contener_ul.style.border = "none";
            element.style.opacity = "0";
            img.style.transform = 'rotate(-360deg)';
        }
        else {
            element.style.display = "flex";
            element.style.border = "1px solid";
            element.style.opacity = "1";
            img.style.transform = `rotate(180deg)`;
        }
    }
}
function affiche() {
    window.open(this.src, '_blank');
}
function retour_en_haut() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function copyText() {
    console.log("in");
    let ref_copy = document.querySelector(".lien_email");
    if (ref_copy instanceof HTMLAnchorElement) {
        let text = ref_copy.innerText;
        navigator.clipboard.writeText(text)
            .then(() => {
            console.log("copied text");
        })
            .catch(() => { alert("La copie a échoué"); });
    }
    let copied = document.querySelector(".copied");
    if (copied instanceof HTMLDivElement) {
        copied.style.display = " flex";
        copied.style.opacity = "1";
    }
    setTimeout(function () {
        let copied = document.querySelector(".copied");
        if (copied instanceof HTMLDivElement) {
            copied.style.opacity = "0";
        }
    }, 1500);
}
function click_on_theme() {
    console.log("click");
    theme_mod_ligh = !theme_mod_ligh;
    console.log(theme_mod_ligh);
    let couleur_fond;
    let text_couleur;
    let text_src;
    let titre;
    let color_switch;
    let couleur_fond_nav_projet;
    if (theme_mod_ligh === false) {
        text_src = "images/icon_fond_ligh.png";
        couleur_fond = getComputedStyle(document.documentElement).getPropertyValue('--couleur_fond_dark');
        text_couleur = getComputedStyle(document.documentElement).getPropertyValue("--couleur_text_dark");
        titre = getComputedStyle(document.documentElement).getPropertyValue("--couleur_titre_dark");
        couleur_fond_nav_projet = getComputedStyle(document.documentElement).getPropertyValue("--couleur_fond_nav_projet_dark");
    }
    else {
        text_src = "images/icon_fond_dark.png";
        couleur_fond = getComputedStyle(document.documentElement).getPropertyValue('--couleur_fond_light');
        text_couleur = getComputedStyle(document.documentElement).getPropertyValue("--couleur_text_light");
        titre = getComputedStyle(document.documentElement).getPropertyValue("--couleur_titre_light");
        couleur_fond_nav_projet = getComputedStyle(document.documentElement).getPropertyValue("--couleur_fond_nav_projet_light");
    }
    document.documentElement.style.setProperty("--couleur_fond", couleur_fond);
    document.documentElement.style.setProperty("--couleur_text", text_couleur);
    document.documentElement.style.setProperty("--couleur_titre", titre);
    document.documentElement.style.setProperty("--couleur_fond_nav_projet", couleur_fond_nav_projet);
    this.src = text_src;
}
