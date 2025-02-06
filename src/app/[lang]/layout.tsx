import "@/style/globals.scss"
import FooterDiv from "../components/FooterDiv";

import { setCategorie } from "../Scripts/footerCategorie";
import React from "react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import ContactForm from "../components/ContactForm";
import { getTexts } from "../Scripts/getTexts";

export default async function RootLayout(
{
  children,
  params,
}: Readonly<{
  children: React.ReactNode,
  params : Promise<{lang : 'en' | 'fr'}>
}>) 
{
	const lang = (await params).lang;
	const Texts = await getTexts(lang);
	const categories = setCategorie(Texts);
	
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
