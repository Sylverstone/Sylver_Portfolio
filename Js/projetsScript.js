

let sectionCadreProjet = document.querySelector('.CadreProjet');
const nbProjet = sectionCadreProjet.querySelectorAll(".cadre").length;
let scrollTime = 0;
let scroolValue = 0;
const max_scroll = nbProjet - 1
let id_nomProjet = 0;

const makeScroll = (scroolValue,element) => {
    element.scrollTo({
        top : 0,
        left : scroolValue,
        behavior : 'smooth'
    })
}

const dict_Projets = {
    "Sylver Service" : "https://github.com/Sylverstone/Sylver_Service/releases/tag/1.8.5",
    "SylverRPG - En cours" : "https://github.com/Sylverstone/SylverRPG",
    "SylverDonjon" : "https://github.com/Sylverstone/Sylver-Donjon",
    "Jeux de Bataille" : "https://onedrive.live.com/?authkey=%21AJxnW5lrnjCK4oQ&id=D61370425EF5D618%2114894&cid=D61370425EF5D618",
    "Mon Portfolio" : "#"
}

const nom_Projet = [
    "Sylver Service",
    "SylverRPG - En cours",
    "SylverDonjon",
    "Jeux de Bataille",
    "Mon Portfolio"
]

function web(element){
    console.log(element.innerHTML);
    if(dict_Projets[element.innerHTML] != "norel"){
        window.open(dict_Projets[element.innerHTML],"_blank");
    } else{
        alert("Aucun lien n'est disponible pour se projet")
    }
}

function DefileProjet(avancer){    
    let canChange = true;
    let cadreProjet = document.querySelector(".CadreProjet");
    longueurProjet = cadreProjet.offsetWidth;   

    if(avancer && scrollTime < max_scroll) {
        console.log("scrolled front");
        scrollTime++;
        scroolValue += longueurProjet;
        makeScroll(scroolValue,cadreProjet)

    } else if(!avancer && scrollTime > 0){
        console.log("scrolled back");
        scrollTime--;
        scroolValue -= longueurProjet;
        makeScroll(scroolValue,cadreProjet)

    } else {
        alert("Il n'y a plus de projets :)");
        canChange = false;
        makeScroll(0,cadreProjet)
        scrollTime = 0;
        scroolValue = 0;
        id_nomProjet = 0;

    }
    if (canChange){
        let nomProjetAfficher = document.querySelector(".nom_projet"); 
        id_nomProjet = avancer === true ? id_nomProjet + 1 : id_nomProjet - 1;        
        console.log(id_nomProjet)
        nomProjetAfficher.innerHTML = `${nom_Projet[id_nomProjet]}`;
    }
    setTimeout(() => {go_to("Mes_projets");},700);
}

function go_to(id){
    const element = document.querySelector('#' + id);
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    window.scrollTo({
        top: rect.top + scrollTop - nav.offsetHeight - 100,
        behavior: 'smooth'
    });
}

