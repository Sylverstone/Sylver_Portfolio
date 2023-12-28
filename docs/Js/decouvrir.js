"use strict";
const Array_decouvrir = document.querySelectorAll(".decouvrir");
Array_decouvrir.forEach((elt) => {
    elt.onclick = () => {
        const next_element = elt.nextElementSibling;
        if (next_element instanceof HTMLParagraphElement) {
            if (next_element.style.display === "block") {
                next_element.style.display = "none";
                elt.innerHTML = "<p>Decouvrir</p>";
            }
            else {
                next_element.style.display = "block";
                elt.innerHTML = "<p>Cacher</p>";
            }
        }
    };
});
