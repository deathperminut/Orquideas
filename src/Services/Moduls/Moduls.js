import axios from "axios";
import { environment } from "../../environments/environments";




const getModuls=async ()=>{
    
    const path  = environment.api + environment.getModuls;

    return await axios.get(path);
}

const getUserModulActivities=async(path)=>{
        return await axios.get(path);
}


export {getModuls,getUserModulActivities}