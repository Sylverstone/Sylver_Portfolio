"use client";
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import styles from "@/style/styles.module.scss"

const ImageProfil = () => {

    const nbImage = 3;
    const [ImgPos,setImgPos] = useState(1);
    const [src, setsrc] = useState("/photoProfil/photo_profil1.jpg");
    const [isOnAnim, setisOnAnim] = useState(false);

    const handleClick = (e : React.MouseEvent<HTMLImageElement, MouseEvent>) =>
    {
        if(!isOnAnim)
        {
            const target = e.currentTarget;
            setisOnAnim(true);
            target.classList.add(styles.blur);target.classList.add(styles.hidden)
            setTimeout(() => {
                target.classList.remove(styles.hidden);
                setisOnAnim(false);
                setImgPos((ImgPos + 1) % nbImage);
                setsrc(`/photoProfil/photo_profil${ImgPos + 1}.jpg`);
                console.log(`/photoProfil/photo_profil${ImgPos + 1}.jpg`);
            }, 1000);
        }
    
    }

    return (
        <>
            <Image 
                src={src}
                onClick={handleClick}
                alt="portrait Sylvio Pelage Maxime"
                width={1000}
                height={1000}
                className={styles.ImageProfil}
            />
        </>
    )
}

export default ImageProfil