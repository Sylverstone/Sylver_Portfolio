document.addEventListener("DOMContentLoaded",() =>{
    const saved_theme = localStorage.getItem("theme");
    console.log(saved_theme)
    if (saved_theme){
        let couleur_fond : string;
        let text_couleur : string;
        let text_src : string;
        let titre : string;
        let color_switch : string;
        let swicth_theme_img = document.querySelector(".switch_theme") as HTMLImageElement;
        
        let couleur_fond_nav_projet:string;
        let theme_mod_ligh : boolean;
        if (saved_theme === "dark"){
            theme_mod_ligh = false;
            text_src = "images/icon_fond_ligh.png";
            couleur_fond = getComputedStyle(document.documentElement).getPropertyValue('--couleur_fond_dark');
            text_couleur = getComputedStyle(document.documentElement).getPropertyValue("--couleur_text_dark");
            titre = getComputedStyle(document.documentElement).getPropertyValue("--couleur_titre_dark");
            couleur_fond_nav_projet = getComputedStyle(document.documentElement).getPropertyValue("--couleur_fond_nav_projet_dark")
        }else{
            theme_mod_ligh = true;
            text_src = "images/icon_fond_dark.png";
            couleur_fond = getComputedStyle(document.documentElement).getPropertyValue('--couleur_fond_light');
            text_couleur = getComputedStyle(document.documentElement).getPropertyValue("--couleur_text_light");
            titre = getComputedStyle(document.documentElement).getPropertyValue("--couleur_titre_light");
            couleur_fond_nav_projet = getComputedStyle(document.documentElement).getPropertyValue("--couleur_fond_nav_projet_light")
            
        }
        document.documentElement.style.setProperty("--couleur_fond", couleur_fond);
        document.documentElement.style.setProperty("--couleur_text", text_couleur)
        document.documentElement.style.setProperty("--couleur_titre", titre);
        document.documentElement.style.setProperty("--couleur_fond_nav_projet",couleur_fond_nav_projet)
        console.log("opjoi");
        console.log(swicth_theme_img)
        swicth_theme_img.src = text_src
        console.log(swicth_theme_img)
        
    }
});
