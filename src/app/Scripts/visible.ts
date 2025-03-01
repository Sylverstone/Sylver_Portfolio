"use client";
import styles from "@/style/styles.module.scss"

const Isvisible = (element : HTMLElement) =>
{
    const rect = element.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    
    return (
        (rect.top <= vh / 1.5) && rect.left <= vw
    );
}

const lookIfVisible = (pageElements : NodeListOf<Element>) =>
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


export function visible()
{
    const body = document.querySelector('body');
    if(!body) return;
    const pageElements = body.querySelectorAll(`.${styles.projet}, .${styles.aPropos}`);    
    body.onload = () => {
        lookIfVisible(pageElements);
    }

    body.onscroll = () => 
    {
        lookIfVisible(pageElements); 
    }
        
}