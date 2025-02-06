
import Image from "next/image";
import styles from "@/style/styles.module.scss"
import { Metadata } from "next";
import ProjectSetup from "../components/ProjectSetup";
import DefilementText from "../components/DefilementText";
import { projects } from "../Scripts/projects";
import Nav from "../components/Nav";
import { getTexts } from "../Scripts/getTexts";
import ChangeLangue from "../components/ChangeLangue";


export const metadata: Metadata = {
	title: "Sylvio PELAGE MAXIME - Mon Portfolio",
	description: "Dans cette page vous trouverez quelques mots a propos de moi ainsi que mes projets",
	verification: 
	{
		google:"jhptsBxmILa9vLlhCAKya-9mtDZkvyWSRZdN_cm_r6k"
	}
};

export default async function Home({ params } : {params : Promise<{lang : 'en' | 'fr'}>}) {
	const lang = (await params).lang;
	let Texts = await getTexts(lang);
	const {titre,subTitre,bienvenue,mainContent,mesProjets,textePhoto} = Texts.home;

	return (
	<>
		<header>
		<ChangeLangue langueActuel={lang}/>
		<div className={styles.cursor}></div>
			<DefilementText Texts={Texts} />
			<div>
				<aside>
					<Image 
						src="/photo_cv.jpg"
						alt="portrait Sylvio Pelage Maxime"
						width={1000}
						height={1000}
						className={styles.ImageProfil}
						priority
					/>
					<p>{textePhoto}</p>
				</aside>
				<p className="bienvenue">{bienvenue}</p>
			</div>
		</header>
		<Nav Texts={Texts}/>
		<main>
			<section className={styles.aPropos} id="aPropos">
				<h1>{titre}</h1>
				<h2>{subTitre}</h2>
				<p>{mainContent}</p>
			</section>
			<section className={styles.Transition}>
				<h2>{mesProjets}</h2>
			</section>
			{projects.map(project => (
				<ProjectSetup key={project.title} project={project} Texts={Texts} />
			))}
		</main>
	</>
	);
};
