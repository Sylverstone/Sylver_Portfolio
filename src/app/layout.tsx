import "@/style/globals.css"
import Image from "next/image";
import FooterDiv from "./components/FooterDiv";

interface reseaux_t
{
	nom : string; 
	url : string;
	icon : string;
};

const reseaux : reseaux_t[] = 
[
	{
		nom : "GitHub",
		url : "https://github.com/Sylverstone/",
		icon : "/reseaux/github.png"
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

const contacts = 
[
	{
		nom : "Email",
        email : "sylvio8.pm@gmail.com"
	}
];

const pro = 
[
	{
		nom : "Cv",
		url : "ijioj",
	}
];

const categories = 
[
	/*
	{
		nom : "Pro",
		liste : <ul>
					{pro.map(contact => (
						<li key={contact.nom}>
							<a href={`mailto:${contact.url}`}>{contact.nom}</a>
						</li>
					))}
				</ul>
	},
	*/
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
		nom : "Me Suivre",
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

export default async function RootLayout(
{
  children,
}: Readonly<{
  children: React.ReactNode,

}>) 
{
	return (
		<html lang="fr">
			<body>
				{children}
				<footer>					
					<section>
						{categories.map(categorie => (
							<FooterDiv key={categorie.nom} name={categorie.nom}>
								{categorie.liste}
							</FooterDiv>
						))}
					</section>
					<p className="rights">© {new Date().getFullYear()} Sylvio Pelage Maxime. Tous droits réservés</p>
				</footer>
			</body>
		</html>
  );
}
