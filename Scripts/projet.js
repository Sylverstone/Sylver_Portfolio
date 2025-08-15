import {MakePartieVisible}  from "./func.mjs";

let statesPartie = JSON.parse(localStorage.getItem("partieData")) || {};

let baseUrl = "";

if(typeof statesPartie === "object" && Object.keys(statesPartie).length > 0)
{
    const keys = Object.keys(statesPartie);
    for(const key of keys)
    {
        if(statesPartie[key])
        {
            const element = document.querySelector(`#${key}`);
            MakePartieVisible(element,baseUrl);
        }
        
    }
}

const image = document.querySelectorAll("main .Illustration");
image.forEach( val => {
    val.onclick = function() {
        if(!(this instanceof HTMLImageElement)) return;
        window.open(this.src,"_blank");
    }
})

const a = document.querySelector("#backHome");
if((a instanceof HTMLAnchorElement))
{
    a.onclick = function(e){
        if(!(this instanceof HTMLAnchorElement)) return;
        e.preventDefault();
        localStorage.setItem("partieData","{}");
        window.location.href = this.href;
    }
} 