const full = document.querySelector("#full");
const checkbox = document.querySelector("#toggle-nav-checkbox");

full.onclick = (e) => {
    checkbox.checked = false;
}

window.onresize = () => {
    // const DesktopNav = document.querySelector("#DesktopNav");
    // const MobileNav = document.querySelector("#MobileNav");
    //
    // if(DesktopNav && getComputedStyle(DesktopNav).display === "block")
    // {
    //     MobileNav && MobileNav.remove();
    // }
    // else
    // {
    //     DesktopNav && DesktopNav.remove();
    // }
}

console.log("did that");
const MobileNav = document.querySelector("#MobileNav");


const CVLink = MobileNav.querySelector("#CVLink");
const inputToggleCV = document.querySelector("#cv-selector-toggle");

function closeCvSelector() {
    inputToggleCV.checked = false;
}
CVLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("clicked");
        inputToggleCV.checked = !inputToggleCV.checked;
})

const cvSelectorback = document.querySelector("#cv-selector-back");
cvSelectorback.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    inputToggleCV.checked = false;
})


const cvClose = document.querySelector("#cv-close");
cvClose.addEventListener("click", (e) => {
    e.preventDefault();
    closeCvSelector();
})

const stickyElements = document.querySelectorAll("[sticky]");

/**
 * @var {Map<HTMLElement, number>}
 * */
const elementsOriginY = new Map();

/**
 * @param element {HTMLElement}
 * */
const getOriginY = (element) => {
    const r = element.getBoundingClientRect();
    return r.top + window.scrollY;
}

stickyElements.forEach(el => {
    if(!(el instanceof HTMLElement)) {
        return;
    }
    elementsOriginY.set(el, getOriginY(el));
});

console.log(stickyElements);
window.addEventListener("scroll", (e) => {
    stickyElements.forEach((element) => {
        if(!(element instanceof  HTMLElement))
            return;
        if(elementsOriginY.get(element) < window.scrollY)
        {
            element.style.position = "fixed";
        }
        else
        {
            element.style.position = "relative";
        }
    })
})