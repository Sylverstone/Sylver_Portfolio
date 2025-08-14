
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
    })
}