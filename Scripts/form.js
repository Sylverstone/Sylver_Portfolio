
let posScroll = 0;
/**
 * Afficher et cacher le formulaire de contact
 * @param {HTMLElement} element 
 * @returns 
 */
function toogleForm(element)
{
    const url = window.location.href;
    let baseUrl = "";
    const contactButton = document.querySelector("#contact");
    const form = document.querySelector("#formAccueil");
    const img = element.querySelector("img");

    if(!(form instanceof HTMLFormElement) || !(img instanceof HTMLImageElement)) return;

    if(getComputedStyle(form).display === "none")
    {
        //Faire apparaître
        img.setAttribute("src",`${baseUrl}/Images/ContactButtonIconUp.png`)
        posScroll = window.scrollY;
        form.style.display = "flex";
        const y = form.getBoundingClientRect().top + window.scrollY;
        form.classList.add("AppearFromUp");       
        console.log(y);
        window.scrollTo({
            top:y + 100,
            behavior:"smooth"
        });
        setTimeout(() => {
            form.classList.remove("AppearFromUp");
        }, 1000);
    

    }
    else
    {
        //Faire disparraître
        img.setAttribute("src",`${baseUrl}/Images/ContactButtonIconDown.png`)
        form.classList.add("DisappearLeft");
        const y = contactButton.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
                top:posScroll,
                behavior:"smooth"
            });
            
        setTimeout(() => {
            

                form.style.display = "none";
                form.classList.remove("DisappearLeft");
            
        }, 500);
        
    }
}