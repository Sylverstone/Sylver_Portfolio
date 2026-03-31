import fs from "fs";
import dotenv from "dotenv";

dotenv.config({ path : "./../.env"});
async function main()
{
    const url = `https://www.sylvio-pelagemaxime.fr/`;


    let urls = [""];
    const json = JSON.parse(fs.readFileSync("./../Config/projects.json"));

    const projects = Object.keys(json);
    urls = urls.concat(projects.map(path => `Projets/${path}`));

    console.log(urls);

    const UrlsSite = urls.map(p => `${url}${p}`);

    console.log(UrlsSite);
    console.log(process.env.INDEXNOWKEY);

    const response = await fetch("https://api.indexnow.org/IndexNow", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            host : "www.sylvio-pelagemaxime.fr",
            key : `${process.env.INDEXNOWKEY}`,
            keyLocation : `https://www.sylvio-pelagemaxime.fr/${process.env.INDEXNOWKEY}.txt`
            ,urlList : UrlsSite
        })
    });

    if(!response.ok)
    {
        console.log("Fetch failed");
        return;
    }

    console.log(response);

    console.log("Fetch success")
}

main();