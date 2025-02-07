"use client";
import React, { useEffect } from 'react'
import { makeScript } from '../Scripts/ScriptApp';

const ScriptComponent = () => {
    useEffect(() => 
    {
        makeScript();
    })
  return null;
}

export default ScriptComponent