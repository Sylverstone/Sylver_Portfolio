export type project_t =
{
	key : number,
    title : string,
    presentation : string,
    technique : string | null,
    fonctionnalitees : string | null,
    comptence : string[],
    lien : string | null,
	siteweb : string | null,
	date:string,
    nombreImage: number
};

export const projects : project_t[] = [
    {
        key : 1,
        title: "SylverService",
        presentation:

        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        technique : null,
        fonctionnalitees : null,
    
        comptence : ["Python","MySQL"],
        lien : "https://github.com/Sylverstone/",
        siteweb : "https://sylverservice.up.railway.app/",
        date: "2024",
        nombreImage: 5

    },
    {
        key : 2,
        title: "BotDiscordBDE",
        presentation:

        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        technique : null,
        fonctionnalitees : null,

        comptence : ["TypeScript","Discord"],
        lien : "https://github.com/Sylverstone/BotDiscordBDE",
        siteweb : null,
        date: "2024",
        nombreImage : 0
    },
    {
        key : 3,
        title: "pgmToAA",
        presentation:

        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        technique : null,
        fonctionnalitees : null,

        comptence : ["cpp"],
        lien : null,
        siteweb : null,
        date: "2024",
        nombreImage: 2,
    },
    {
        key : 4,
        title: "SylverDonjon",
        presentation:

        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        technique : null,
        fonctionnalitees : null,

        comptence : ["Python"],
        lien : "https://github.com/Sylverstone/Sylver-Donjon",
        siteweb : null,
        date: "2023",
        nombreImage : 3,
    },
    
];