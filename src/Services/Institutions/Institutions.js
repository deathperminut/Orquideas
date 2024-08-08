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
const CreateInstitutionV1=async (body)=>{
    
    const path  = environment.api + environment.createInstitution;
    return await axios.post(path,body);
}  

const DeleteInstitutionV1=async (id)=>{
    
    const path  = environment.api + environment.editInstitution + id + '/';
    return await axios.delete(path);
} 


export {GetInstitutions,UpdateInstitution,CreateInstitutionV1,DeleteInstitutionV1}
