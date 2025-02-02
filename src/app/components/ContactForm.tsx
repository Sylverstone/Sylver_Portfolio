"use client";
import React, { useState }  from 'react'

interface champ_t
{
   value : string;
}

interface dataForm_t 
{
    name : champ_t;
    objet : champ_t;
    email : champ_t;
    message : champ_t;
};

export interface dataSendForm 
{
    name : string;
    email : string;
    objet : string;
    message : string;
}

const isChamp = (champ : any) : champ is champ_t => 
{
    return typeof champ === 'object'
    && "value" in champ
    && typeof champ.value ==='string';
}
const isDataForm = (data : any) : data is dataForm_t =>
{
    return typeof data === 'object'
    && "name" in data && "email" in data && "message" in data && "objet" in data
    && isChamp(data.name) && isChamp(data.email) && isChamp(data.message) && isChamp(data.objet)
    
}


const clearForm = (formData : dataForm_t)=> {
    formData.name.value = "";
    formData.email.value = "";
    formData.message.value = "";
    formData.objet.value = "";
}
const ContactForm = () => {
    const [sending, setsending] = useState(false);

    const sendData = async (data : dataSendForm) => 
    {
        try
        {
            setsending(true);
            await fetch("/api/form",{
                method : 'POST',
                body : JSON.stringify(data),
                headers : {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if(!response.ok)
                {
                    console.log("error tah les ouf wesh");
                    throw new Error("erreur de ouf");
                }
                return response.json();
            })
            .then(data => alert("L'envoie a été un succès :)"))
            .catch(error => alert("Une erreur a eu lieu :("));
        }
        catch (e)
        {
            setsending(false);
        }
        finally
        {
            console.log("sending is set to false");
            setsending(false);
        }
    }

    const sendForm = async(e : React.FormEvent<HTMLFormElement>)  =>
    {
        e.preventDefault();
        const formData = e.currentTarget;
        if(!isDataForm(formData)) return;
    
        const data : dataSendForm =  {
            name : formData.name.value,
            email : formData.email.value,
            message : formData.message.value,
            objet : formData.objet.value,
        }
        await sendData(data);
        clearForm(formData);
    }

    return (

        <form onSubmit={sendForm}>
            <fieldset>
                <legend>Envoyez moi un mail</legend>
                <input type="text" placeholder="Objet" name="objet" id='objet' required />
                <aside>
                    <input type="text" placeholder="Name" name="name" id='name' required />            
                    <input type="email" placeholder="Email" name="email" id='email'required />
                </aside>
                <textarea placeholder="Message" name="message" id='message' required></textarea>
                <button type="submit" disabled={sending}>
                    {sending? 'Sending...' : 'Send'}
                </button>
            </fieldset>
        </form>
    )
}

export default ContactForm