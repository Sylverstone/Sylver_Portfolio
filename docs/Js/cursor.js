"use strict";
let div_projet_apercu = document.querySelector(".projet_apercu");
if (div_projet_apercu instanceof HTMLElement) {
    div_projet_apercu.onmousemove = (e) => {
        if (div_projet_apercu instanceof HTMLElement) {
            console.log(e.clientX, e.clientY);
            console.log(div_projet_apercu.getBoundingClientRect().x, div_projet_apercu.clientLeft);
            const chemin_cursor_gauche = "cursor/cursor_gauche.cur";
            const chemin_cursor_droit = "cursor/cursor_droit.cur";
            const width_div_projet_apercu = div_projet_apercu.getBoundingClientRect().width;
            const relative_x_mouse = e.clientX - div_projet_apercu.getBoundingClientRect().x;
            console.log(relative_x_mouse, width_div_projet_apercu);
            div_projet_apercu.querySelectorAll("div")
                .forEach(elt => {
                if (relative_x_mouse > width_div_projet_apercu / 2) {
                    elt.style.cursor = `url(${chemin_cursor_droit}), auto`;
                }
                else {
                    elt.style.cursor = `url(${chemin_cursor_gauche}), auto`;
                }
            });
        }
    };
}
