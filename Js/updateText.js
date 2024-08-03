const texteProfils = [
    "Elève en Licence Informatique",
    "Au Cnam Enjmin (16000)",
    "En recherche d'une alternance",
]

let text = document.getElementById("texteProfil");
let index = 0;

const s = (temps) => {
    return temps * 1000;
}

function updateText(){
    text.innerHTML = texteProfils[index];
    index++;
    index %= texteProfils.length;
}
setInterval(updateText,s(7));