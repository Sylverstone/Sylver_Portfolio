//fonction s'execute directe
import axios from "axios"
import "dotenv/config"

(async () => {
    const baseUrl = "sylvio-pelagemaxime-portfolio.vercel.app"
    let url = [`https://${baseUrl}/`];

    if(process.env.IndexNowKey === undefined){
        console.log(process.env)
        return 
    }

    const data = {
        host: baseUrl,
        key: process.env.IndexNowKEY,
        keyLocation: `${url}${process.env.IndexNowKEY}.txt`,
        urlList: url
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
        })

    }
    catch(error)
    {
        console.log(error);
    }
    

})();