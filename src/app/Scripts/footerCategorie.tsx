import { url } from "inspector";
import { Texts_t } from "../translation/en"
import Image from "next/image"
import { JSX } from "react";
import Link from "next/link";

export interface reseaux_t
{
	nom : string; 
	url : string;
	icon : string;
};

export const reseaux : reseaux_t[] = 
[
	{
		nom : "GitHub",
		url : "https://github.com/Sylverstone/",
		icon : "/Technologies/github.svg",
	},
	{
		nom : "LinkedIn",
        url : "https://linkedin.com/in/sylviopelagemaxime",
        icon : "/reseaux/linkedin.svg"
	},
	{
		nom : "Fiverr",
		url : "https://www.fiverr.com/s/ak9gX4W",
		icon : "/reseaux/fiverr.svg"

	}
];

export const contacts = 
[
	{
		nom : "Email",
        url : "mailto:Sylvio.PelageMaxime@outlook.fr",
		download : false,
	},
	/*
	{
		nom : "CV",
		url : "/photo_cv.jpg",
		download: false,
	}*/
];

const suivreTXT = "Me Suivre";

export let categories = 
[
	{
		nom : "Pro",
        liste : <ul>
                    {contacts.map(contact => (
                        <li key={contact.nom}>
                            <Link href={contact.url} target="_blank" download={contact.download}>{contact.nom}</Link>
                        </li>
                    ))}
                </ul>
	},
	{
		nom : suivreTXT,
		liste : <ul>
					{reseaux.map(reseau => (
						<li key={reseau.nom}>
							<Link href={reseau.url} target="_blank" rel="noopener noreferrer" >
								<Image 
								src={reseau.icon}
								alt="jsp"
								width={100}
								height={100}
								/>
								{reseau.nom}
							</Link>
						</li>
					))}
				</ul>
	}
]

export const setCategorie = (Texts : Texts_t) : {
    nom: string;
    liste: JSX.Element;
}[] =>
{
	categories = categories.map((c) => {
		if(c.nom == suivreTXT)
		{
			c.nom = Texts.home.meSuivre;
		}
		return c
	});
    return categories;
}