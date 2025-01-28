"use client";
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'


const Nav = () => {
    const handleClick = (ev : React.MouseEvent<HTMLAnchorElement,MouseEvent>,target : string) => 
    {
        const AProposELT = document.querySelector(target);
        const evTarget = ev.currentTarget;
        if(!(ev.target instanceof HTMLElement)) return;
        if(!AProposELT) return;
        const rectevTargetRect = evTarget.getBoundingClientRect();
        const rect = AProposELT.getBoundingClientRect();
        const bas = rectevTargetRect.top + rectevTargetRect.height;
        console.log(rect.height);

        window.scrollTo({
            top : rect.top - (bas * 1.5) + window.scrollY  ,
            behavior : "smooth"
        })
        ev.preventDefault();
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link href="#aPropos" onClick={(e) => handleClick(e,"#aPropos")}>
                        A Propos
                    </Link>
                </li>
                <li>
                    <Link href="#SylverService" onClick={(e) => handleClick(e,"#SylverService")}>
                        Mes Projets
                    </Link>
                </li>
            </ul>
        </nav>
    )
    }

export default Nav