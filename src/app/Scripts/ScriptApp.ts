import styles from "@/style/styles.module.scss"
import { makeTexteMove,resetRotaTexte } from "./partial/algorithmTexteRota";
import { makeCursorMove } from "./partial/algorithmCursorMove";
import { visible } from "./visible";

export const makeScript = () => 
{
    const header = document.querySelector('header');
    const cursor = document.querySelector(`.${styles.cursor}`);
    const texteProfile = document.querySelector(".texteProfil");
    const image = document.querySelector(`.${styles.ImageProfil}`);

    if(image instanceof HTMLElement)
    {
        image.onanimationend = () => 
        {
            image.style.animation = "none";
        }
    }
    if(header instanceof HTMLElement && cursor instanceof HTMLElement && texteProfile instanceof HTMLParagraphElement) 
    {
        header.onmousemove = (e : MouseEvent) => 
        {
            console.log("uhuih");
            makeCursorMove(e, cursor);            
            makeTexteMove(e,texteProfile);
        }        
        header.onmouseleave = () =>
        {
            resetRotaTexte(texteProfile); 
        }
    }
    else
    {
        console.error("Header or cursor not found");
    }

    visible();
}

