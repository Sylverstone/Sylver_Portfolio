"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import "@/style/globals.scss"
import { Texts_t } from '../Scripts/en';

const DefilementText = ({ Texts } : {Texts : Texts_t}) => {
    const liste = [
        Texts.home.titre,
        Texts.home.etude
    ]
    const [texteDebut, settexteDebut] = useState(liste[0]);

    
    let i = 1;
    useEffect(() => {
        setInterval(() => {
            settexteDebut(liste[i % liste.length])
            i++;
     
        }, 8000);
    }, []);
   
    
    return  (
        <div className="defilementText">
            <p>{texteDebut}</p>
        </div>	
    )
}

export default DefilementText