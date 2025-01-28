
import Image from "next/image";
import styles from "@/style/styles.module.css"
import { Metadata } from "next";
import ProjectSetup from "./components/ProjectSetup";
import DefilementText from "./components/DefilementText";
import { headers } from "next/headers";
import TextEn from "@/Scripts/en";
import TextFr from "@/Scripts/fr";
import { projects } from "./Scripts/projects";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Sylvio",
};


export default async function Home() {

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
	// Extraire la langue préférée
	
	const {titre,subTitre,bienvenue,mainContent,mesProjets} = Texts.home;

	return (
	<>
		<header>
			<DefilementText Texts={Texts}/>
			<div>
				<Image 
					src="/photo_cv.jpg"
					alt="jsp"
					width={1000}
					height={1000}
					className={styles.ImageProfil}
					priority
				/>
				<p className="bienvenue">{bienvenue}</p>
			</div>
		</header>
		<Nav />
		<main>
			<section className={styles.aPropos} id="aPropos">
				<h1>{titre}</h1>
				<h2>{subTitre}</h2>
				<p>{mainContent}</p>
			</section>
			<section className={styles.Transition}>
				<h1>{mesProjets}</h1>
			</section>
			{projects.map(project => (
				<ProjectSetup key={project.title} project={project} Texts={Texts} />
			))}
		</main>
	</>
	);
};
