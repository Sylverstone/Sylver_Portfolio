
/**
 * 
 * @param {string} id 
 */
function scrollTOElement(id)
{
    try
    {
        const y = document.querySelector(id).getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: y,
            behavior:"smooth"
        });

        closeNav();
        return false;
    }
    catch (e)
    {
        return true;
    }
}

function closeNav()
{
    const check = document.querySelector("#toggle-nav-checkbox");
    check.checked = false;
}

function showContactForm()
{
    setTimeout(() => {
        const contactButton = document.querySelector("#contact");
        contactButton.onclick();
    },1000)
}