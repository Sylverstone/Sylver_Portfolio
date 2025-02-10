type projectName = "SylverService" | "BotDiscordBDE" | "pgmToAA" | "SylverDonjon";
export type project_t =
{
	key : number,
    title : projectName,
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
        technique : null,
        fonctionnalitees : null,

        comptence : ["TypeScript","Discord"],
        lien : "https://github.com/Sylverstone/BotDiscordBDE",
        siteweb : null,
        date: "2025",
        nombreImage : 0
    },
    {
        key : 3,
        title: "pgmToAA",
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
        technique : null,
        fonctionnalitees : null,

        comptence : ["Python"],
        lien : "https://github.com/Sylverstone/Sylver-Donjon",
        siteweb : null,
        date: "2023",
        nombreImage : 3,
    },
    
];