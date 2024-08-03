let nav = document.querySelector("nav");
let header = document.querySelector("header");
origine_nav_top = header.offsetHeight

window.onscroll = () => {
    let top_nav = nav.offsetTop
    if(top_nav < window.scrollY && top_nav != 0){        
        nav.className = "naviFlottant"


    } else if (origine_nav_top > window.scrollY){
        nav.className = "navi"

    }
};