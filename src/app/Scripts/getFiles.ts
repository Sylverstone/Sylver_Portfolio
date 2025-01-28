
import * as fs from 'fs'

export default (paths : string) : string[] | undefined => {
    console.log(paths);
    let files : string[] = [];
    if(paths != undefined && fs.existsSync(paths))
    {
        files = fs.readdirSync(paths);
    }
    
    return files.length === 0 ? undefined : files;
}