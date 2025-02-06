import styles from "@/style/styles.module.scss"
export const makeCursorMove = () => 
{
    const header = document.querySelector('header');
    const cursor = document.querySelector(`.${styles.cursor}`);
    if(header instanceof HTMLElement && cursor instanceof HTMLElement) 
    {
        header.onmousemove = (e : MouseEvent) => 
        {
            setTimeout(() => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }, 200);
        }
        
    }

    else
    {
        console.error("Header or cursor not found");
    }
}

