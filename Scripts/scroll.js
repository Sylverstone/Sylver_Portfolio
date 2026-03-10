
/**
 * 
 * @param {string} id 
 */
function scrollTOElement(id)
{
    const y = document.querySelector(id).getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: y,
        behavior:"smooth"
    });

    closeNav();
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