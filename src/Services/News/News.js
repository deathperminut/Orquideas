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

const EditNews=async (body,id)=>{
    
    const path  = environment.api + environment.updateNew+id+'/';
    
    return await axios.put(path,body);
}

const DeleteNew=async(id)=>{
    const path  = environment.api + environment.updateNew+id+'/';
    
    return await axios.delete(path);
}


export {GetNews,CreateNews,EditNews,DeleteNew}
