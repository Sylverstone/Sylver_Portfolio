
import * as fs from 'fs'

const getFile = (paths : string) : string[] | undefined => {
    
    let files : string[] = [];
    if(paths != undefined && fs.existsSync(paths))
    {
        files = fs.readdirSync(paths);
    }
    
    return files.length === 0 ? undefined : files;
}

export default getFile;