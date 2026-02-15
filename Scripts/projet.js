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

let is = {};
const linkDiv = document.querySelectorAll(".Link");
for(const l of linkDiv) {
    const img = l.querySelector("img");
    const parentParent = img.parentElement.parentElement;
    is[parentParent.id] = 0;

    img.onclick = (e) => {
        is[parentParent.id] = (is[parentParent.id] + 1) % 2 ;

        const parentSection = l.parentElement;
        const content = parentSection.querySelector(".Container");

        if (is[parentParent.id] % 2 === 0) {
            if (!parentSection) {
                console.log("not a section")
                return;
            }


            parentSection.classList.remove("Appear");
            parentSection.style.height = "4rem";
        } else {

            if (!parentSection) {
                console.log("not a section")
                return;
            }

            parentSection.classList.add("Appear");
            const target = parentSection.offsetHeight + content.offsetHeight;
            parentSection.style.height = `${target}px`;
        }
    }
}
// function anim(parentSection, content)
// {
//     const target = parentSection.offsetHeight + content.offsetHeight;
//     let iter = 1;
//     let currentHeight = parentSection.offsetHeight;
//     while(currentHeight < target && iter < 0)
//     {
//         console.log("in");
//         parentSection.style.height = `${currentHeight + 0}px`;
//         currentHeight++;
//         iter++;
//     }
//     window.requestAnimationFrame(anim);
// }

/*
* 1.

Client :



NumClient k, NomClient, Solde



Commande :

NumCommande, k

Date, IdAdresse,



Produit :

NumProduit, k

NomProduit, Stock, Minimal



Fournisseurs :

IDFournisseur k

Nom



ProduitFournisseurs :

IDFournisseur k

NumProduit k

Prix



CommandeProduit :

NumCommande k

NumProduit k

Quantite



Adresse

IDAdresse

Adresse



ClientAdresse

IDAdrresse k

NumClient k



2.



Numclient -> Nom, solde

NumCommande -> date idAdress

NumProduit -> Nom, stock, minimal

IdFournisseur -> nom

(IdFournisseur, NumProduit) -> Prix

(NumCommande, NumProduit) -> Quantite

IDAdress -> Adresse

(IDAdress,NumClient)
* */