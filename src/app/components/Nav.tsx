"use client";
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { visible } from '@/Scripts/visible';
import { Texts_t } from '../translation/en';

const handleClick = (ev : React.MouseEvent<HTMLAnchorElement,MouseEvent>,target : string) => 
{
    const elementCible = document.querySelector(target);
    const evTarget = ev.currentTarget;
    if(!elementCible) return;
    const rectevTargetRect = evTarget.getBoundingClientRect();
    const rect = elementCible.getBoundingClientRect();
    const bas = rectevTargetRect.top + rectevTargetRect.height;
    window.scrollTo({
        top : rect.top - (bas * 1.5) + window.scrollY  ,
        behavior : "smooth"
    })
    ev.preventDefault();
}
const  Nav = ({ Texts } : {Texts : Texts_t}) => {

    const [compteur, setcompteur] = useState(0);
    const [srcImg, setsrc] = useState("/valid.svg");
    const srcArray : string[] = [
        "/delete.svg",
        "/valid.svg",
    ];
    

    const handleClickDeleter = (ev : React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const nav = document.querySelector("nav");
        const croix = ev.currentTarget;
        if(!nav) return;

        const Childs = nav.querySelectorAll("li");
        if(compteur % 2 === 0)
        {
            for(const child of Childs)
            {
                child.style.opacity = "0";
                child.style.display = "none";
                
            }
            
            nav.style.width = "15%";
            nav.style.alignSelf = "baseline";
            nav.style.backgroundColor = "transparent";
            
        }
        else
        {
            for(const child of Childs)
            {
                
                child.style.opacity = "1";
                setTimeout(() => {child.style.display = "block"}, 400);
            }
            nav.style.width = "90%";
            croix.className = "ImgDelete";
            nav.style.backgroundColor = "rgba(0,0,0, .5)";
        }
        console
        croix.setAttribute("src", srcImg);
        setcompteur(compteur + 1);
        setsrc(srcArray[compteur%2]);
    }

    return (

        <nav>
            <Image onClick={handleClickDeleter}
                src="/delete.svg"
                alt='image croix réduire Ul'
                width={1000}
                height={1000}
                className="ImgDelete"
            />
            <ul>
                <li>
                    <Link href="#aPropos" onClick={(e) => handleClick(e,"#aPropos")}>
                        {Texts.home.aPropos}
                    </Link>
                </li>
                <li>
                    <Link href="#SylverService" onClick={(e) => handleClick(e,"#SylverService")}>
                        {Texts.home.mesProjetNav}
                    </Link>
                </li>
            </ul>
        </nav>

    )
}

export default Nav