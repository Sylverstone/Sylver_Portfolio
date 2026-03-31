function main()
{
    const compteur = document.querySelector("#compteur");
    if(!compteur || !(compteur instanceof HTMLSpanElement)) return;

    const textearea = document.querySelector("#Message");
    if(!textearea || !(textearea instanceof HTMLTextAreaElement)) return;

    textearea.oninput = (ev) => {
        if(!(ev.target instanceof HTMLTextAreaElement)) return;
        compteur.innerHTML = `${ev.target.value.length}/500`;
    }
}

main();

