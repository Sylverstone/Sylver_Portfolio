
import React from 'react'
import styles from "@/style/styles.module.css"
import { project_t } from '../page'

const ProjectSetup = ({project} : {project : project_t}) => {
  return (
    <section key={project.key} className={styles.projet}>
					<h2>{project.title}</h2>
					<ul>
						{project.image.map(image => (
                            <li key={image}>
                                guettez l'image : {image}
                            </li>
                        ))}
					</ul>
					<p>{project.description}</p>
					<h3>Listes des compétences tah les oouf</h3>
					<ul>
                        {project.comptence.map(comptence => (
                            <li key={comptence}>{comptence}</li>
                        ))}
                    </ul>
					{project.lien && <p>wesh la zone voici le lien : {project.lien}</p>}
		</section>
  )
}

export default ProjectSetup;