//fonction s'execute directe
import axios from "axios"
import "dotenv/config";

interface ReponseIndexNow
{
    statusCode : number;
    statusMessage : string;
    data : unknown;
}

(async () => {
    const baseUrl = "sylvio-pelagemaxime-portfolio.vercel.app"
    let url = `https://${baseUrl}/`;

    const data = {
        host: baseUrl,
        key: process.env.IndexNowKEY,
        keyLocation: `${url}${process.env.IndexNowKEY}.txt`,
        urlList: url
    };

    const response : ReponseIndexNow = await axios.post('https://api.indexnow.org/indexnow',
        data,{
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    );

    console.log("Result index Now : \n");
    console.log("Reponse Status : ", response.statusCode);
    console.log("Reponse Message : ", response.statusMessage);
    console.log("Reponse data : \n");
    console.table(response.data);

})();