const y = (m : number, p :  number,x:number) : number =>
{
    return m * x + p
}

const getRota = (rotaInMax :number, rotaInMin : number,x : number,xMax : number, xMin : number) : number =>
{
    const xMaxRota = xMax;
    const xMinRota = xMin;
    const yMaxRota = rotaInMax; 
    const yMinRota = rotaInMin;
    const m =  (yMaxRota - yMinRota) / (xMaxRota - xMinRota);
    const p = yMinRota - m * xMinRota;

    return y(m,p,x);
}

export const resetRotaTexte = (elt : HTMLParagraphElement) => 
{
    elt.style.transform = "skew(-10deg) rotateX(0deg) rotateY(0deg)";
}
export const makeTexteMove = (e : MouseEvent, target : HTMLParagraphElement) => 
{
    console.log("moving")
    const newRotaXValeurRota = getRota(30,-30, e.clientY,window.innerHeight,0);
    const newRotoYValeurRota = getRota(-30,30,e.clientX,window.innerWidth, 0);
    target.style.transform = `skew(-10deg) rotateX(${newRotaXValeurRota}deg) rotateY(${newRotoYValeurRota}deg)`;
}