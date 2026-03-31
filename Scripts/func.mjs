export function MakePartieVisible(element,baseUrl)
{
    const img = element.querySelector("img");
    const nextElement = element.nextElementSibling;
    if(!(nextElement instanceof HTMLElement)) return;
    img.setAttribute("src",`${baseUrl}/Images/PartieOpen.png`);
    nextElement.classList.add("AppearFromUp");
    nextElement.style.display = "flex";
}


export const initList = () => {
    return {
        AProposProjet : false,
        Aperçu : false,
        Etapes : false,
        Lien : false
    }
}