import axios from "axios";
import { environment } from "../../environments/environments";




const GetNews=async ()=>{
    
    const path  = environment.api + environment.getNews;

    return await axios.get(path);
}


const CreateNews=async (body)=>{
    
    const path  = environment.api + environment.createNew;
    return await axios.post(path,body);
    
}

const EditNews=async (body)=>{
    
    const path  = environment.api + environment.updateNew+body?.id+'/';
    
    return await axios.put(path,body);
}


export {GetNews,CreateNews,EditNews}
