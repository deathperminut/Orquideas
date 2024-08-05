import axios from "axios";
import { environment } from "../../environments/environments";




const getModuls=async ()=>{
    
    const path  = environment.api + environment.getModuls;

    return await axios.get(path);
}


export {getModuls}