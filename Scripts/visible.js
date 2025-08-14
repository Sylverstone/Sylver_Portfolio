/**
 * 
 * @param {HTMLElement} element 
 * @returns bool
 */
const Isvisible = (element) =>
{
    const rect = element.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    
    return (
        (rect.top <= vh / 1.5) && rect.left <= vw
    );
}

/**
 * 
 * @param {NodeListOf<Element>} pageElements 
 */
const lookIfVisible = (pageElements) =>
{
    let compteur = 0;
    pageElements.forEach(element => {
        if(!(element instanceof HTMLElement)) return;
        if(Isvisible(element))
        {
            element.classList.add("visible");
        }
        else
        {
            element.classList.remove("visible");
            switch(compteur % 2)
            {
                case 0 :
                    element.classList.add("hiddenRight");
                    break;
                case 1 :
                    element.classList.add("hiddenLeft");
                    break;
                default :
                    break;
            }
        }  
        compteur++;
    })
}


function main() {
    const body = document.querySelector("body");
    if(!(body instanceof HTMLBodyElement)) return;

    const TargetElement = document.querySelectorAll("#Competences, .Projet");

    body.onscroll = () => {
        lookIfVisible(TargetElement);
    }
}
main();
