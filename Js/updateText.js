const texteProfils = [
    "Elève en BUT Informatique",
    "Au Puy-en-velay (43000)",
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