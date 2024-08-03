function afficheImage(basePath, baseImage, nbImage,element){
    let paths = [];
    for(let i = 0; i < nbImage; i++){
        paths.push(`Image/${basePath}/${baseImage}${i+1}.png`);
    }

    if(paths.length > 0){
        paths.forEach(function(path){
            console.log(path);
            const imgElement = document.createElement("img");
            imgElement.src = path;
            imgElement.alt = "image du projet";
            element.appendChild(imgElement);
        });
    }

}

let AllContainerImageProjet = document.querySelectorAll(".imageProjet");

const liste = [
    ["SylverService","image_sylverservice",6],
    ["Unity","image_Unity",0],
    ["SylverDonjon","image_sylverdonjon",3],
    ["Jeux_de_bataille","image_jeuxbataille",1]
]
//afficheImage('SylverService','image_sylverservice',5,document.querySelectorAll(".imageProjet")[0]);

AllContainerImageProjet.forEach( (element,i) => {
    afficheImage(liste[i][0],liste[i][1],liste[i][2],element);
})