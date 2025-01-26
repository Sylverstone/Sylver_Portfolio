import "@/style/globals.css"
import Image from "next/image";

interface reseaux_t
{
	nom : string; 
	url : string;
	icon : string;
}

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
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="fr">
			<body>
				{children}
				<footer>
					{reseaux.map(reseau => (
						<div key={reseau.nom}>
							
							<a href={reseau.url} target="_blank" rel="noopener noreferrer">
								<p>{reseau.nom}</p>
								<Image 
								src={reseau.icon}
								alt="jsp"
								layout="intrinsic"
								width={1000}
								height={1000}
								/>
							</a>
						</div>
					))}
				</footer>
			</body>
		</html>
  );
}
