
import Image from "next/image";
import styles from "@/style/styles.module.css"
import { Metadata } from "next";
import Texts from "@/app/Scripts/contents";
import ProjectSetup from "./components/ProjectSetup";
import DefilementText from "./components/DefilementText";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Sylvio",
};

export type project_t =
{
	key : number,
    title : string,
    description : string,
    comptence : string[],
    lien : string | null,
	siteweb : string | null,
	date:string
}

export default async function Home() {

	const {titre, subTitre, mainContent} = Texts.home;

	const projects : project_t[] = [
		{
			key : 1,
			title: "SylverService",
            description: 

			"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
		
			comptence : ["Python","MySQL"],
			lien : "https://github.com/Sylverstone/",
			siteweb : "https://sylverservice.up.railway.app/",
			date: "2024"
		},
		{
			key : 2,
            title: "BotDiscordBDE",
            description:
			
			"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",

			comptence : ["TypeScript","Discord"],
			lien : "https://github.com/Sylverstone/BotDiscordBDE",
			siteweb : null,
			date: "2024"
        },
		{
			key : 3,
            title: "pgmToAA",
            description:

			"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",

			comptence : ["cpp"],
			lien : null,
			siteweb : null,
			date: "2024"
        },
		{
			key : 4,
            title: "SylverDonjon",
            description:

			"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",

			comptence : ["Python"],
			lien : "https://github.com/Sylverstone/Sylver-Donjon",
			siteweb : null,
			date: "2023"
        },
		
	];
	
	return (
	<>
		<header>
			<DefilementText />
			<div>
				<Image 
					src="/photo_cv.jpg"
					alt="jsp"
					width={1000}
					height={1000}
					className={styles.ImageProfil}
					priority
				/>
				<p className="bienvenue">BIENVENUE DANS MON PORTFOLIO</p>
			</div>
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
