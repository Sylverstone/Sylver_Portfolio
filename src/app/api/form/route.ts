import { NextResponse } from "next/server"
import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import * as path from "path";
import { dataSendForm } from "@/app/components/ContactForm";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const  __dirname = path.dirname(__filename);

console.log(path.join(__dirname, ".env"))
dotenv.config({path : path.join(__dirname, ".env") });

function sleep(ms : number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function POST(request : Request) 
{
    try
    {
        console.log(process.env.EMAILOUT, process.env.EMAILIN);
        if(process.env.EMAILIN == undefined) return;
        const dataForm : dataSendForm= await request.json()
        const transporteur = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: process.env.EMAILIN,
                pass: process.env.PASSWORD,
            },
        });

        const html = `<h1>Email Automatique :)</h1>
                      <ul>
                            <li>Nom : ${dataForm.name}</li>
                            <li>Email : ${dataForm.email}</li>
                            <li>Message : ${dataForm.message}</li>
                      </ul>`;

        const mailOptions = {
            from: process.env.EMAILIN,
            to: process.env.EMAILOUT,
            subject: `Formulaire portfolio - ${dataForm.objet}`,
            html: html,
        };                      
        
        console.log(dataForm);
        const info = await transporteur.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        
    }
    catch(e)
    {
        return NextResponse.error();
    }
    finally
    {
        return NextResponse.json({
            message: "Data Received",
            success: true,
        })
    }
}