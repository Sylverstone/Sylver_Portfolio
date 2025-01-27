
import Image from "next/image";
import styles from "@/style/styles.module.css"
import { Metadata } from "next";
import Texts from "@/app/Scripts/contents";
import ProjectSetup from "./components/ProjectSetup";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Sylvio",
};

export type project_t =
{
	key : number,
    title : string,
    description : string,
    image : string[],
    comptence : string[],
    lien : string | null,
}

export default async function Home() {

	const {titre, subTitre, mainContent} = Texts.home;

	const projects : project_t[] = [
		{
			key : 1,
			title: "Projet 1",
            description: "Description du projet 1",
            image: ["/image2.jpg","/image3.jpg","/image4.jpg"],
			comptence : ["huiduhd","huifhf","uihfuifghiufh"],
			lien : "uighfduighei"
		},
		{
			key : 2,
            title: "Projet 2",
            description: "Description du projet 2",
            image: ["/image9.jpg","/image5.jpg","/image4.jpg"],
			comptence : ["huiduhd","huifhf","uihfuifghiufh"],
			lien : "uighfduighei"
        },
		{
			key : 3,
            title: "Projet 3",
            description: "Description du projet 3",
            image:["/image9.jpg","/image5.jpg","/image4.jpg"],
			comptence : ["huiduhd","huifhf","uihfuifghiufh"],
			lien : null
        },
		
	];
	
	return (
	<>
		<header>
			<Image 
			src="/photo_cv.jpg"
			alt="jsp"
			width={1000}
			height={1000}
			className={styles.ImageProfil}
			priority
			/>
			<p>BIENVENUE DANS MON PORTFOLIO</p>
		</header>
		<main>
			<section className={styles.aPropos}>
				<h1>{titre}</h1>
				<h2>{subTitre}</h2>
				<p>{mainContent}</p>
			</section>
			<section className={styles.Transition}>
				<h1>MES PROJETS</h1>
			</section>
			{projects.map(project => (
				<ProjectSetup key={project.title} project={project}/>
			))}
		</main>
	</>
	);
};
