"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import "@/style/globals.scss"
import { Texts_t } from '../translation/en';
import { makeCursorMove } from '../Scripts/cursorScript';
const DefilementText = ({ Texts } : {Texts : Texts_t}) => {

    const liste = [
        Texts.home.titre,
        Texts.home.etude,
        Texts.home.passion
    ]
    const [texteDebut, settexteDebut] = useState(liste[0]);
    const [i,seti] = useState(0);
    
    
    useEffect(() => {
        makeCursorMove(); // Initialisation du curseur
        const interval = setInterval(() => {
            seti(prev => (prev + 1) % liste.length); // Cycle propre
        }, 8000);
    
        return () => clearInterval(interval);
    }, []);
    
    // Mise à jour synchronisée
    useEffect(() => {
        settexteDebut(liste[i]);
    }, [i]); // Déclenché uni
   
    
    return  (
        <div className="defilementText">
            <p>{texteDebut}</p>
        </div>	
    )
}

export default DefilementText