export interface Texts_t 
{
    home: {

		"etude" : string,
		"bienvenue" : string;
        "titre": string;
        "subTitre": string;
        "mainContent": string;
		"mesProjets" : string;
		"apercu" : string;
		"techUse" : string;
		"siteWeb" : string;
		"lien" : string;
		"meSuivre" : string;
		"rights" : string;
    }
};

const Texts : Texts_t = 
{
	home :
	{
		rights : "All rights reserved",
		meSuivre : "Follow Me",
		lien : "Link.s",
		siteWeb : "Website",
		apercu : "Project Overview",
		techUse : "Tech Stack Used",
		mesProjets : "MY PROJECTS",
		etude : "Student in Computer Graphics Bachelor",
		bienvenue : "WELCOME TO MY PORTFOLIO",
		titre : "Sylvio Pelage Maxime",
		subTitre : "Student in Computer Graphics BUT at Puy-en-Velay",
		mainContent : 
		`
Since I was a child, I have been passionate about video games, which is why I want to become a video game programmer.
Coding in general attracts me a lot, so I am not only interested in the field of video games but also in web development.

Being naturally curious, I have experimented with languages like C++, Python, C#, JavaScript/TypeScript, and MySQL, whether for academic reasons or simply for personal projects.
		`
	}
}


export default Texts;