"use client"
import React, { useEffect, useState } from 'react'

const GetDate = ({preText= ""}) => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {

    const updateTime = setInterval(() => {
        setDate(new Date().toLocaleTimeString());
    },1000)

    return () => {
        clearInterval(updateTime);
    }
  }, [])
  
  return (
    <p>{preText}{date}</p>
  )
}

export default GetDate