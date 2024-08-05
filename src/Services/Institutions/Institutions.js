import axios from "axios";
import { environment } from "../../environments/environments";




const GetInstitutions=async ()=>{
    
    const path  = environment.api + environment.getInstitutions;

    return await axios.get(path);
}

const UpdateInstitution=async (body)=>{
    
    const path  = environment.api + environment.editInstitution + body.id + '/';
    return await axios.put(path,body);
}


export {GetInstitutions,UpdateInstitution}
