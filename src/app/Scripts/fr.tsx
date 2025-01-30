import { Texts_t } from "./en";

const Texts : Texts_t = 
{
	home :
	{
		fonctionnalitees : "Fonctionnalitées",
		rights : "Tous droits réservés",
		meSuivre : "Me Suivre",
		lien : "Lien.s",
		siteWeb : "Site Web",
		apercu : "Aperçu du projet",
		techUse : "Technologies utilisées",
		mesProjets : "MES PROJETS",
		etude : "Etudiant en BUT Informatique graphique",
		bienvenue : "BIENVENUE DANS MON PORTFOLIO",
		titre : "Sylvio Pelage Maxime",
		subTitre : "Etudiant en BUT Informatique graphique",
		mainContent : 
		`
Depuis petit je suis passionné par les jeux vidéo, c'est pourquoi je souhaite devenir programmeur de jeux vidéo.
Le codage en général m'attire beaucoup, je ne m'intérèsse donc pas qu'au domaine du jeux vidéo mais également à celui du web.

Etant curieux de nature j'ai pu experimenté des languages comme C++ python C# JavaScript/TypeScript MySQL que ce soit pour des raisons scolaire ou tout simplement pour des projets personnels.
		`
	},
	project : 
	[
		{
			presentation : 
			<p>
<strong>Sylver Service</strong> est une application développée en <strong>Python</strong>, utilisant le module <strong>Pygame</strong>. Elle repose sur une base de données en ligne pour <strong>stocker les informations</strong>.<br /><br />
Son objectif principal est de <strong>permettre aux étudiants</strong> de trouver ou de publier des <strong>tutoriels et documents</strong> utiles à leur réussite scolaire.<br />
Ce projet a été réalisé en équipe de trois personnes : j’étais le <strong>programmeur principal</strong>, en collaboration avec un <strong>designer</strong> et un autre <strong>programmeur</strong>. Il a été présenté au <strong>Trophée NSI 2024</strong> et a remporté un <strong>prix en Guadeloupe</strong>.
			</p>,
			technique : 
			<p>
Dans ce projet, nous avons mis en <strong>pratique la programmation orientée objet (POO)</strong> et découvert la <strong>gestion de bases de données</strong>.<br />
Nous avons conçu des <strong>algorithmes efficaces</strong> afin <strong>d'optimiser les fonctionnalités clés de l’application</strong>. Ce projet a été l’occasion de me <strong>concentrer entièrement</strong> sur le développement d’une application complète, de l’architecture technique à l’interface utilisateur.
En parallèle, j’ai utilisé <strong>Git et GitHub</strong> de manière intensive pour le versioning et la gestion collaborative du code source.
			</p>,
			fonctionnalitees : 
			<>
				<p>
					<strong>L’utilisateur</strong> peut <strong>publier des documents ou rédiger</strong> des contenus personnalisés directement via l’application.
					Pour partager des tutoriels, il doit <strong>créer un compte</strong>, avec la possibilité de :
				</p>
				<ul>
					<li>Choisir une photo de profil</li>
					<li>Sélectionner une <strong>catégorie de profil</strong> (ex: Mathématiques, Informatique), qui détermine les filtres de recherche prédéfinis dans l’espace menu.</li>
				</ul>
				<p>La recherche s’effectue de <strong>trois</strong> façons :</p>
				<ol>
					<li>Par <strong>nom d'auteur</strong></li>
					<li>Par <strong>titre du tutoriel</strong></li>
					<li>Par <strong>catégorie</strong></li>
				</ol>
			</>
			
		},
		{
			presentation : 
			<p>
<strong>J'aime beaucoup</strong> faire des Bots discord c'est pourquoi j'ai décider d'en faire un par plaisir pour le <strong>BDE de mon IUT</strong>.
			</p>,
			technique : 
			<p>
	
Pour développer ce Bot j'utilise le <strong>DiscordJS</strong>.<br /><br />
Durant le développement j'ai fait la transition vers <strong>TypeScript</strong> car je trouvais qu'il devenait de plus en plus contraignant de coder en JavaScript à cause du typage. Avec TypeScript j'ai pu <strong>développé plus facilement</strong> et surtout plus sereinement.<br />
Concernant le Bot, il est <strong>multi-guild</strong>, c'est à dire qu'il peut être mit sur plusieurs Guilds et toujours fonctionné de la meilleur des manières, il ne <strong>confondra pas</strong> les infos des guildes.
			</p>,
			fonctionnalitees : 
			<>
				<p>
					Concernant ces infos, passons au <strong>fonctionnalitées</strong> du Bot, il peut :
				</p>
				<ul>
					<li><strong>Définir</strong> des <strong>réunions</strong></li>
					<li><strong>Sauvegarder et définir</strong> les <strong>récapitualifs de réunion</strong></li>
					<li><strong>Sauvegarder et défini</strong>r le <strong>lien d'un dossier</strong> contenant les fichiers des récapitulatif de réunion</li>
					<li><strong>Définir</strong> des Evènements</li>
					<li><strong>Afficher toutes les commandes</strong> disponibles ainsi que leur description</li>
					<li><strong>Afficher un tuto</strong> sur l'utilisation d'une commande</li>
				</ul>
				<p>C'est grâce a une <strong>base de donnée</strong> que le bot est capable de <strong>faire la distinction</strong> entre les informations des guilds, les enregistrements sont fait avec l'id de la guild, ce évite toutes confusions dans les requêtes SQL</p>
				
			</>
			
		},
		{
			presentation : 
			<p>
<strong>pgmToAA → pgm to AsciiArt</strong> Est un projet mené en équipe de 2 lors d'une SAÉ à l'IUT. Dans celle-ci nous devions implémenter les besoins d'un client qui voulait une application console permettant de convertir une image en AsciiArt. Et pour se faire nous passions par le format .pgm, d'où le titre du projet.
			</p>,
			technique : 
			<p>
Durant ce projet nous avons dû nous <strong>adapter</strong> au <strong>différentes implémentations que le client voulait instaurer</strong><br /> 
Afin de les instaurer nous avons dû mettre en place des algorithmes efficaces et qui répondait au besoin du client. Nous en avons également apprit plus sur l'utilisation et l'implémentation de paramètres dans une commandes.
			</p>,
			fonctionnalitees : 
			<>
				<p>
					Voici les fonctionnalitee de notre programme : 
				</p>
				<ul>
					<li><strong>transformer n'importe quel fichier .pgm en Ascii Art selon différentes palette</strong>, les palettes contiennent les caractères qui permettent de faire les nuances de gris. </li>
					<li><strong>transformer en redimensionner l'image</strong> en Ascii</li>
				</ul>
				<p>L'utilisateur peut également<strong>définir un fichier de sortie dans lequel serait afficher l'Ascii Art</strong>, sinon l'affichage se fait dans le terminal. Vous trouverez toutes les <strong>informations</strong> concernant les fonctionnalitées dans l'image du --help du programme</p>				
			</>
			
		},
		{
			presentation : 
            <p><strong>SylverDonjon</strong> est un projet Python réalisé en <strong>équipe de trois personnes</strong>, présenté au Trophée NSI 2023.
			Nous étions <strong>deux programmeur</strong>s accompagnés d'un <strong>designer</strong> pour ce projet.
			Le but du jeu est simple : le joueur choisit entre trois classes, puis doit terminer un donjon dans lequel il rencontrera différents ennemis. Le système de combat est au tour par tour. Avant un combat, le joueur doit choisir une potion qui lui attribuera un bonus.</p>,

			technique:
			<p>
				Dans ce projet, nous avons implémenté un <strong>système de sauvegarde et de chargement</strong> basé sur des fichiers textes. Malheureusement, nous avions l'interdiction d'utiliser la programmation orientée objet, donc nous avons dû utiliser <strong>des dictionnaires</strong> à la place. Le projet m'a permis <strong>d'en apprendre davantage sur l'utilisation du module Pygame</strong> et de développer des algorithmes complets. Ce fut également m'a première expérience avec le développement d'un jeu.
			</p>,

			fonctionnalitees:
            <>
			    <p>Nous avons opter pour un système simple de jeu infini où quand le jour arrive à la fin, celui-ci recommence simpelement, mais avec des ennemis plus fort.</p>        
            </>
		}
		
		
	]



}

export default Texts;


