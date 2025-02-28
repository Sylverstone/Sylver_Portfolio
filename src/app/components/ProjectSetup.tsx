import React from 'react'
import Image from 'next/image';
import styles from "@/style/styles.module.scss"
import { project_t } from '../Scripts/projects';
import { Texts_t } from '../translation/en';
import Link from 'next/link';

const ProjectSetup = async({project,Texts} : {project : project_t, Texts : Texts_t}) => {
    
    let filesProjectImg : string[] = [];
    for(let i = 0; i <project.nombreImage; ++i)
    {
        const file = `${project.title}${i+1}.png`;

        filesProjectImg.push(`/${project.title}/Project/${file}`);
    }

    let filesProjectTechUse : string[][] = [];
    let i = 0;
    for(const comp of project.comptence)
    {
        filesProjectTechUse.push([`/Technologies/${comp}.svg`,project.subTitre[i]]);
        i++;
    }
    
    return (

    <section key={project.key} className={styles.projet} id={project.title}>
            <article className={styles.PresentationProg}>
                <h2>{project.title}</h2>
                {filesProjectImg.length >= 1 && 
                <article className={styles.ImgProject}>
                    <h3>{Texts.home.apercu}</h3>
                    <ul>
                        {filesProjectImg.map(file => (
                            <li key={file}>
                                <Link 
                                    href={file}
                                    download={false}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >                                      
                                    <Image 
                                        src={`${file}`}
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
                <h3>Presentation</h3>
                {Texts.project[project.title]?.presentation}
                {Texts.project[project.title]?.technique && 
                    <>
                        <h3>Techniques</h3>
                        {Texts.project[project.title].technique}
                    </>
                }

                {Texts.project[project.title]?.fonctionnalitees && 
                    <>
                        <h3>{Texts.home.fonctionnalitees}</h3>
                        {Texts.project[project.title]?.fonctionnalitees}
                    </>
                }
            </article>
           
            
            <article className={styles.techUseProject}>
                <h3>{Texts.home.techUse}</h3>
                <ul>
                    {filesProjectTechUse && filesProjectTechUse.map(file => (
                        <li key={file[0]}>
                            <Image 
                                src={`${file[0]}`}
                                alt={file[0]}
                                width={100}
                                height={100}
                            />
                            <figcaption>{file[1]}</figcaption>
                        </li>
                    ))}
                </ul>
            </article>
            {(project.lien || project.siteweb) && 

            <article className={styles.liensProject}>
                <h4>{Texts.home.lien}</h4>
                <ul>
                    <li>
                        {project.lien && 
                        <Link href={project.lien} target='_blanks' className={styles.linkImgProjet}>
                            → {project.lien.includes("github") ? "GitHub" : "Drive" }
                            <Image 
                                src={"/Technologies/github.svg"}
                                alt="logo github"
                                width={100}
                                height={100} 
                            />
                        </Link>}
                    </li>
                    <li>
                        {project.siteweb && 
                        <Link href={project.siteweb} target='_blanks' className={styles.linkImgProjet}>
                            → {Texts.home.siteWeb}
                            <Image 
                                src={"/web.png"}
                                alt="logo github"
                                width={100}
                                height={100} 
                            />
                        </Link>}
                    </li>
                </ul>
            </article>
            }
            <p className={styles.date}>date : {project.date}</p> 
    </section>
    )
}

export default ProjectSetup;

