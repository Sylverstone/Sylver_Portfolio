export const makeCursorMove = (e : MouseEvent, target : HTMLElement) => 
{
    setTimeout(() => {
        target.style.left = `${e.clientX}px`;
        target.style.top = `${e.clientY}px`;
    }, 200);
}