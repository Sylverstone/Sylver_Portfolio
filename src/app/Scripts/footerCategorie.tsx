import { Texts_t } from "./en"
import Image from "next/image"
import { JSX } from "react";

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
		icon : "/Technologies/github.png",
	},
	{
		nom : "LinkedIn",
        url : "https://linkedin.com/in/sylviopelagemaxime",
        icon : "/reseaux/linkedin.png"
	},
	{
		nom : "Fiverr",
		url : "https://www.fiverr.com/s/ak9gX4W",
		icon : "/reseaux/fiverr.png"

	}
];

export const contacts = 
[
	{
		nom : "Email",
        email : "sylvio8.pm@gmail.com"
	}
];

const suivreTXT = "Me Suivre";
const contactTXT = "Contact";

export let categories = 
[
	{
		nom : "Contact",
        liste : <ul>
                    {contacts.map(contact => (
                        <li key={contact.nom}>
                            <a href={`mailto:${contact.email}`}>{contact.nom}</a>
                        </li>
                    ))}
                </ul>
	},
	{
		nom : suivreTXT,
		liste : <ul>
					{reseaux.map(reseau => (
						<li key={reseau.nom}>
							<a href={reseau.url} target="_blank" rel="noopener noreferrer">
								<Image 
								src={reseau.icon}
								alt="jsp"
								width={100}
								height={100}
								/>
								{reseau.nom}
							</a>
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