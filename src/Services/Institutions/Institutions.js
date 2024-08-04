import axios from "axios";
import { environment } from "../../environments/environments";




const GetInstitutions=async ()=>{
    
    const path  = environment.api + environment.getInstitutions;

    return await axios.get(path);
}


export {GetInstitutions}
