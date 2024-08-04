import axios from "axios";
import { environment } from "../../environments/environments";




const GetRols=async ()=>{
    
    const path  = environment.api + environment.getRols;

    return await axios.get(path);
}


export {GetRols}