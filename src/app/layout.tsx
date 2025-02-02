import "@/style/globals.scss"
import FooterDiv from "./components/FooterDiv";
import { headers } from "next/headers";
import TextEn from "@/Scripts/en";
import TextFr from "@/Scripts/fr";
import { setCategorie } from "./Scripts/footerCategorie";
import React from "react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import ContactForm from "./components/ContactForm";

export default async function RootLayout(
{
  children,
}: Readonly<{
  children: React.ReactNode,

}>) 
{
	const headersList = await headers();
	const acceptLanguage = headersList.get('accept-language');
	let userLanguage = acceptLanguage ? acceptLanguage.split('-')[0] : 'en';
	//userLanguage = "en";
	let Texts = TextFr;
	if(userLanguage !== 'fr') 
	{
		userLanguage = "en";
		Texts = TextEn;
	}

	const categories = setCategorie(Texts)
	
	return (
		
		<html lang="fr">
			<body>
				{children}
				<SpeedInsights />
				<Analytics />
				<footer>					
					<section>
						{categories.map(categorie => (
							<FooterDiv key={categorie.nom} name={categorie.nom}>
								{categorie.liste}
							</FooterDiv>
						))}
					</section>
					<ContactForm />
					<p className="rights">© {new Date().getFullYear()} Sylvio Pelage Maxime. {Texts.home.rights}</p>
				</footer>
			</body>
		</html>
		
  );
}
