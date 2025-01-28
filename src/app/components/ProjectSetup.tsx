
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/style/styles.module.css"
import { fileURLToPath } from 'url';
import { project_t } from '../page'
import * as path from 'path'
import getFiles from "@/Scripts/getFiles"
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const ProjectSetup = ({project} : {project : project_t}) => {

    console.log(process.version)
    console.log("dir : ",__dirname)
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


    console.log(filesProjectTechUse)

    return (
    <section key={project.key} className={styles.projet}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            {filesProjectImg && 
            <article className={styles.ImgProject}>
                <h3>Aperçu du projet</h3>
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
                <h3>Technologies utilisées</h3>
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
                <h4>Lien.s</h4>
                <ul>
                    <li>
                        {project.lien && <Link href={project.lien} target='_blanks'>→ GitHub</Link>}
                    </li>
                    <li>
                        {project.siteweb && <Link href={project.siteweb} target='_blanks'>→ Site Web</Link>}
                    </li>
                </ul>
            </article>
            
            }
            <p className={styles.date}>date : {project.date}</p>
            
    </section>
    )
}

export default ProjectSetup;