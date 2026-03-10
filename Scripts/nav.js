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