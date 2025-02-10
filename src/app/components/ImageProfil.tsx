"use client";
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import styles from "@/style/styles.module.scss"

const ImageProfil = () => {

    const nbImage = 3;
    const [ImgPos,setImgPos] = useState(0);
    
    const handleClick = (e : React.MouseEvent<HTMLImageElement, MouseEvent>) =>
    {
        const target = e.currentTarget;

        target.classList.add(styles.blur);target.classList.add(styles.hidden)
        setTimeout(() => {
            target.classList.remove(styles.hidden);
            setImgPos((ImgPos + 1) % nbImage);
            target.setAttribute("src",`/photoProfil/photo_profil${ImgPos + 1}.jpg`);
        }, 1000);
        
    }

    return (
        <>
            <Image 
                src={`/photoProfil/photo_profil${ImgPos + 1}.jpg`}
                onClick={(e) => handleClick(e)}
                alt="portrait Sylvio Pelage Maxime"
                width={1000}
                height={1000}
                className={styles.ImageProfil}
            />
        </>
    )
}

export default ImageProfil