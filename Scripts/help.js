
let HelpShowed = false;
/**
 * 
 * @param {HTMLElement} elt 
 * @param {number} time
 */
function help(elt,time = 2,auto = false)
{
    const tips = elt.querySelector(".tips");
    if(!(tips instanceof HTMLElement)) return;
    if(!HelpShowed && !auto)
    {
        HelpShowed = true;
        tips.style.visibility = "visible";
        setTimeout(() => {
            help(elt,2,true);
        }, time * 1000);
    }
    else
    {
        tips.style.visibility = "hidden";
        HelpShowed = false;
    }


}