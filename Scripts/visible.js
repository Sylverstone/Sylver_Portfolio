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
 * @param {Element[]} pageElements
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
            element.classList.add("hidden");
        }  
        compteur++;
    })
}


function main() {
    const body = document.querySelector("body");
    if(!(body instanceof HTMLBodyElement))
        return;

    const ElementWithFadeAttribute = document.querySelectorAll("[fade]");

    /**@type {Element[]}*/
    let FadeElements = [];
    ElementWithFadeAttribute.forEach(e => {
        FadeElements.push(...e.querySelectorAll("& > *"));
    })

    let fade
    body.onscroll = () => {
        lookIfVisible(FadeElements);
    }
}

main();
