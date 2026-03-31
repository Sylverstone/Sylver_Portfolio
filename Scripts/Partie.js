
/**
 * 
 * @param {HTMLElement} element 
 * @param {string} baseUrl
 */

import { initList, MakePartieVisible } from "./func.mjs";

const Parties = Array.from(document.querySelectorAll(".Partie"));
const url = window.location.href;

/**
 * @param {HTMLElement} val
 * @param {boolean} bool 
 */
const handleListeData = async(val,bool) => {
    let liste = JSON.parse(localStorage.getItem("partieData") || "{}");
    if(Object.keys(liste).length == 0)
    {
        liste = initList();
    }
    liste[val.id] = bool;
    localStorage.setItem("partieData",JSON.stringify(liste));
    console.log(liste);
}

let baseUrl = "";
let Etat = [];
Parties.forEach((val,key) => {
    if(!(val instanceof HTMLElement)) return;
    const nextElement = val.nextElementSibling;
    if(!nextElement || !(nextElement instanceof HTMLElement)) return;
    nextElement.style.display = "none";
    let liste = JSON.parse(localStorage.getItem("partieData") || "{}") ;
    console.log(Object.keys(liste))
    if(Object.keys(liste).length < 4)
    {
        liste = initList();
    }
    localStorage.setItem("partieData",JSON.stringify(liste));

    for(const v of Object.values(liste))
    {
        Etat.push(v);
    }

    val.onclick = async function(){

        if(Parties.indexOf(this) == undefined) return;
        const i = Parties.indexOf(val);
        const img = this.querySelector("img");
        if(!(img instanceof HTMLImageElement)) return;
        
        if(Etat[i] == true)
        {
            await handleListeData(val,false);
            const nextElement = val.nextElementSibling;
            if(!(nextElement instanceof HTMLElement)) return;
            img.setAttribute("src",`${baseUrl}/Images/PartieClose.png`);
            const element = nextElement.querySelectorAll("*");
            nextElement.classList.add("DisappearLeft");
            setTimeout(() => {
                nextElement.classList.remove("DisappearLeft")
                nextElement.style.display = "none";
            }, 500);
            
        }
        else
        {                   
            await handleListeData(val,true);     
            MakePartieVisible(val,baseUrl);
        }

        Etat[i] = !Etat[i];
    }
})





