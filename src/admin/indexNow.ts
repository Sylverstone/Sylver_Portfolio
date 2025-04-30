//fonction s'execute directe
import axios from "axios"
import "dotenv/config"

(async () => {
    const baseUrl = "https://sylvio-pelagemaxime-portfolio.vercel.app"
    let urls = [`${baseUrl}/fr`,`${baseUrl}/en`];

    if(process.env.IndexNowKey === undefined){
        console.log(process.env)
        return 
    }

    const data = {
        host: baseUrl,
        key: process.env.IndexNowKEY,
        keyLocation: `${baseUrl}/${process.env.IndexNowKEY}.txt`,
        urlList: urls
    };

    try
    {
        axios.post('https://api.indexnow.org/indexnow',
            data,{
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        ).then(response => {
           
            for(const key of Object.keys(response))
            {
                console.log(key, ":", response[key]);
            }
            console.log("Succes");
        })

    }
    catch(error)
    {
        console.log(error);
        console.log("Il y a eu une erreur")
        
    }
    

})();