"use client";
import React from 'react'
import styles from "@/style/styles.module.scss"
import Image from 'next/image';

const ChangeLangue = ({ langueActuel } : {langueActuel : 'en' | 'fr'}) => {

    const redirectTo = (lang : string) => 
    {
        if(langueActuel !== lang)
        {
            console.log("path :",window.location.pathname.slice(3));
            window.location.href = `/${lang}${window.location.pathname.slice(3)}`;
        }
                
    }

    return (
    <div className={styles.changementLangue}>
        <ul>
            <li onClick={() => redirectTo("fr")}>
                <Image 
                    src="/Langue/france.png"
                    alt='image drapeau français'
                    width={96}
                    height={96}                    
                />
            </li>
            <li onClick={() => redirectTo("en")}>
                <Image 
                    src="/Langue/gbt.png"
                    alt='image drapeau français'
                    width={96}
                    height={96}                    
                />
            </li>
        </ul>
    </div>
    )
}

export default ChangeLangue