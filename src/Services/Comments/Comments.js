import axios from "axios";
import { environment } from "../../environments/environments";




const GetComments=async ()=>{
    
    const path  = environment.api + environment.getComments;

    return await axios.get(path);
}

const CreateComment=async (body)=>{
    
    const path  = environment.api + environment.createComment;
    return await axios.post(path,body);
}  



export {GetComments,CreateComment}
