import React from "react";
import { JSX } from "react";

type project_t = {presentation : JSX.Element, technique : JSX.Element, fonctionnalitees : JSX.Element}[];

export interface Texts_t 
{
    home: {

		"etude" : string,
		"bienvenue" : string;
        "titre": string;
        "subTitre": string;
        "mainContent": string;
		"mesProjets" : string;
		"apercu" : string;
		"techUse" : string;
		"siteWeb" : string;
		"lien" : string;
		"meSuivre" : string;
		"rights" : string;
		"fonctionnalitees" : string;
		"aPropos" : string;
		"mesProjetNav" : string;
    },
	project : project_t;
};

const Texts : Texts_t = 
{
	home :
	{
		fonctionnalitees : "Fonctionnality",
		rights : "All rights reserved",
		meSuivre : "Follow Me",
		lien : "Link.s",
		siteWeb : "Website",
		apercu : "Project Overview",
		techUse : "Tech Stack Used",
		mesProjets : "MY PROJECTS",
		etude : "Student in Computer Graphics Bachelor",
		bienvenue : "WELCOME TO MY PORTFOLIO",
		titre : "Sylvio Pelage Maxime",
		subTitre : "Student in Computer Graphics Bachelor",
		aPropos : "About Me",
		mesProjetNav : "My Projects",
		mainContent : 
		`
Since I was a child, I have been passionate about video games, which is why I want to become a video game programmer.
Coding in general attracts me a lot, so I am not only interested in the field of video games but also in web development.

Being naturally curious, I have experimented with languages like C++, Python, C#, JavaScript/TypeScript, and MySQL, whether for academic reasons or simply for personal projects.
		`
	},
	project : 
	[
		{
		  presentation: (
			<p>
			  <strong>Sylver Service</strong> is an application developed in <strong>Python</strong>, using the <strong>Pygame</strong> module. It relies on an online database to <strong>store information</strong>.<br /><br />
			  Its main goal is to <strong>allow students</strong> to find or publish <strong>tutorials and documents</strong> useful for their academic success.<br />
			  This project was carried out by a team of three people: I was the <strong>lead programmer</strong>, collaborating with a <strong>designer</strong> and another <strong>programmer</strong>. It was presented at the <strong>Trophée NSI 2024</strong> and won a <strong>prize in Guadeloupe</strong>.
			</p>
		  ),
		  technique: (
			<p>
			  In this project, we applied <strong>object-oriented programming (OOP)</strong> and learned about <strong>database management</strong>.<br />
			  We designed <strong>efficient algorithms</strong> to <strong>optimize the application's key features</strong>. This project allowed me to <strong>fully focus</strong> on developing a complete application, from technical architecture to the user interface.
			  In parallel, I used <strong>Git and GitHub</strong> extensively for versioning and collaborative source code management.
			</p>
		  ),
		  fonctionnalitees: (
			<>
			  <p>
				<strong>Users</strong> can <strong>publish documents or write</strong> custom content directly through the application.
				To share tutorials, they must <strong>create an account</strong>, with the ability to:
			  </p>
			  <ul>
				<li>Choose a profile picture</li>
				<li>Select a <strong>profile category</strong> (e.g., Mathematics, Computer Science), which determines the predefined search filters in the menu.</li>
			  </ul>
			  <p>The search can be performed in <strong>three</strong> ways:</p>
			  <ol>
				<li>By <strong>author name</strong></li>
				<li>By <strong>tutorial title</strong></li>
				<li>By <strong>category</strong></li>
			  </ol>
			</>
		  ),
		},
		{
		  presentation: (
			<p>
			  <strong>I really enjoy</strong> making Discord bots, which is why I decided to create one for fun for the <strong>BDE of my IUT</strong>.
			</p>
		  ),
		  technique: (
			<p>
			  To develop this bot, I used <strong>DiscordJS</strong>.<br /><br />
			  During development, I transitioned to <strong>TypeScript</strong> because I found it increasingly cumbersome to code in JavaScript due to typing issues. With TypeScript, I was able to <strong>develop more easily</strong> and, most importantly, more confidently.<br />
			  Regarding the bot, it is <strong>multi-guild</strong>, meaning it can be added to multiple guilds and still function optimally without <strong>mixing up</strong> the guilds' information.
			</p>
		  ),
		  fonctionnalitees: (
			<>
			  <p>
				Regarding its features, the bot can:
			  </p>
			  <ul>
				<li><strong>Schedule</strong> meetings</li>
				<li><strong>Save and define</strong> meeting summaries</li>
				<li><strong>Save and define</strong> the link to a folder containing meeting summary files</li>
				<li><strong>Define</strong> events</li>
				<li><strong>Display all available commands</strong> along with their descriptions</li>
				<li><strong>Display a tutorial</strong> on how to use a command</li>
			  </ul>
			  <p>Thanks to a <strong>database</strong>, the bot can <strong>distinguish</strong> between guilds' information. Records are made using the guild's ID, which avoids any confusion in SQL queries.</p>
			</>
		  ),
		},
		{
		  presentation: (
			<p>
			  <strong>pgmToAA → pgm to AsciiArt</strong> is a project carried out by a team of two during an SAÉ at the IUT. In this project, we had to implement the requirements of a client who wanted a console application to convert an image into AsciiArt. To achieve this, we used the .pgm format, hence the project's title.
			</p>
		  ),
		  technique: (
			<p>
			  During this project, we had to <strong>adapt</strong> to the <strong>different implementations the client wanted to introduce</strong>.<br />
			  To implement them, we had to create efficient algorithms that met the client's needs. We also learned more about using and implementing parameters in commands.
			</p>
		  ),
		  fonctionnalitees: (
			<>
			  <p>
				Here are the features of our program:
			  </p>
			  <ul>
				<li><strong>Convert any .pgm file into Ascii Art using different palettes</strong>. The palettes contain characters that allow for grayscale shading.</li>
				<li><strong>Transform and resize the image</strong> into Ascii.</li>
			  </ul>
			  <p>The user can also <strong>define an output file where the Ascii Art will be displayed</strong>; otherwise, it will be shown in the terminal. You can find all the <strong>information</strong> about the features in the program's --help image.</p>
			</>
		  ),
		},
		{
		  presentation: (
			<p>
			  <strong>SylverDonjon</strong> is a Python project developed by a <strong>team of three</strong>, presented at the Trophée NSI 2023.
			  We were <strong>two programmers</strong> accompanied by a <strong>designer</strong> for this project.
			  The goal of the game is simple: the player chooses between three classes, then must complete a dungeon where they will encounter various enemies. The combat system is turn-based. Before a fight, the player must choose a potion that will grant them a bonus.
			</p>
		  ),
		  technique: (
			<p>
			  In this project, we implemented a <strong>save and load system</strong> based on text files. Unfortunately, we were prohibited from using object-oriented programming, so we had to use <strong>dictionaries</strong> instead. The project allowed me to <strong>learn more about using the Pygame module</strong> and develop complete algorithms. It was also my first experience with game development.
			</p>
		  ),
		  fonctionnalitees: (
			<>
			  <p>We opted for a simple infinite game system where, when the player reaches the end, the game simply restarts, but with stronger enemies.</p>
			</>
		  ),
		},
	  ]
};


export default Texts;