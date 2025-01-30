
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/style/styles.module.css"
import { fileURLToPath } from 'url';
import * as path from 'path'
import getFiles from "@/Scripts/getFiles"
import * as fs from 'fs'
import { project_t } from '../Scripts/projects';
import { Texts_t } from '../Scripts/en';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const ProjectSetup = ({project,Texts} : {project : project_t, Texts : Texts_t}) => {

    const basePath = path.join(__dirname,"..","..","..","public");
    if(!fs.existsSync(basePath)) return <><h2>Something went very bad !</h2></>
    const pathFileProjectIMG = path.join(basePath,project.title,"Project");
    const pathFileProjectTechImg = path.join(basePath,"Technologies");
    let filesProjectImg = getFiles(pathFileProjectIMG);
    let filesProjectTechUse = getFiles(pathFileProjectTechImg);

    if(filesProjectImg != undefined)
    {
        filesProjectImg = filesProjectImg.map(file => {
            return `/${project.title}/Project/${file}`;
        })
    }
        
    if(filesProjectTechUse != undefined)
    {
        filesProjectTechUse = filesProjectTechUse.filter(file => {
            const ext = path.extname(file)
            const fileWithoutExtension = file.slice(0, file.length - ext.length);
            return  project.comptence.includes(fileWithoutExtension)
        }).map(file => {return `/Technologies/${file}`});
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
           
            {filesProjectImg && 
            <article className={styles.ImgProject}>
                <h3>{Texts.home.apercu}</h3>
                <ul>
                    {filesProjectImg.map(file => (
                        <li key={file}>
                            <Link href={file} target='_blanks'>
                                <Image 
                                    src={file}
                                    alt="jsp"
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

