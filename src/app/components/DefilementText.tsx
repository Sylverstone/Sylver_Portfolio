"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import "@/style/globals.css"

const DefilementText = () => {
    const [texteDebut, settexteDebut] = useState("");
    const liste = [
        "Sylvio PELAGE MAXIME",
        "Étudiant en BUT informatique graphique"
    ]
    
    let i = 0;
    useEffect(() => {
        setInterval(() => {
            settexteDebut(liste[i % liste.length])
            i++;
     
        }, 8000);
    },[]);
   

    return  (
    <div className="defilementText">
        <p>{texteDebut}</p>
    </div>	
    )
}

export default DefilementText