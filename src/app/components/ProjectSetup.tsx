import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/style/styles.module.scss"
import { project_t } from '../Scripts/projects';
import { Texts_t } from '../Scripts/en';

const ProjectSetup = async({project,Texts} : {project : project_t, Texts : Texts_t}) => {
    
    let filesProjectImg : string[] = [];
    for(let i = 0; i < project.nombreImage; i++)
    {
        const file = `${project.title}${i+1}.png`;
        filesProjectImg.push(`/${project.title}/Project/${file}`);
    }

    let filesProjectTechUse : string[] = [];
    for(const comp of project.comptence)
    {
        filesProjectTechUse.push(`/Technologies/${comp}.svg`);
    }
    
    return (
    <section key={project.key} className={styles.projet} id={project.title}>
            <article className={styles.PresentationProg}>
                <h2>{project.title}</h2>
                <h3>Presentation</h3>
                {Texts.project[project.key - 1]?.presentation}
                {Texts.project[project.key - 1]?.technique && 
                    <>
                        <h3>Techniques</h3>
                        {Texts.project[project.key - 1].technique}
                    </>
                }

                {Texts.project[project.key - 1]?.fonctionnalitees && 
                    <>
                        <h3>{Texts.home.fonctionnalitees}</h3>
                        {Texts.project[project.key - 1]?.fonctionnalitees}
                    </>
                }
            </article>
           
            {filesProjectImg.length >= 1 && 
            <article className={styles.ImgProject}>
                <h3>{Texts.home.apercu}</h3>
                <ul>
                    {filesProjectImg.map(file => (
                        <li key={file}>
                            <Link href={file} target='_blank'>
                                <Image 
                                    src={file}
                                    alt={file}
                                    width={1000}
                                    height={1000}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </article>
            }
            <article className={styles.techUseProject}>
                <h3>{Texts.home.techUse}</h3>
                <ul>
                    {filesProjectTechUse && filesProjectTechUse.map(file => (
                        <li key={file}>
                            <Image 
                                src={file}
                                alt="jsp"
                                width={100}
                                height={100}
                            />
                        </li>
                    ))}
                </ul>
            </article>
            {(project.lien || project.siteweb) && 

            <article className={styles.liensProject}>
                <h4>{Texts.home.lien}</h4>
                <ul>
                    <li>
                        {project.lien && <Link href={project.lien} target='_blanks'>→ {project.lien.includes("github") ? "GitHub" : "Drive" }</Link>}
                    </li>
                    <li>
                        {project.siteweb && <Link href={project.siteweb} target='_blanks'>→ {Texts.home.siteWeb}</Link>}
                    </li>
                </ul>
            </article>
            }
            <p className={styles.date}>date : {project.date}</p> 
    </section>
    )
}

export default ProjectSetup;

