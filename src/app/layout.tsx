import "@/style/globals.css"
import Image from "next/image";
import FooterDiv from "./components/FooterDiv";
import { headers } from "next/headers";
import TextEn from "@/Scripts/en";
import TextFr from "@/Scripts/fr";
import { setCategorie } from "./Scripts/footerCategorie";
import React from "react";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";




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
				<footer>					
					<section>
						{categories.map(categorie => (
							<FooterDiv key={categorie.nom} name={categorie.nom}>
								{categorie.liste}
							</FooterDiv>
						))}
					</section>
					<p className="rights">© {new Date().getFullYear()} Sylvio Pelage Maxime. {Texts.home.rights}</p>
				</footer>
			</body>
		</html>
		
  );
}
